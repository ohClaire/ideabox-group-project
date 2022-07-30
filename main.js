const titleInput = document.querySelector("#title-box");
const bodyInput = document.querySelector("#body-box");
const saveButton = document.querySelector(".user-form--button");
const ideaCardsArea = document.querySelector(".idea-cards--area");
const ideaCard = document.querySelector(".idea-card");

const listOfCards = [];

saveButton.addEventListener("click", saveUserInfo);
window.addEventListener("load", createExampleIdeaCard);
titleInput.addEventListener("input", handleChange);
bodyInput.addEventListener("input", handleChange);
saveButton.addEventListener("load", disableButton);
ideaCardsArea.addEventListener("click", chooseIcon);

function createExampleIdeaCard() {
  var exampleCard = new Idea("Example Idea", "I think big thoughts!");
  listOfCards.unshift(exampleCard);
  renderIdeaCard();
}

function renderIdeaCard() {
  ideaCardsArea.innerHTML = "";
  var starImgSrc = ""
  for (let i = 0; i < listOfCards.length; i++) {
    if (listOfCards[i].star) {
      starImgSrc = "./assets/star-active.svg"
    } else {
      starImgSrc = "./assets/star.svg"
    }
    ideaCardsArea.innerHTML += `
      <section class="idea-card">
        <article class="card-header">
          <img data-name="star-icon" id="${listOfCards[i].id}" class="star-icon" src="${starImgSrc}" alt="star-icon">
          <img data-name="delete-button" id="${listOfCards[i].id}" class="delete-icon" src="./assets/delete.svg"
            alt="delete-icon">
        </article>
        <article class="card-body">
          <p class="idea-title">${listOfCards[i].title}</p>
          <p class="idea-body">${listOfCards[i].body}</p>
        </article>
        <article class="card-comments">
          <img class="plus-icon" src="./assets/comment.svg" alt="plus-icon">
          <p>Comment</p>
        </article>
      </section>`;
  }
}

function createCard() {
  const ideaCard = new Idea(titleInput.value, bodyInput.value);

  return ideaCard;
}

function saveUserInfo(event) {
  event.preventDefault();
  
  if (titleInput.value && bodyInput.value) {
    listOfCards.unshift(createCard());
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

function chooseIcon(event) {
  var ideaCardID = convertString(event.target.id);
 
  if (event.target.dataset.name === "delete-button") {
    deleteCard(ideaCardID);
    
  }
  
  if (event.target.dataset.name === "star-icon") {
    favoriteCard(ideaCardID);
  }
}

function convertString(string) {
  return parseInt(string);
}

function deleteCard(ideaCardID) {

  for (let i = 0; i < listOfCards.length; i++) {

    if (ideaCardID === listOfCards[i].id) {
      listOfCards.splice(i, 1);

      renderIdeaCard();
    }
  }
}

function favoriteCard(ideaCardID) {

  for (let i = 0; i < listOfCards.length; i++) {

    if (ideaCardID === listOfCards[i].id) {
      listOfCards[i].star = !listOfCards[i].star;

      renderIdeaCard();
    }
  }
}

