document.getElementById("pl1_score").innerHTML = localStorage.getItem("pl1") + " : 0";
document.getElementById("pl2_score").innerHTML = localStorage.getItem("pl2") + " : 0";
document.getElementById("question_turn").innerHTML = "Question turn : " + localStorage.getItem("pl1");
document.getElementById("ans_turn").innerHTML = "Answer turn : " + localStorage.getItem("pl2");
var p1_score = 0;
var p2_score = 0;
var turn = "p1";
function Send() {
    var word = document.getElementById("word").value;
    localStorage.setItem("word", word);
    if (word.length > 5) {
        var word_lower = word.toLowerCase();
        var htmlData = "";
        var label1 = '<h5> Enter the word in the text box </h5>';
        var removecharat1 = word_lower.replace(word_lower[1], "_");
        var removecharat2 = removecharat1.replace(removecharat1[3], "_");
        document.getElementById("design").innerHTML = removecharat1;
        var txt_input = '<br> <br> <input id="answer"class="form-control"type="text" placeholder="Enter the missing word">'
        var check = '<br> <br> <button onclick="check()"id="log_in"class="btn btn-primary">Check</button>'
        htmlData = label1 + removecharat2 + txt_input + check;
        document.getElementById("design").innerHTML = htmlData;
        document.getElementById("word").value = "";
        document.getElementById("error").style.display = "none";
    }
    else {
        document.getElementById("error").style.display = "block";
    }

}

function check() {
    var word = document.getElementById("answer").value;
    if (turn == "p1") {
        if (localStorage.getItem("word").toLowerCase() == word.toLowerCase()) {
            turn = "p2";
            p2_score = p2_score + 1
            document.getElementById("question_turn").innerHTML = "Question turn : " + localStorage.getItem("pl2");
            document.getElementById("ans_turn").innerHTML = "Answer turn : " + localStorage.getItem("pl1");
            document.getElementById("design").innerHTML = "";

            document.getElementById("pl2_score").innerHTML = localStorage.getItem("pl2") + " : "+p2_score;
        }
    }

    else {
        if (localStorage.getItem("word").toLowerCase() == word.toLowerCase()) {
            turn = "p1";
            p1_score = p1_score + 1
            document.getElementById("question_turn").innerHTML = "Question turn : " + localStorage.getItem("pl1");
            document.getElementById("ans_turn").innerHTML = "Answer turn : " + localStorage.getItem("pl2");
            document.getElementById("design").innerHTML = "";
            document.getElementById("pl1_score").innerHTML = localStorage.getItem("pl1") + " : "+p1_score;
        }
    }
}
