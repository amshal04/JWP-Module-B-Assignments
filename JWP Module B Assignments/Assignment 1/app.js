// Q1: Biodata
const fullName = "Amshal Tariq",
      email = "amshal.tariq@gmail.com";
      age = 23;
      city = "Karachi";
      education = "Bachelor of Textile Designing";
      occupation = "Textile Designer";
      phone = "0312-209-9106";
      institute = "Indus University";

document.write(
  `<h1>Q1 Biodata</h1> 
   <b>Name</b> ${fullName}<br><br> 
   <b>Email</b> <a href="mailto:${email}">${email}</a><br><br> 
   <b>Age</b> ${age}<br><br> 
   <b>City</b> ${city}<br><br>
   <b>Education</b> ${education}<br><br>
   <b>Occupation</b> ${occupation}<br><br> 
   <b>Phone Number</b> ${phone}<br><br> 
   <b>Institute Name</b> ${institute}<br><br>`
);




// Q2: Mark Sheet

function getMarks(subject) {
  let marks;
  do {
    let input = prompt(`Enter marks for ${subject} (0 to 100)`);
    if (input === null || input.trim() === "" || isNaN(input)) {
      alert("Invalid input! Please enter a number only");
      continue;
    }
    marks = Number(input);
    if (marks < 0 || marks > 100) {
      alert("Marks must be between 0 and 100");
    }
  } while (isNaN(marks) || marks < 0 || marks > 100);
  return marks;
}

let english = getMarks("English"),
    math = getMarks("Math");
    science = getMarks("Science");
    computer = getMarks("Computer");
    urdu = getMarks("Urdu");
    totalMarks = 500;
    obtainedMarks = english + math + science + computer + urdu;
    percentage = (obtainedMarks / totalMarks) * 100;
    grade = "";

if (percentage >= 80) {
    grade = "A+";
} else if (percentage >= 70) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else {
    grade = "Fail";
}

document.write(
  `<h1>Q2 Mark Sheet</h1>
   <b>English</b> ${english}<br><br>
   <b>Math</b> ${math}<br><br>
   <b>Science</b> ${science}<br><br>
   <b>Computer</b> ${computer}<br><br>
   <b>Urdu</b> ${urdu}<br><br>
   <b>Total Marks</b> ${totalMarks}<br><br>
   <b>Obtained Marks</b> ${obtainedMarks}<br><br>
   <b>Percentage</b> ${percentage.toFixed(2)}%<br><br>
   <b>Grade</b> ${grade}<br><br>`
);







// Q3:

// var
// reinitialize 
// reassign 
// hoisting 
// blockscope 

var a = "Saniya";  
var xyz;             
var a = "Sana";     
console.log(a);      
a = "Saniya";      

// Function scope with var
function xyz() {
  var a = "Sana";   
  console.log(a);    
}
xyz();












