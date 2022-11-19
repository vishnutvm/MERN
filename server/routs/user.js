
let express = require("express");
let router = express.Router();
let userHelper = require("../helpers/userHelpers");
const jwt = require("jsonwebtoken");

router.post("/api/register", async (req, res) => {
  console.log(req.body);

  userHelper
    .userRegister(req.body)
    .then((response) => {
        res.json({ status: "Successfull updated" });
    })
});

router.post("/api/login", (req, res) => {
  userHelper.douserLogin(req.body).then((response) => {
    console.log(response);
    if (response.status) {
      const token = jwt.sign(
        {
          userId: response.user._id,
          name: response.user.name,
          email: response.user.email,
        },
        "SKey5flwx"
      );
      return res.json({ status: "ok", user: token });
    } else {
      res.json({ status: "error", user: false });
    }
  });
});

module.exports = router;
