// const moment = require('moment');

module.exports = {
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()
      }`;
  },
  // : (event) => {
  //   return console.log("Helloooooo");
  // }
};
