    function getMarks(subject) {
      let marks;
      do {
        let input = prompt(`Enter marks for ${subject} (0 to 100)`);
        marks = (!input || isNaN(input.trim()))
          ? (alert("Invalid input! Please enter a number only"), NaN)
          : Number(input);
        (marks < 0 || marks > 100) && alert("Marks must be between 0 and 100");
      } while (isNaN(marks) || marks < 0 || marks > 100);
      return marks;
    }

    const maxMarksPerSubject = 100;

    // Get marks
    const math = getMarks("Math");
    const english = getMarks("English");
    const science = getMarks("Science");
    const computer = getMarks("Computer");
    const urdu = getMarks("Urdu");
    const islamiat = getMarks("Islamiat");

    // Calculate total using rest operator


    const calculateTotal = function (...marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  return total;
};


    const totalMarks = calculateTotal(math, english, science, computer, urdu, islamiat);
    const totalSubjects = 6;
    const percentage = (totalMarks / (totalSubjects * maxMarksPerSubject)) * 100;

    // Ternary operator using for grade
    const grade =
      percentage >= 90 && percentage <= 100 
      ? "A+" 
      :percentage >= 80 && percentage <= 89 
      ? "A" 
      :percentage >= 70 && percentage <= 79 
      ? "B" 
      :percentage >= 60 && percentage <= 69 
      ? "C"
      :percentage >= 50 && percentage <= 59 
      ? "D"
      : "Fail";




    // Short circuit using for resultMessage
    const resultMessage = grade === "Fail" && " Keep working hard and better luck next time!" || "Excellent efforts!";

    // Bootstrap table
    document.getElementById("markSheet").innerHTML = `
      <table class="table table-bordered table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Math</td><td>${math}</td></tr>
          <tr><td>English</td><td>${english}</td></tr>
          <tr><td>Science</td><td>${science}</td></tr>
          <tr><td>Computer</td><td>${computer}</td></tr>
          <tr><td>Urdu</td><td>${urdu}</td></tr>
          <tr><td>Islamiat</td><td>${islamiat}</td></tr>
        </tbody>
        <tfoot>
          <tr><th>Total Marks</th><th>${totalMarks} / ${totalSubjects * maxMarksPerSubject}</th></tr>
          <tr><th>Percentage</th><th>${percentage.toFixed(2)}%</th></tr>
          <tr><th>Grade</th><th>${grade}</th></tr>
          <tr><th>Feedback</th><th>${resultMessage}</th></tr>
        </tfoot>
      </table>
    `;
    

