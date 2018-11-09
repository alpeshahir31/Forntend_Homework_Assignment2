//Controller.js file

function studentList() {
  console.log("Search button was clicked!!");
  var lastName = document.getElementById('last_name').value;
  var tab = document.getElementById("tableBody");
  tab.innerHTML = "";
  var lb = document.getElementById("grade-label");
  lb.innerHTML = "";

  if (lastName)
    document.getElementById("list").innerHTML = "";
  for (i = 0; i < student_list.length; i++)
    if (lastName.toLowerCase() == student_list[i].last_name.toLowerCase()) {
      console.log(student_list[i].first_name.toUpperCase());
      var node = document.createElement("li");
      node.setAttribute("id", i);

      node.onclick = function() {
        var divid = event.target.id;
        generateGrade(divid);
      };

      var studentNode = document.createTextNode(student_list[i].first_name + " " + student_list[i].last_name);
      node.appendChild(studentNode);
      document.getElementById("list").appendChild(node);
    }

}


function generateGrade(divid) {

  console.log(divid);
  var el = document.getElementById(divid).innerHTML;
  console.log(el);
  var table = document.getElementById("tab-1");

  var tb = document.getElementById("tableBody");
  tb.innerHTML = "";

  console.log(tb);

  for (i = 0; i < grades.length; i++)
    if (el.toLowerCase() == grades[i].name.toLowerCase()) {
      var name = grades[i].name;
      var row = tb.insertRow();
      var cell_1 = row.insertCell(0);
      var cell_2 = row.insertCell(1);
      cell_1.innerHTML = grades[i].course;
      cell_2.innerHTML = grades[i].gpa;
      document.getElementById("grade-label").innerHTML = "Grades for " + name + " :";
      console.log(grades[i].course + "-" + grades[i].gpa);
    }
}
