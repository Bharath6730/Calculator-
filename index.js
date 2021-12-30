//CALCULATOR : MAIN FUNCTION 

var joining = []
var value =[]
var operator = ""
var count = 0
var size = 2.25   

$(".buton").click(function (e) {
    var number = e.currentTarget.innerHTML
    var textH1 = ""

    if ($("#span-id").text() == "NaN"){
        joining = []
    }else if ($("#span-id").text() == "Infinity"){
        joining = []
    }


    if (number in [1,2,3,4,5,6,7,8,9,0]) {
        joining.push(number)
        for (var i =0; i < joining.length;i++){
            textH1= textH1 + joining[i]
        }  
    $("#span-id").text(textH1);
    }else {
        textH1 = $("#span-id").text()
        value.push(textH1)
        switch (number) {
            case "+":
                joining.push(number)
                if (count == 0 ){
                    textH1 = textH1 +  number 
                    $("#span-id").text(textH1)
                } else{
                    calculate(operator)
                    textH1 = $("#span-id").text()
                    joining.push(number)
                    textH1 = textH1 + number
                    $("#span-id").text(textH1)
                }
                
                operator = "+"
                count = count +1
                break;
            case "-":
                joining.push(number)
                if (count == 0 ){
                    textH1 = textH1 + number
                    $("#span-id").text(textH1)
                } else {
                    calculate(operator)
                    textH1 = $("#span-id").text()
                    joining.push(number)
                    textH1 = textH1 + number
                    $("#span-id").text(textH1)
                }
                operator = "-"
                count = count +1
                break;   
            case "x":
                joining.push(number)
                if (count == 0 ){
                    textH1 = textH1 + number 
                    $("#span-id").text(textH1)
                } else {
                    calculate(operator)
                    textH1 = $("#span-id").text()
                    joining.push(number )
                    textH1 = textH1 +  number 
                    $("#span-id").text(textH1)
                }
                operator = "x"
                count = count +1
                break;
            case "/":
                joining.push(number)
                if (count == 0 ){
                    textH1 = textH1 + number
                    $("#span-id").text(textH1)
                } else if(count ==1){
                    calculate(operator)
                    textH1 = $("#span-id").text()
                    joining.push(number)
                    textH1 = textH1 + number
                    $("#span-id").text(textH1)
                } else {
                    console.log("count > 1")
                }
                operator = "/"
                count = count +1
                break;
            case ".":
                joining.push(number)
                textH1 = textH1 + number
                $("#span-id").text(textH1)
                break;
            case "RESET":            
                textH1 = "0"
                $("#span-id").text(textH1)
                joining = []
                count = 0
                value = []
                break;
            case "DEL":

                if ($("#span-id").text() == "NaN"){
                    $("#span-id").text("0")
                    joining = []                    
                }else if ($("#span-id").text() == "Infinity"){
                    $("#span-id").text("0")
                    joining =[ ]
                }else {
                    var check = textH1[(textH1.length ) - 1]
                    textH1 = textH1.slice(0,(textH1.length - 1))
                    joining = joining.slice(0,(joining.length - 1))
                    
                    if (textH1.length == 0) {
                        $("#span-id").text("0")
                    }else {
                        $("#span-id").text(textH1)
                    }
                    if (check == operator){
                        console.log("yes")
                        count = 0
                    } 
                }

                              
                break;
            case "=":
                calculate(operator)
                break;                                       
            default:
                console.log(number)
                break;
        }
    }


    //Font size Change
    var widthOfText = document.getElementById("span-id").offsetWidth
    var widthOfDiv = document.getElementsByTagName("h1")[0].clientWidth    
    if (widthOfText > widthOfDiv) {
        size = size-0.25        
        var sizeString = (size).toString() + "rem"
        $("#span-id").css("font-size",sizeString)  

    }
    if ($("#span-id").text() == "0") {
        $("#span-id").css("font-size","3rem")
        size=3         
    }

})
function calculate (operator) {
    if ($("#span-id").text() == "NaN"){
        $("#span-id").text("0")
        joining = []                    
    }else if ($("#span-id").text() == "Infinity"){
        $("#span-id").text("0")
        joining =[ ]
    }else {
        value = $("#span-id").text().split(operator)
        value[0]  = Number(value[0])
        value[1] = Number(value[1])
        console.log(value[0],value[1])
        switch (operator) {
            case "+":
                var ans = value[0] + value[1]
                var ansString = ans.toString()
                $("#span-id").text(ans)
                joining = ansString.split("")
                value = [ans]
                count = 0
                break;
            case "-":
                var ans = value[0] - value[1]
                var ansString = ans.toString()
                $("#span-id").text(ans)
                joining = ansString.split("")
                value = [ans]
                count = 0
                break;
            case "x":
                var ans = value[0] * value[1]
                ans = Math.round(ans*1000) / 1000
                var ansString = ans.toString()
                $("#span-id").text(ans)
                joining = ansString.split("")
                value = [ans]
                count = 0
                break;        
            case "/":
                var ans = value[0] / value[1]
                ans = Math.round(ans*1000) / 1000
                var ansString = ans.toString()
                $("#span-id").text(ans)
                joining = ansString.split("")
                value = [ans]
                count = 0
                break;
            default:
                console.log(operator)
                break;
            }
    }
    
    
}




