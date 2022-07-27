// query selector below
titleInput = document.querySelector('#title-box');
bodyInput = document.querySelector('#body-box');
// commentInput = document.querySelector('.card-comments');
saveButton = document.querySelector('.user-form--button');
ideaCardsArea = document.querySelector('.idea-cards--area');
ideaCard = document.querySelector('.idea-card');

//global variables
let listOfBoxes = [];

//event listeners below
saveButton.addEventListener('click', saveUserInfo);
ideaCardsArea.addEventListener('click', targetElement);

function createIdeaCard() {
    ideaCardsArea.innerHTML += `<div class="idea-card">
    <div class="card-header">
      <img class="star-active-icon" src="./assets/star-active.svg" alt="star-active-icon">
      <img class="delete-icon" src="./assets/delete.svg" alt="delete-icon">
    </div>
    <div class="card-body">
      <p class="idea-title">${listOfBoxes[0].title}</p>
      <p>${listOfBoxes[0].body}</p>
    </div>
    <div class="card-comments"><img class="plus-icon" src="./assets/comment.svg" alt="plus-icon">
      <div>comment</div>
    </div>
  </div>`;
}


function saveUserInfo(event) {
  event.preventDefault();

  let ideaBox = new Idea(titleInput.value, bodyInput.value);

  if (titleInput.value && bodyInput.value) {
    listOfBoxes.unshift(ideaBox);
    createIdeaCard();
    clearInputBoxes();
  }
}

function clearInputBoxes() {
  titleInput.value = "";
  bodyInput.value = "";
}

function targetElement(event) {
  event.target
}

