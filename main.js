const inputForm = document.querySelector(".add");
const input = document.querySelector(".input");
const shoppingList = document.querySelector(".shopping__list");

function deleteList(event) {
  const li = event.target.parentElement.parentElement;
  li.remove();
}

function addList(event) {
  event.preventDefault();
  if (input.value !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = input.value;
    const minusBtn = document.createElement("button");
    minusBtn.setAttribute("class", "minus_btn");
    minusBtn.innerHTML = `<i class="fas fa-minus-circle"></i>`;
    minusBtn.addEventListener("click", deleteList);
    li.appendChild(span);
    li.appendChild(minusBtn);
    shoppingList.appendChild(li);
    li.scrollIntoView(); //scroll down 같이
    input.value = "";
    input.focus(); // 리스트 추가후에도 다시 인풋창에 포커스가 옴
  }
}

inputForm.addEventListener("submit", addList);
