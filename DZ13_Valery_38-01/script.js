// let number = document.querySelector(".number").innerHTML = "0";
// function colorNumberChange(number) {
//     for (change of number) {
//         if (Number(number) == 0) {
//             document.getElementById("rir").style.col = "green";
//             console.log("ffgff");
//         }
//         else if (number < 0) {
//             document.body.number[1].style.color = "#FF0000";
//         }
//         else if (number > 0) {
//             document.body.number[1].style.color = "#00FF00";
//         }
//     }
// }
// let letter = document.querySelector(".rir");


let rir = document.getElementById("rir").innerHTML = "-5";
function increase() {         
    rir++;
    document.getElementById('rir').innerHTML= -+rir;
    return changeColor();
}
function decrease() {
    rir--;
    document.getElementById('rir').innerHTML= -rir;
    return changeColor();
}
function reset() {
    rir = 0;
    document.getElementById('rir').innerHTML= 0;
    return changeColor();
}

//   for (rirs of rir) {  
    function changeColor() {
       if (Number(rir) === 0) {
            document.getElementById("rir").style.color = "gray";
        }
        else if (Number(rir) < 0) {
            document.getElementById("rir").style.color = "green";
        } 
        else if (Number(rir) > 0) {
            document.getElementById("rir").style.color = "red";
        }   
    }
         


     // function changeColor() {
// }
// let buttonOne = document.getElementsByClassName("bOne")
// if (buttonOne.addEvenListener('click') ) {
//     document.getElementById("rir").innerHTML +=1;
// }

// const button = document.createElement("button");
// button.textContent = "increase";
// document.querySelector("body").appendChild(button);
// button.addEventListener("click", increase);
 
// function increase() {
//   button = Number(rir) + 1;
// }

// let number = 0;

	    // document.querySelector("bOne").onclick = function() {
	    //     rir = rir + 1; // Лучше "++number;"
	    //     alert(rir);
	    // }

        // let increase_button = document.querySelector("bOne");
        // increase_button.addEventListener("click", () => {
        //     rir = Number(rir) + 1;
        // })
       
        
        
