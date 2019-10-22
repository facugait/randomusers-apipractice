const fetch = require('node-fetch');
const logOk = require('../../utils/logOk');
const logOut = require('../../utils/logOut');

const URL = process.env.API_URL;
const options = { "method": "GET" };

const getUrl = (url, method) => {
  return fetch(url, method)
    .then(res => res.json())
    .catch(err => {
      console.error(`Error ${err}`);
    });
};

const userController = {

  getRandomUser: async (req, res) => {
    try {
      const data = await getUrl(URL, options);
      res.status(200).json({
        "success": true,
        "msg": "User found!",
        "user": data
      });
      logOk.info('Data OK!');
    }
    catch (error) {
      res.status(404).json({
        "success": false,
        "msg": `Error ${error}`
      });
      logOut.info(`Data error ${error}`);
    }
  },

  filterByAge: async (req, res) => {
    try {
      const data = await getUrl(URL, options);
      const userName = data.name;
      const userAge = data.age;
      if (userAge <= 30) {
        res.status(200).json({
          "success": true,
          "msg": "User found!",
          "name": userName,
          "age": userAge
        });
      } else {
        res.status(404).json({
          "msg": "User not found"
        });
      }
    }
    catch (error) {
      res.status(400).json({
        "success": false,
        "msg": `Error ${error}`
      });
    }
  },

  filterByGenderFem: async (req, res) => {
    try {
      const data = await getUrl(URL, options);
      const userName = data.name;
      const userGender = data.gender;
      if (userGender === "female") {
        res.status(200).json({
          "success": true,
          "msg": "User found!",
          "name": userName,
          "gender": userGender
        });
      } else {
        res.status(404).json({
          "msg": "User not found"
        });
      }
    }
    catch (error) {
      res.status(400).json({
        "success": false,
        "msg": `Error ${error}`
      });
    }
  },

  filterByAgeAndGenderFem: async (req, res) => {
    try {
      const data = await getUrl(URL, options);
      const userName = data.name;
      const userAge = data.age;
      const userGender = data.gender;
      if (userAge <= 30 && userGender === "female") {
        res.status(200).json({
          "success": true,
          "msg": "User found!",
          "name": userName,
          "age": userAge,
          "gender": userGender
        });
      } else {
        res.status(404).json({
          "msg": "User not found"
        });
      }
    }
    catch (error) {
      res.status(400).json({
        "success": false,
        "msg": `Error ${error}`
      });
    }
  },

}

module.exports = userController;