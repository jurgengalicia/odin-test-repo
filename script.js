
let parentDiv = document.querySelector("#container");

let childP = document.createElement('p');
childP.textContent = "Hey I'm red!";
childP.style.color = "red"

let childH3 = document.createElement('h3');
childH3.textContent = "I'm a blue H3!";
childH3.style.color = "blue"

let childDiv = document.createElement('div');

let grandchildH1 = document.createElement('H1');
grandchildH1.textContent = "I'm in a div!"
let grandchildp = document.createElement('p');
grandchildp.textContent = "Me Too!"

let btns = document.querySelectorAll("button")

btns.forEach(btn =>{
    btn.addEventListener("click", () => alert(btn.id))
})

parentDiv.appendChild(childP);
parentDiv.appendChild(childH3);

childDiv.appendChild(grandchildH1);
childDiv.appendChild(grandchildp);

parentDiv.appendChild(childDiv);