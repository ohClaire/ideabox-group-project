// query selector below
const titleInput = document.querySelector("#title-box");
const bodyInput = document.querySelector("#body-box");
// commentInput = document.querySelector('.card-comments');
const saveButton = document.querySelector(".user-form--button");
const ideaCardsArea = document.querySelector(".idea-cards--area");
const ideaCard = document.querySelector(".idea-card");


//global variables
const listOfCards = [];

//event listeners below
saveButton.addEventListener("click", saveUserInfo);
window.addEventListener("load", createExampleIdeaCard);
titleInput.addEventListener("input", handleChange);
bodyInput.addEventListener("input", handleChange);
saveButton.addEventListener("load", disableButton);
// disable show starred button on load
ideaCardsArea.addEventListener("click", chooseIcon);

function createExampleIdeaCard() {
  var exampleCard = new Idea("Example Idea", "I think big thoughts!");
  listOfCards.unshift(exampleCard);
  renderIdeaCard();
}

function renderIdeaCard() {
  ideaCardsArea.innerHTML = "";
  for (let i = 0; i < listOfCards.length; i++) {
    
    ideaCardsArea.innerHTML += `
      <section class="idea-card">
        <div class="card-header">
          <img data-name="star-icon" id="${listOfCards[i].id}" class="star-icon" src="./assets/star.svg" alt="star-icon">
          <img data-name="delete-button" id="${listOfCards[i].id}" class="delete-icon" src="./assets/delete.svg"
            alt="delete-icon">
        </div>
        <div class="card-body">
          <p class="idea-title">${listOfCards[i].title}</p>
          <p class="idea-body">${listOfCards[i].body}</p>
        </div>
        <div class="card-comments">
          <img class="plus-icon" src="./assets/comment.svg" alt="plus-icon">
          <div>comment</div>
        </div>
      </section>`;
  }
}

function saveUserInfo(event) {
  event.preventDefault();

  const ideaBox = new Idea(titleInput.value, bodyInput.value);

  if (titleInput.value && bodyInput.value) {
    listOfCards.unshift(ideaBox);
    renderIdeaCard();
    document.forms[0].reset();
  }
  disableButton();
}

function disableButton() {
  saveButton.disabled = true;
}

function enableButton() {
  saveButton.disabled = false;
}

function handleChange() {
  if (titleInput.value && bodyInput.value) {
    enableButton();
  } else {
    disableButton();
  }
}

function deleteCard(ideaCardID) {
  for (let i = 0; i < listOfCards.length; i++) {
    if (ideaCardID == listOfCards[i].id) {
      listOfCards.splice(i, 1);
      renderIdeaCard();
    }
  }
}

function chooseIcon(event) {
  if (event.target.dataset.name === "delete-button") {
    deleteCard(event.target.id);
  }

  if (event.target.dataset.name === "star-icon") {
    favoriteCard(event.target.id);
  }
}

// const starIcon = document.querySelector('.star-icon');
// const starActiveIcon = document.querySelector('.star-active-icon');

function favoriteCard(ideaCardID) {
  var ideaCardID = parseInt(ideaCardID);

  for (let i = 0; i < listOfCards.length; i++) {
    
    if (ideaCardID === listOfCards[i].id) {
      listOfCards[i].star = !listOfCards[i].star; // updates data model
      
      changeStarIcon(ideaCardID); // this will update the DOM
    }
  }
}

function changeStarIcon(ideaCardID) {
  for (let i = 0; i < listOfCards.length; i++) {
    
    if (ideaCardID === listOfCards[i].id) {

      if (listOfCards[i].star) {
        activateStar(ideaCardID);
      } else {
        deactivateStar(ideaCardID);
      }

    }
  }
}

function activateStar(ideaCardID) {
  document.getElementById(ideaCardID).src = "./assets/star-active.svg" 
}

function deactivateStar(ideaCardID) {
  document.getElementById(ideaCardID).src = "./assets/star.svg" 
}