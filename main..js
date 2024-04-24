let button = document.querySelector("#button");
let menus1 = document.querySelector("#menus1");
let button1 = document.querySelector("#button1");
button.addEventListener("click", (e) => {
    console.log('salom');
    menus1.setAttribute("style" ,`display: flex`);
  });
  button1.addEventListener("click", (e) => {
    console.log('salom');
    menus1.setAttribute("style" ,`display:none`);
  });