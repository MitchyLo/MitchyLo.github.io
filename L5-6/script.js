function show_topic() {
  var x = document.getElementById("demo");
  var my_name = prompt("Enter your name");
  x.style.fontSize = "25px";
  x.style.color = "red";
  document.getElementById("demo").innerHTML = "My name is " + my_name;
}

function PS2() {
    var score = 0, text;
    a = document.getElementById("ans1").value;
    if (a == "Pork chop") {
        score = score + 1;
    } else {}
    b = document.getElementById("ans2").value;
    if (b == "Decomposing") {
        score = score + 1;
    } else {}
    c = document.getElementById("ans3").value;
    if (c == "His hair goes on furever") {
        score = score + 1;
    } else {}
    d = document.getElementById("ans4").value;
    if (d == "Of course, a house doesn't jump at all") {
        score = score + 1;
    } else {}
    e = document.getElementById("ans5").value;
    if (e == "Ireland, because every year it's Dublin") {
        score = score + 1;
    } else {}

    if(score == 5) {
	text = "Congratulations, you got a full score! Happy punning :)"
    } else {
	text = "Your score was " + score + " out of 5. Keep working hard and punning even harder!"
    }
    document.getElementById("demo").innerHTML = text;
}
