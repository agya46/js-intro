!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction to JavaScript</title>
    <script src="hello.js">
    </script>
    <script src="logic.js">
    </script>
</head>

<body>
    <h2>JavaScript Prompt</h2>

    <button onclick="myFunction()">Try it</button>

    <p id="demo"></p>

    <script>
        function myFunction() {
            var txt;
            var person = prompt("Please enter your name:", "Isaac Agya Koomson");
            if (person == null || person == "") {
                txt = "User cancelled the prompt.";
            } else {
                txt = "Hello " + person + "! the training program is very interesting and am happy for it";
            }
            document.getElementById("demo").innerHTML = txt;
        }
    </script>
</body>

</html>
