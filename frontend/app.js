let name = document.getElementById("name");
let number = document.getElementById("number");
let email = document.getElementById("email");
let date = document.getElementById("date");
let schoolName = document.getElementById("schoolName");
let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", validateForm);

function validateForm() {
  if (name.value == "") {
    alert("name field empty");
    return false;
  } else if (number.value == "") {
    alert("number field empty");
    return false;
  } else if (date.value == "") {
    alert("date field empty");
    return false;
  } else if (email.value == "") {
    alert("email field empty");
    return false;
  } else if (schoolName.value == "") {
    alert("school name field empty");
    return false;
  } else if (number.value.length < 10 || number.value.length > 10) {
    alert("number can't be less than 10 or greater than 10");
    return false;
  }
  calculateAge();
}
function calculateAge() {
  let currentYear = new Date().getFullYear();
  let userDate = new Date(date.value);
  let userFullYear = userDate.getFullYear();
  if (userFullYear < 2008) {
    alert("Year can't less than 2008 ");
    document.getElementById("date").value = "";
  } else {
    if (currentYear - userFullYear > 12 && currentYear - userFullYear <= 15) {
      console.log("belong to user group of 13 to 15");
    }
    if (currentYear - userFullYear >= 9 && currentYear - userFullYear <= 12) {
      console.log("belong to age group of 9 to 12");
    }
    if (currentYear - userFullYear >= 6 && currentYear - userFullYear < 9) {
      console.log("belong to age group of 6 to 8");
    }
    if (currentYear - userFullYear >= 3 && currentYear - userFullYear < 6) {
      console.log("belong to age group of 3 to 6");
    }
    // console.log(currentYear)
    randomRegistrationNumber();
    return saveDataFunc();
  }
}
function randomRegistrationNumber() {
  const random = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
  ];
  function getRandomNumber() {
    return Math.floor(Math.random() * random.length);
  }
  let name = "ROTARY";
  for (let i = 0; i < 8; i++) {
    name += random[getRandomNumber()];
  }
  console.log("REGISTRATION NUMBER:" + name);
}
let resultArr = [];
function saveDataFunc() {
  resultArr.push(name.value);
  resultArr.push(number.value);
  resultArr.push(email.value);
  resultArr.push(date.value);
  resultArr.push(schoolName.value);
  console.log(resultArr);
  name.value = "";
  number.value = "";
  email.value = "";
  date.value = "";
  schoolName.value = "";
}
