var rate = document.getElementById("rate").value;
// range slider display
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%"; 
}
//overall calculation
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    if (principal <=0) {
        alert("Please enter a positive number");
        document.getElementById('principal').focus();
        return false;
    }
    else{
        var interest = (principal * years * rate) / 100;
        var year = new Date ().getFullYear() + parseInt(years);
        var result = document.getElementById("result");

        result.innerHTML =`<br></br>
          If you deposit <mark>${principal}</mark>,<br> at an interest rate of <mark>${rate + "%"}</mark>,<br>
        You will recieve an amount of <mark>${interest}</mark>,<br></br>
        in the year <mark>${year}</mark>`;
    }
    
}
        