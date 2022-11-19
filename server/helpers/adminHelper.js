let db = require("../config/connection");
let collection = require("../config/collection");
const { ObjectId} = require("mongodb");
const { response, json } = require("express");

module.exports = {
  doAdminLogin: (adminData) => {
    return new Promise(async (resolve, reject) => {
      const admin = await db
        .get()
        .collection(collection.Admin_COLLECTION)
        .findOne({ email: adminData.email });
      console.log(admin);
      if (admin) {
        if (adminData.password == admin.password) {
          response.user = admin;
          response.status = true;

          resolve(response);
        } else {
          resolve({ status: false });
        }
      } else {
        resolve({ status: false });
      }
    });
  },
  findallUser: () => {
    return new Promise(async (resolve, reject) => {
      const userDetails = await db
        .get()
        .collection(collection.User_COLLECTION)
        .find()
        .toArray();
      resolve(userDetails);
    });
  },
  delectUser: (id) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collection.User_COLLECTION)
        .deleteOne({ _id: ObjectId(id) })
        .then((data) => {
          console.log("sucess");
          console.log(data);
          resolve(data);
        });
    });
  },

  editUser: (data) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collection.User_COLLECTION)
        .updateOne(
          {
            _id: ObjectId(data.id),
          },
          {
            $set: {
              email: data.email,
              name: data.name,
            },
          }
        )
        .then((response) => {
          resolve();
        });
    });
  },
};
