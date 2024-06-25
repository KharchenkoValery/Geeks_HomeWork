const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneSpan = document.querySelector("#phone_result");

 const regExp = /\+996 [2579]\d{2}\d{2}-\d{2}-\d{2}/;

phoneButton.onclick = () => {
    if(regExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = "ok"
        phoneSpan.style.color = "green"
    } else {
        phoneSpan.innerHTML = "not ok"
        phoneSpan.style.color = "red"
    }
}

// 

const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabContentItems = document.querySelectorAll(".tab_content_item");
const tabParent = document.querySelector(".tab_content_items");

const hideTabContent = ()  => {
    tabContentBlocks.forEach((item) => {
    item.style.display = 'none';
})
tabContentItems.forEach((item) => {
    item.classList.remove("tab_content_item_active")
})
}
const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block';
    tabContentItems[index].classList.add("tab_content_item_active");
}
hideTabContent();
showTabContent();

tabParent.onclick = (event) => {
    if (event.target.classList.contains("tab_content_item")) {
        tabContentItems.forEach((item, index) => {
            if(event.target === item) {
                hideTabContent();
                showTabContent(index);
                
            }
        })
    }
}

// auto tab
let index = 0;
const autoTabContent = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabContentBlocks.length - 1) {
            i = 0
        }
        hideTabContent();
        showTabContent(i);
    }, 3000)
    
}
autoTabContent(index);

// CONVERTER

const usdInput = document.querySelector("#usd");
const somInput = document.querySelector("#som");
const eurInput = document.querySelector('#eur')

const converter = (element, targetElement) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
          request.open('GET', '../data/converter.json')
          request.setRequestHeader('Content-Type', 'application/json')
          request.send()

          request.onload = () => {
          const data = JSON.parse(request.response)
          if(element.id === 'som') {
            targetElement.value = (element.value / data.usdToSom && element.value / data.eurToSom).toFixed(2)
            // usdInput.value = (somInput.value / data.usd).toFixed(2)
          }
          if(element.id === 'usd') {
            targetElement.value = (element.value * data.usdToSom && element.value / data.eurToUsd).toFixed(2)
            // somInput.value = (usdInput.value * data.usd).toFixed(2)
          }
          if(element.id === 'eur') {
            targetElement.value = (element.value * data.eurToSom && element.value / data.usdToEur).toFixed(2)
          }
          if(element.value === '') {
            targetElement.value = ''
          }
          }
        }
    }
    // converter()
    // converter(somInput, eurInput);
    converter(somInput, usdInput, eurInput);
    converter(eurInput, somInput);
    converter(eurInput, usdInput);
    converter(usdInput, eurInput);
    converter(usdInput, somInput);
    
    

//             
//             switch (element.id) {
//                 case 'som':
//                   
//                     break
//                     case 'usd':
//                         targetElement.value = (element.value * data.usd).toFixed(2)
//                         break  
//                     default:
//                         break       
//             }
//           }
//     }
// }
   

// somInput.addEventListener('input', () => {
//   const request = new XMLHttpRequest()
//   request.open('GET', '../data/converter.json')
//   request.setRequestHeader('Content-Type', 'application/json')
//   request.send()

//   request.onload = () => {
//     // console.log(request.response);
//     const data = JSON.parse(request.response)
//     usdInput.value = (somInput.value / data.usd).toFixed(2)
//   }
  
// })
// usdInput.addEventListener('input', () => {
//     const request = new XMLHttpRequest()
//     request.open('GET', '../data/converter.json')
//     request.setRequestHeader('Content-Type', 'application/json')
//     request.send()
  
//     request.onload = () => {
//       // console.log(request.response);
//       const data = JSON.parse(request.response)
//       somInput.value = (usdInput.value * data.usd).toFixed(2)
//     }
    
//   })


//   Card switcher

const cardBlock = document.querySelector(".card");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
let cardNumber = 1;

fetch(`https://jsonplaceholder.typicode.com/todos/${cardNumber}`)
    .then(response => response.json())
    .then(data => {
        const {id, title, completed} = data
        cardBlock.innerHTML = `
        <p>${title}</p>
        <p style="color: ${completed ? 'green' : 'red'}">${completed}</p>
        <span>${id}</span>
        `
    })

btnNext.onclick = () => {
    cardNumber++;
    fetch(`https://jsonplaceholder.typicode.com/todos/${cardNumber}`)
    .then(response => response.json())
    .then(data => {
        const {id, title, completed} = data
        cardBlock.innerHTML = `
        <p>${title}</p>
        <p style="color: ${completed ? 'green' : 'red'}">${completed}</p>
        <span>${id}</span>
        `
    })
    if(cardNumber == 200) {
            cardNumber = 0;
    }
}

btnPrev.onclick = () => {
    cardNumber--;
    fetch(`https://jsonplaceholder.typicode.com/todos/${cardNumber}`)
    .then(response => response.json())
    .then(data => {
        const {id, title, completed} = data
        cardBlock.innerHTML = `
        <p>${title}</p>
        <p style="color: ${completed ? 'green' : 'red'}">${completed}</p>
        <span>${id}</span>
        `
    })
    if(cardNumber == 0) {
            cardNumber = 200;
    }
}

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(dataLog => {
        
        // console.log(dataLog);
        dataLog.forEach((loginfo) => {
            const {userId, id, title, body} = loginfo;
           console.log({userId},  {id},  {title},  {body} ); 
            }
        )     
    }
)

