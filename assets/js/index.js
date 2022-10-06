const helloWorld = () => {
  console.log("Hello World");
};

helloWorld();

// document.querySelectorAll(".list__item__artist").forEach((item) => {
//   item.addEventListener("click", () => {
    
//     item.nextElementSibling.style.display="block"

//     console.log("list item is clicked");

//   });
// });

// document.querySelectorAll('.list__item__header').forEach(item => {
//   item.addEventListener('click', event => {
//     if(!(event.target.classList.contains("list__item__header"))){
//       let el = event.target.parentElement.nextElementSibling;
//       el.classList.toggle("on");
//     }else{
//       let el = event.target.nextElementSibling;
//     el.classList.toggle("on");
//     }
//   })
// })

// document.querySelectorAll('.list__item__artist').forEach(item => {
//   let html = item.innerHTML;
//   html = html.replace(/\D/g,'');
//   item.innerHTML = html;
// })

const clickEventOnListItemHeader = () => {
  document.querySelectorAll(".list__item__header").forEach((item) => {
    const body = item.nextElementSibling;
    item.addEventListener("click", () => {
      if (body.classList.contains("show")) {
        hideAllListItemBody();
      } else {
        hideAllListItemBody();
        body.classList.add("show");
      }
    });
  });
};

const hideAllListItemBody = () => {
  document.querySelectorAll(".list__item__body").forEach((item) => {
    item.classList.remove("show");
  });
};

const replaceTextWithDOB = () => {
  document.querySelectorAll(".list__item__artist").forEach((artist) => {
    const text = artist.textContent;
    const dateOfBirth = text.slice(-5, -1);  //the last 4 characters
    artist.innerHTML = dateOfBirth;
  });
};

clickEventOnListItemHeader();
replaceTextWithDOB();