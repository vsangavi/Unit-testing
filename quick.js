const age = 21;
const mockUserData = [
  {
    name: "sangavi",
    dob: 16 / 02 / 2000,
  },
  { name: "raghul",
   dob: 12 / 09 / 1990 
  },
];
module.exports = {
  checksAge: function (userAge, age) {
    //
    return userAge > age;
  },
  calculatesAge: function (mockUserData) {
    let userAge;
    //calls checksAge
    let reultArray=[];
    //use moment js to calculate age
    //push it to a empty array
  },
  checkDB:function(resultArray){
   //
  }
};
