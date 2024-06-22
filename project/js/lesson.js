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

// const converter = (element, targetElement) => {
//     element.onimput = () => {
//         const request = new XMLHttpRequest()
//           request.open('GET', '../data/converter.json')
//           request.setRequestHeader('Content-Type', 'application/json')
//           request.send()

//           request.onload = () => {
//             const data = JSON.parse(request.response)
//             switch (element.id) {
//                 case 'som':
//                     targetElement.value = (element.value / data.usd).toFixed(2)
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
    // converter(usdInput, somInput);
    // converter(somInput, usdInput);

somInput.addEventListener('input', () => {
  const request = new XMLHttpRequest()
  request.open('GET', '../data/converter.json')
  request.setRequestHeader('Content-Type', 'application/json')
  request.send()

  request.onload = () => {
    // console.log(request.response);
    const data = JSON.parse(request.response)
    usdInput.value = (somInput.value / data.usd).toFixed(2)
  }
  
})
usdInput.addEventListener('input', () => {
    const request = new XMLHttpRequest()
    request.open('GET', '../data/converter.json')
    request.setRequestHeader('Content-Type', 'application/json')
    request.send()
  
    request.onload = () => {
      // console.log(request.response);
      const data = JSON.parse(request.response)
      somInput.value = (usdInput.value * data.usd).toFixed(2)
    }
    
  })