let body = document.body;

let addElement = () => {
    let newElement = document.createElement("h1");
    newElement.classList.add('square');

    body.appendChild(newElement);
}

let interval = setInterval(addElement, 200);