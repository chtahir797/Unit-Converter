// logic behind the conversion  
    function tmpconversion() {
        var getinput = document.getElementById("c").value;
        if (getinput === "") {
            alert("Please enter any number");
        }
        else {
            var farenhite = (getinput * 9 / 5) + 32;
            document.getElementById("f").value = farenhite;

            //creating new div with class answer and assigning text and then attaching it to div called answerDiv

            // var newdiv = document.createElement("div");
            // newdiv.className = "answer";
            // newdiv.innerHTML = "<p> Your Conversion in farenhite is = " + farenhite + "&deg;" + "F</p>";
            // document.getElementById("answerDiv").appendChild(newdiv);
            // setTimeout(function(){
            //     document.getElementById("answerDiv").removeChild(newdiv)
            // }, 4000)
        }
    }
    function wgtconversion() {
        var getinput = document.getElementById("kg").value;
        if (getinput === "") {
            alert("Please enter any number");
        }
        else {
            var weight = (getinput * 2.205);
            document.getElementById("lbs").value = weight;
        }
    }
    function dstconversion() {
        var getinput = document.getElementById("km").value;
        if (getinput === "") {
            alert("Please enter any number");
        }
        else {
            console.log(getinput);
            var distance = (getinput / 1.609);
            document.getElementById("m").value = distance;
        }
    }
