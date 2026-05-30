function calculateResult() {

    let subjects = parseInt(document.getElementById("subjects").value);

    if (subjects <= 0 || isNaN(subjects)) {
        alert("Please enter a valid number of subjects");
        return;
    }

    let total = 0;

    for (let i = 1; i <= subjects; i++) {

        let marks = parseInt(
            prompt("Enter marks for Subject " + i)
        );

        total += marks;
    }

    let average = total / subjects;

    let grade = "";
    let result = "";

    if (average >= 90) {
        grade = "A+";
    }

    else if (average >= 75) {
        grade = "A";
    }

    else if (average >= 60) {
        grade = "B";
    }

    else if (average >= 40) {
        grade = "C";
    }

    else {
        grade = "F";
    }

    if (average >= 40) {
        result = "PASS";
    }

    else {
        result = "FAIL";
    }

    document.getElementById("output").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average Marks: " + average.toFixed(2) + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + result;
}