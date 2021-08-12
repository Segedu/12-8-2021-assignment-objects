////1
// const person = {
//   name: "aschalegn",
//   lastName: "aschenek",
//   eyeColor: "brown",
//   hairColor: "black",
//   height: 1.67,
//   age: 40,
//   weight: function () {
//     return this.age / this.height;
//   },
//   bmi: function (weight) {
//     return weight / this.height ** 2;
//   },
// };
// console.log(person.weight());
// console.log(person.bmi(23.1));

////2
// const student = {
//   firstName: "Shy",
//   lastName: "Sendeke",
//   telphone: 0542111666,
//   mail: "shysendeke@gmail.com",
//   grades: [75, 80, 90, 65, 90, 85],
// };
// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student.telphone);
// console.log(student.mail);
// console.log(student.grades);

////3
// const student = {
//   firstName: "Shy",
//   lastName: "Sendeke",
//   telphone: 0542111666,
//   mail: "shysendeke@gmail.com",
//   grades: [75, 80, 90, 65, 90, 85],
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// console.log(student.fullName());

////4
// const student = {
//   firstName: "Shy",
//   lastName: "Sendeke",
//   telphone: 0542111666,
//   mail: "shysendeke@gmail.com",
//   grades: [90, 80, 90, 90, 90, 85],
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
//   avrage: function () {
//     let sum = 0;
//     for (let i = 0; i < this.grades.length; i++) {
//       sum += this.grades[i];
//     }
//     return sum / this.grades.length;
//   },
// };
// console.log(student.avrage());

////5
// const student = {
//   firstName: "Shy",
//   lastName: "Sendeke",
//   telphone: "0542111666",
//   mail: "shysendeke@gmail.com",
//   grades: [90, 80, 90, 90, 90, 85],
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
//   avrage: function () {
//     let sum = 0;
//     for (let i = 0; i < this.grades.length; i++) {
//       sum += this.grades[i];
//     }
//     return sum / this.grades.length;
//   },
//   minimalGrade: function () {
//     let min = this.grades[0];
//     for (let i = 1; i < this.grades.length; i++) {
//       if (this.grades[i] <= min) {
//         min = this.grades[i];
//       }
//     }
//     return min;
//   },
// };
// console.log(student.minimalGrade());
