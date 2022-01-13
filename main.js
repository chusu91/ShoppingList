const inputForm = document.querySelector(".add");
const input = document.querySelector(".input");
const shoppingList = document.querySelector(".shopping__list");

function deleteList(event) {
  const li = event.target.parentElement.parentElement;
  li.remove();
}

function addList(event) {
  if (input.value === "") {
    alert("please write the list");
  } else {
    event.preventDefault();
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = input.value;
    const minusBtn = document.createElement("button");
    minusBtn.innerHTML = `<i class="fas fa-minus-circle"></i>`;
    minusBtn.addEventListener("click", deleteList);
    li.appendChild(span);
    li.appendChild(minusBtn);
    shoppingList.appendChild(li);
    li.scrollIntoView(); //scroll down 같이
    input.value = " ";
    input.focus();
  }
}

inputForm.addEventListener("submit", addList);
