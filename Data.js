//Data.js
(function init() {

  var studentArray, gradeArray;

//Array of student names
  studentArray = [new Student("Alpesh", "Ahir"),
    new Student("John", "Doe"),
    new Student("Mike", "Miller"),
    new Student("Robin", "Field"),
    new Student("Tanis", "Field"),
    new Student("Baby", "Ahir")
  ];
  console.log(studentArray);
  addStudents(studentArray);

//Array of student information
  gradeArray = [new Grade("Alpesh Ahir", "Software Design", "4.0"),
    new Grade("Alpesh Ahir", "Database System", "3.7"),
    new Grade("Alpesh Ahir", "Computer Networks", "3.4"),
    new Grade("John Doe", "Back-end Engineering", "3.1"),
    new Grade("John Doe", "Seminar", "2.8"),
    new Grade("Baby Ahir", "Computer Architecture", "2.5"),
    new Grade("Baby Ahir", "Software Testing", "2.2"),
    new Grade("Mike Miller", "Front-end Engineering", "2.5"),
    new Grade("Mike Miller", "Software Process", "2.8"),
    new Grade("Robin Field", "Project", "3.2"),
    new Grade("Robin Field", "Machine Learning", "2.5"),
    new Grade("Robin Field", "Neural Network", "2.8"),
    new Grade("Tanis Field", "Computer Graphics", "2.2"),
    new Grade("Tanis Field", "Basic Electronics", "2.5"),
    new Grade("Tanis Field", "Thesis", "2.8")
  ];
  console.log(gradeArray);
  addGrade(gradeArray);

})();
