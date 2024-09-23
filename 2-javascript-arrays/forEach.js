// sample array of students
const students = [
  {
    name: "Jill",
    lastname: "Doe",
    age: 24,
    course: "Marketing",
  },
  {
    name: "John",
    lastname: "Doe",
    age: 22,
    course: "Web Development",
  },
  {
    name: "Jack",
    lastname: "Doe",
    age: 20,
    course: "Accounting",
  },
  {
    name: "Ryan Jhon",
    lastname: "Ray",
    age: 23,
    course: "Web Development",
  },
  {
    name: "Jane",
    lastname: "Doe",
    age: 20,
    course: "Financial Management",
  },
];

for(let i = 0; i < students.length; i++) {
  console.log(students[i])
}

students.forEach(function (student, index, students) { 
  /*li passo la funció que s'ha executar per cada un 
  estudiant, la posició i l'array (l'únic que és obligatori és el primer paràmetre)*/
  console.log(student)
  console.log(index)
  console.log(students)
})

const fullnames = [];

students.forEach((student) => {
  fullnames.push(student.name + " " + student.lastname);
});

console.log(fullnames);

students.forEach(console.log(students));

