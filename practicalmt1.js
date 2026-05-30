function reverseNumber() {
    let num = document.getElementById("numberInput").value;

    if (num === "") {
        document.getElementById("result").innerText = "Please enter a number!";
        return;
    }

    let reversed = num.toString().split("").reverse().join("");

    document.getElementById("result").innerText = "Reversed: " + reversed;
}