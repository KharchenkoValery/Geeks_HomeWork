const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailSpan = document.querySelector("#gmail_result");

//  const regExp = /\g\i\@gmail.com$/;
const regExp = /@gmail.com$/;

 gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)) {
        gmailSpan.innerHTML = "ok"
        gmailSpan.style.color = "green"
    } else {
        gmailSpan.innerHTML = "not ok"
        gmailSpan.style.color = "red"
    }
}
// const parent_block = document.querySelector(".parent_block");
// const child_block = document.querySelector(".child_block");

// let left = child_block;

// const moveToLeft = () => {
//       left++;
// //    console.log(left);
//     if(left < 400) {
//        moveToLeft(); 
//     } 
// }
//    moveToLeft();

//    let position = 0;
//   document.querySelector('.child_block').addEventListener('click',() => {
//     position++;
//     document.querySelector(".child_block").style.left = position + 'px';
//    })

//    let position = 0;
//  const child_block = document.querySelector('.child_block');
//  const counter = () => {
//     // for (i = 0; i > 400; i++) {}
//     position++;
//     child_block.style.left = position + 'px'; 
//     if (position > 400 + 'px') {
//        counter()
//     }
    
//    }
//    counter()

let position = 0;
const parent_block = document.querySelector(".parent_block");
let width = parent_block.style.width = 448;
function blockAnimation () {
    position++;
    if (position > width) return;
      document.querySelector(".child_block").style.left = position + 'px';  
      animation(); 
}
blockAnimation();

function animation () {
    requestAnimationFrame(blockAnimation);
}
animation();


    // let days = 0;
    // function howMuchToLearnJS() {
    //     if (days === 400) return; // условие выхода
    //     days++;
    //     console.log(days);
    //     howMuchToLearnJS();
    // }
    // howMuchToLearnJS();