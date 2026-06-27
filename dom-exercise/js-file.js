
const container = document.querySelector("#container");

// a <p> with red text that says “Hey I’m red!”
const pTag = document.createElement("p");
pTag.style.color = "red";
pTag.textContent = "Hey I'm red!";

// an <h3> with blue text that says “I’m a blue h3!”
const h3Tag = document.createElement("h3");
h3Tag.style.color = "blue";
h3Tag.textContent = "I’m a blue h3!";

// a <div> with a black border and pink background color with the following elements inside of it:
const innerDiv = document.createElement("div");
innerDiv.style.border = "2px solid black";
innerDiv.style.backgroundColor = "pink";

// another <h1> that says “I’m in a div”
const h1Tag = document.createElement("h1");
h1Tag.textContent = "I'm in a div!";

// a <p> that says “ME TOO!”
const pTag2 = document.createElement("p");
pTag2.textContent = "ME TOO!";

innerDiv.appendChild(h1Tag);
innerDiv.appendChild(pTag2);
container.appendChild(pTag);
container.appendChild(h3Tag);
container.appendChild(innerDiv);

