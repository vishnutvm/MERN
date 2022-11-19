let db = require("../config/connection");
let collection = require("../config/collection");
const bcrypt = require("bcrypt");

module.exports = {
  userRegister: async (userData) => {
        return new Promise(async (resolve, reject) => {
          userData.password = await bcrypt.hash(userData.password, 10);

          db.get()
            .collection(collection.User_COLLECTION)
            .insertOne(userData)
            .then((data) => {
              resolve(data);
            })
        })
      

  },
  douserLogin: (userData) => {
    return new Promise(async (resolve, reject) => {
      let response = {};
      let user = await db
        .get()
        .collection(collection.User_COLLECTION)
        .findOne({ email: userData.email });
      if (user) {
        bcrypt.compare(userData.password, user.password).then((status) => {
          if (status) {
            response.user = user;
            response.status = true;
            resolve(response);
          } else {
            resolve({ status: false });
          }
        });
      } else {
        resolve({ status: false });
      }
    });
  },
  findUser: (email) => {
    return new Promise(async (resolve, reject) => {
      let user = await db
        .get()
        .collection(collection.User_COLLECTION)
        .findOne({ email: email });
      console.log(user);
      resolve(user);
    });
  }
};
