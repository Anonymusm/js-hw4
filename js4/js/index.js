// 1
let field1 = prompt("Введіть перше значення");
let field2 = prompt("Введіть друге значення");

if (field1 && field2) {
  console.log("Обидва поля заповнені");
}
else {
  console.log("Не всі поля заповнені");
}
// 2
let sum1 = parseFloat(prompt("Введіть одне число"));
let sum2 = parseFloat(prompt("Введіть друге число"));

let sum = sum1 + sum2;

if (sum > 10) {
  console.log("Сума більша за 10");
}
else {
  console.log("Сума менша або дорівнює 10");
}

// 3
const text = "I am learning JavaScript";
{
  if (text.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");
  }
  else {
    console.log("Текст не містить слово JavaScript");
  }
}
// 4
let num = prompt("Введіть одне число");
if (num > 10 && num < 20) {
  console.log("Число входить в діапазон від 10 до 20");
}
else {
  console.log("Число не входить в діапазон від 10 до 20");
}
// 5
let name = prompt("Введіть ваше ім'я");
let email = prompt("Введіть ваш email");
let password = prompt("Введіть ваш пароль");

if (name.length < 3) {
  console.log("Ім'я повинно містити не менше 3 символів.");
}
else if (!email.includes("@") && !email.includes(".")) {
  console.log("Email має містити символ '@' та крапку після нього.");
}
else if (password.length < 6) {
  console.log("Пароль повинен містити не менше 6 символів.");
}
else {
  console.log("Дані заповнено правильно. Перенаправлення...");
  window.location.href = "https://edu.goiteens.com/";
}
// Я загуглив як зробити так з посиланням
