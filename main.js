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
    // could add if condition here to change star icon state
    ideaCardsArea.innerHTML += `
      <section class="idea-card">
        <div class="card-header">
          <img data-name="star-icon" id="${listOfCards[i].id}" class="${starIcon}" src="./assets/star.svg" alt="star-icon">
          <img data-name="star-active" id="${listOfCards[i].id}" class="${starActiveIcon}"
            src="./assets/star-active.svg" alt="star-icon">
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

function toggleFavorite(ideaCardID) {
  const starIcon = document.querySelector('.star-icon');
  const starActiveIcon = document.querySelector('.star-active-icon')

  for (let i = 0; i < listOfCards.length; i++) {
    if (ideaCardID == listOfCards[i].id) {
      listOfCards[i].star = !listOfCards[i].star;
      toggleStarIcon(ideaCardID)
    }
  }
}

var starIcon = 'star-icon';
var starActiveIcon = 'star-active-icon hidden';
var ideaCardID = '';

function toggleStarIcon() {
  for (let i = 0; i < listOfCards.length; i++) {
    if (ideaCardID == listOfCards[i].id) {
      if (listOfCards[i].star) {
        console.log(listOfCards[i].star);
        starActiveIcon = "star-active-icon"
        starIcon = "star-icon hidden"
        renderIdeaCard()
      } else {
        console.log(listOfCards[i].star);
        starActiveIcon = "star-active-icon hidden"
        starIcon = "star-icon"
        renderIdeaCard()
      }
    }
  }
}


function chooseIcon(event) {
  if (event.target.dataset.name === "delete-button") {
    deleteCard(event.target.id);
  }
  if (event.target.dataset.name === "star-icon" || "star-active-icon") {
    toggleFavorite(event.target.id);
    console.log("working")
  }
}
