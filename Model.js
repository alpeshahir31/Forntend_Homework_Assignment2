//Model.js
var student_list, grades;
student_list = new Array();
grades = new Array();

function Student(fname, lname) {
  this.first_name = fname;
  this.last_name = lname;
}

function Grade(name, course, gpa) {
  this.name = name;
  this.course = course;
  this.gpa = gpa;
}

function addStudents(s_obj) {
 for (i = 0; i < s_obj.length; i++) {
   var s = new Student(s_obj[i].first_name, s_obj[i].last_name);
   student_list.push(s);
 }
 //console.log(student_list);
}

function addGrade(s_obj) {
 for (i = 0; i < s_obj.length; i++) {
   var s = new Grade(s_obj[i].name, s_obj[i].course, s_obj[i].gpa);
   grades.push(s);
 }
 //console.log(grades);
}
