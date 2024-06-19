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

let positionLeft = 0, positionTop = 0;
let positionRight = 0, positionBottom = 0;
let child_block = document.querySelector(".child_block");
const parent_block = document.querySelector(".parent_block");
const width = parent_block.offsetWidth -= child_block.offsetWidth;
const height = parent_block.offsetHeight -= child_block.offsetHeight;


// function blockAnimation () {
   
//     if (positionLeft <= width) {
//         positionLeft++;   
//        child_block.style.left = `${positionLeft}px`;  
//        animation()
//     } else if (positionLeft >= width ) {
      
//         positionRight--;
//         console.log("smfslg");
//         child_block.style.right= `${positionRight}px`;
//         noAnimation()
//     }
   
// }  
// function animation () {
//   requestAnimationFrame(blockAnimation)
// }
//     //  animation()
// // } 
// function noAnimation () {
//   // clearInterval (animation)
//   requestAnimationFrame(blockAnimation)
// }
// noAnimation()


// function animation () {
//     if (positionLeft >= width) {
//         blockAnimationLeft = !blockAnimationLeft
//     }
// }
// animation()

function blockAnimationLeft() {
                if (positionLeft <= width) {
                positionLeft++;
                
                console.log (positionLeft)
                child_block.style.left = `${positionLeft}px`;  
                positionLeft.disabled = false;
                animationLeft();
        } }
      function  animationLeft() {
        setInterval(blockAnimationLeft, 100)             
        } 
        // animationLeft()
        function blockAnimationRight() {
           positionLeft.disabled = true;
                    if (positionLeft >= width && positionRight < width) {
                    positionRight--;
                   
                    console.log (positionLeft)
                    child_block.style.right = `${positionRight}px`;  
                    animationRight();
            } }
          //  function interval() {
          //   setInterval(blockAnimationRight, 10)
          //  }     
        //   function  animationRight() {
        //     setTimeout(interval, 8000 )
        // } 
            // animationRight()
              function  animationRight() {
                  setInterval(blockAnimationRight, 100)
                }
                  animationRight()
//  function blockAnimationLeft() {
//     // for (i=0; i++) {
//         // for (let i; i=0; i <= width) {
        
//             if (positionLeft <= width) {
//         // while(positionLeft < width && positionTop < height){
//             positionLeft++;
//             positionLeft.disabled = false;
//             // positionTop++;
//             console.log (positionLeft)
//             child_block.style.left = `${positionLeft}px`;  
//             // child_block.style.top = `${positionTop}px`;
//             // i = null;
//             // noAnimation()
//             animationLeft();
//             // noAnimation ();
//         // }

//     } 
//     else if (positionLeft >= width && positionRight < width) {
//         positionLeft.disabled = true;
//         positionRight++;
//         // console.log(positionLeft);
//         console.log(positionRight);
//         document.querySelector(".child_block").style.right = `${positionRight}px`;
           
//          animationTop()     
//     }
//         // }
          
//         positionLeft.disabled = true;
     
//     }
  
    
//     // }
// function animationLeft () {
//     setTimeout(blockAnimationLeft, 10);
//  }   
// animationLeft ()




// function noAnimation () {
//     setTimeout(() => {
//       clearInterval(blockAnimationLeft)  
//     }, 5000)
    
// }

// noAnimation()
// function blockAnimation () {
   

//     function   blockAnimationTop () {
            
//         if (positionTop < width && positionLeft >= width ) {
//             // blockAnimationLeft() = !blockAnimationLeft();
//             i = false;
//             positionTop++;
//             console.log(positionTop);
//            document.querySelector(".child_block").style.right = `${positionTop}px`;
//         // animationTop();   
//         };
               
//     }
// // }



//  function animationTop () {
//     requestAnimationFrame(blockAnimationLeft);
// }
//  animationTop ()



    // else if(positionLeft >= width && positionTop >= height){
    //     while(positionLeft >= width && positionTop >= height){
    //         positionTop--;
    //         positionLeft--;
    //         console.log(positionTop);
    //         console.log(positionLeft);
    //         child_block.style.left = `${positionLeft}px`;
    //         child_block.style.top = `${positionTop}px`;
            
    //     }
    //     animation(); 
    // }

 
// blockAnimation();




// setInterval(function request() {
//     blockAnimation();
// },10);



// animation ()


//

// setTimeout(animationTop, 2000);
// setTimeout ()
// animationTop ();


// function timer () {
//     // second++;
//     start.addEventListener('click') 
//         second.innerHTML = 1;
//     }

 

// start.addEventListener('click', function printNumbers(from, to) {
//    let current = from;

//    let timerId = setInterval(function() {
//     innerHTML = current;
//     if (current == to) {
//    clearInterval(start);
//    }
//    second++;
    
// }, 1000)
// })



//  printNumbers(5, 10);


// let n = 1;
// let i= 0;
// function red () {
//     stop.innerHTML = sum;
// setInterval(red, 1000);
// }setInterval (red, 1000);

    // i++
//    let sum = setTimeout(i+n, 1000);

// setTimeout (timeout, 1000);

// function timeout () {
//     setInterval(red, 1000);
// }
// setTimeout (timeout, 1000);

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
let second = document.querySelector("#seconds");

start.addEventListener('click', function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      second.innerHTML= current;
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
    printNumbers(0, 10);
  }
)

stop.addEventListener( 'click', function stopNumbers() {
    clearInterval(printNumbers);
})


// persons
let person = [
  person_photo = "url:",
        person_name = "Johny Depp",
        person_age = 61,
        person_is_married = false,
        person_height = 1.78 
]

const getDataBtn = document.querySelector(".personBtn");

getDataBtn.onclick = () => {
  const request = new XMLHttpRequest(); // 1. Создание запроса
  request.open('GET', '../data/persons.json') // 2. Указание метода запроса и указание пути
  request.setRequestHeader('Content-Type', 'application/json')  // 3. Указание загаловка запроса
  request.send() // 4. Отправка запроса

  request.onload = () => {
    const data = JSON.parse(request.response);
    // console.log(data.name);
    document.querySelector(".photo").innerHTML = data.person_photo;
    document.querySelector(".name").innerHTML = data.person_name;
    document.querySelector(".age").innerHTML = data.person_age;
    document.querySelector(".married").innerHTML = data.person_is_married;
    document.querySelector(".height").innerHTML = data.person_height;
    
  }
  
  
}

  

  




    