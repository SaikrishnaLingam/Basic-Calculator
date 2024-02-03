let num1 = "";
let num2 = "";
let op = "";
let show = document.querySelector("input");
for (var i = 0; i < document.querySelectorAll(".grid-item").length; i++) {  //add event listener to all the buttons
    document.querySelectorAll(".grid-item")[i].addEventListener("click", function(){
        if (num1 == "" && !this.classList.contains('num') && this.innerHTML != "AC") {  //alert if num not selected at the beginning
            alert("Select a number");
        }
        else {
            if (this.innerHTML == "=") {
                if (op && num2) {
                    calculate();
                }
                op = "";
            }
            else if (this.innerHTML == "⬅") {   //clear last char
                if (num2 !== "") {
                    num2 = num2.substring(0, num2.length - 1);
                } 
                else if (op) {
                    op = "";
                } 
                else {
                    num1 = num1.substring(0, num1.length - 1);
                }
            }
            else if (this.innerHTML == "AC") {  //clear everything
                num1 = "";
                num2 = "";
                op = "";
            }
            else if (this.classList.contains("operator")) {
                    if (op && num2) {   //if operator & num2 already exist, first evaluate, then display result, then store the new operator
                        //doesn't follow PEMDAS
                        calculate();
                        if (num2) {
                            show.value = num2;
                        }
                        else {
                            show.value = num1;
                        }
                    }
                    op = this.innerHTML;    //if no operator till now, then store operator in op
            }
            else {  //if no operator, append number to num1
                if (op) {   
                    num2 += this.innerHTML;
                }
                else {
                    num1 += this.innerHTML;
                }
            }

            //we want to first display num1, then num2. So if num2 is not empty, it means we have already displayed num1.
            //that's why we first display num2, then num1 iff num2 is empty
            if (num2) {
                show.value = num2;
            }
            else {
                show.value = num1;
            }
            //we don't clear the screen after = because we want to use the prev result for further calculations
        }
        
    })
}

let number = "";
for (var i = 0; i < document.querySelectorAll(".grid-item").length; i++) {  //add event listener to all the buttons
    document.querySelectorAll(".grid-item")[i].addEventListener("click", function(){
        if (number == "" && !this.classList.contains('num') && this.innerHTML != "AC") {  //alert if num not selected at the beginning
            alert("Select a number");
        }
        else {
            if (this.innerHTML == "=") {
                number = eval(number);
                document.querySelector("input").value = number; 
                number = "";
            }
            else if (this.innerHTML == "⬅") {
                number = number.substring(0, number.length-1);
                document.querySelector("input").value = number; 
            }
            else if (this.innerHTML == "AC") {
                number = "";
                document.querySelector("input").value = number; 
            }
            else {
                number += this.innerHTML;
                document.querySelector("input").value = number; 
            }
            
        }
        
    })
}

// function calculate() {
//     switch (op) {
//         case '+':
//             num1 = (parseFloat(num1) + parseFloat(num2)).toString();
//             break;
//         case '-':
//             num1 = (parseFloat(num1) - parseFloat(num2)).toString();
//             break;
//         case '*':
//             num1 = (parseFloat(num1) * parseFloat(num2)).toString();
//             break;
//         case '/':
//             num1 = (parseFloat(num1) / parseFloat(num2)).toString();
//             break;
//         default:
//             break;
//     }
//     num2 = "";
// }