// Theme Change
document.getElementById("slideTheme").addEventListener("input", function () {
    var theme = this.value
    var common = document.documentElement.style
    if (theme == 1){
        common.setProperty("--body-color","hsl(222, 26%, 31%)") 
        common.setProperty("--calculator-color","hsl(224, 36%, 15%)")
        common.setProperty("--toggle-background","hsl(223, 31%, 20%)")
        common.setProperty("--toggle-btn","hsl(25, 98%, 40%)")
        common.setProperty("--font-color","white")
        common.setProperty("--calctxt-color","hsl(223, 31%, 20%)")
        for (var i = 0; i<document.querySelectorAll(".buton").length;i++ ){
            document.querySelectorAll(".buton")[i].style.color = "hsl(225, 21%, 49%)"
        }
        $(".buton").css("background-color","hsl(45, 7%, 89%)")
        $(".lt").css("color","white")
        $(".dl").css("color","white")
        $(".eq").css("background-color","hsl(25, 98%, 40%)")
        $(".dl").css("background-color","hsl(185, 42%, 37%)")

        //Box shadow
        $(".buton").css("box-shadow","0 3px hsl(35, 11%, 61%)")
        $(".dl").css("box-shadow","0 3px hsl(185, 58%, 25%)")
        $(".eq").css("box-shadow","0 3px hsl(25, 99%, 27%)")
    }
    else if (theme == 2){
        common.setProperty("--body-color","hsl(0, 0%, 90%)") 
        common.setProperty("--calculator-color","hsl(0, 5%, 81%)")
        common.setProperty("--toggle-background","hsl(0, 5%, 81%)")
        common.setProperty("--toggle-btn","hsl(25, 98%, 40%)")
        common.setProperty("--font-color","black")
        common.setProperty("--calctxt-color","hsl(0, 0%, 93%)")
        $(".buton").css("color","black")
        $(".buton").css("background-color","hsl(45, 7%, 89%)")
        $(".dl").css("color","white")
        $(".eq").css("color","white")
        $(".eq").css("background-color","hsl(25, 98%, 40%)")
        $(".dl").css("background-color","hsl(185, 42%, 37%)")

        //Box shadow
        $(".buton").css("box-shadow","0 3px hsl(35, 11%, 61%)")
        $(".dl").css("box-shadow","0 3px hsl(185, 58%, 25%)")
        $(".eq").css("box-shadow","0 3px hsl(25, 99%, 27%)")
    }
    else if (theme == 3){
        common.setProperty("--body-color","hsl(268, 75%, 9%)") 
        common.setProperty("--calculator-color","hsl(268, 71%, 12%)")
        common.setProperty("--toggle-background","hsl(268, 71%, 12%)")
        common.setProperty("--toggle-btn","hsl(176, 100%, 44%)")
        common.setProperty("--font-color","hsl(52, 100%, 62%)")
        common.setProperty("--calctxt-color","hsl(268, 71%, 12%)")
        $(".buton").css("color","hsl(52, 100%, 62%)")
        $(".buton").css("background-color","hsl(268, 47%, 21%)")
        $(".dl").css("color","white")
        $(".eq").css("color","hsl(198, 20%, 13%)")
        $(".eq").css("background-color","hsl(176, 100%, 44%)")
        $(".dl").css("background-color","hsl(281, 89%, 26%)")
        //Box shadow
        $(".buton").css("box-shadow","0 3px hsl(290, 70%, 36%)")
        $(".dl").css("box-shadow","0 3px hsl(285, 91%, 52%)")
        $(".eq").css("box-shadow","0 3px hsl(177, 92%, 70%)")
                
    }
})
