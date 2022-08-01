const bodyInput = document.querySelector("#body-box");
const ideaCard = document.querySelector(".idea-card");
const ideaCardsArea = document.querySelector(".idea-cards--area");
const saveButton = document.querySelector(".user-form--button");
const titleInput = document.querySelector("#title-box");

const listOfCards = [];

bodyInput.addEventListener("input", handleChange);
ideaCardsArea.addEventListener("click", chooseIcon);
saveButton.addEventListener("click", saveUserInfo);
titleInput.addEventListener("input", handleChange);
window.addEventListener("load", createExampleIdeaCard);

function createExampleIdeaCard() {
  var exampleCard = new Idea("Example Idea", "I think big thoughts!");

  listOfCards.unshift(exampleCard);

  renderIdeaCard(listOfCards);
}

function changeStarImageSrc(ideaCard) {
  if (ideaCard.star) {
    return "./assets/star-active.svg";
  } else {
    return "./assets/star.svg";
  }
}

function renderIdeaCard(mainList) {
  ideaCardsArea.innerHTML = "";

  for (let i = 0; i < mainList.length; i++) {
    var starImgSrc = changeStarImageSrc(mainList[i]);

    ideaCardsArea.innerHTML += `
      <section class="idea-card">
        <article class="card-header">
          <img data-name="star-icon" id="${mainList[i].id}" class="star-icon icon" src="${starImgSrc}" alt="star-icon">
          <img data-name="delete-button" id="${mainList[i].id}" class="delete-icon icon" src="./assets/delete.svg"
            alt="delete-icon">
        </article>
        <article class="card-body">
          <p class="idea-title">${mainList[i].title}</p>
          <p class="idea-body">${mainList[i].body}</p>
        </article>
        <article class="card-comments">
          <img class="plus-icon icon" src="./assets/comment.svg" alt="plus-icon">
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

    renderIdeaCard(listOfCards);

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

      renderIdeaCard(listOfCards);
    }
  }
}

function favoriteCard(ideaCardID) {

  for (let i = 0; i < listOfCards.length; i++) {

    if (ideaCardID === listOfCards[i].id) {
      listOfCards[i].star = !listOfCards[i].star;

      renderIdeaCard(listOfCards);
    }
  }
}

