const listOfCards = [];
let shouldFilterStarred = false;

const bodyInput = document.querySelector("#body-box");
const filterButton = document.querySelector(".starred-ideas--button");
const ideaCard = document.querySelector(".idea-card");
const ideaCardsArea = document.querySelector(".idea-cards--area");
const saveButton = document.querySelector(".user-form--button");
const searchInput = document.querySelector(".user-form--searchbar");
const searchButton = document.querySelector(".box-search-icon");
const titleInput = document.querySelector("#title-box");

bodyInput.addEventListener("input", handleChange);
filterButton.addEventListener("click", filterStarredCards);
ideaCardsArea.addEventListener("click", chooseIcon);
saveButton.addEventListener("click", saveUserInfo);
searchButton.addEventListener("click", renderSearchedCards);
titleInput.addEventListener("input", handleChange);

function changeStarImageSrc(ideaCard) {
  if (ideaCard.star) {
    return "./assets/star-active.svg";
  } else {
    return "./assets/star.svg";
  }
}

function checkToRender(listOfCardsIndex) {
  if (shouldFilterStarred) {
    if (listOfCardsIndex.star) {
      shouldRender = true;
    } else {
      shouldRender = false;
    }
  } else {
    shouldRender = true;
  }

  return shouldRender;
}


function renderIdeaCard(listOfCards) {
  ideaCardsArea.innerHTML = "";

  for (let i = 0; i < listOfCards.length; i++) {
    const starImgSrc = changeStarImageSrc(listOfCards[i]);
    let ideaCardClass = "idea-card column";

    let shouldRender = checkToRender(listOfCards[i]);

    if (shouldRender) {
      ideaCardsArea.innerHTML += `
        <section class=${ideaCardClass}>
          <article class="card-header">
            <img data-name="star-icon" id="${listOfCards[i].id}" class="star-icon icon" src="${starImgSrc}" alt="star-icon">
            <img data-name="delete-button" id="${listOfCards[i].id}" class="delete-icon icon" src="./assets/delete.svg"
              alt="delete-icon">
          </article>
          <article class="card-body">
            <p class="idea-title">${listOfCards[i].title}</p>
            <p class="idea-body">${listOfCards[i].body}</p>
          </article>
          <article class="card-comments">
            <img class="plus-icon icon" src="./assets/comment.svg" alt="plus-icon">
            <p>Comment</p>
          </article>
        </section>`;
    }
  }
}

function renderNewCard() { 
  const ideaCard = new Idea(titleInput.value, bodyInput.value);

  return ideaCard;
}

function saveUserInfo(event) {
  event.preventDefault();
  
  if (titleInput.value && bodyInput.value) {
    listOfCards.unshift(renderNewCard());

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
      listOfCards[i].updateIdea();
    }
  }

  renderIdeaCard(listOfCards);
}

function filterStarredCards() {
  shouldFilterStarred = !shouldFilterStarred;

  renderFilterButton();
  renderIdeaCard(listOfCards);
}

function renderFilterButton() {
  if (shouldFilterStarred) {
    filterButton.innerText = 'Show All Ideas';
  } else {
    filterButton.innerText = 'Show Filtered Ideas';
  }
}

function renderSearchedCards() {
  const searchText = searchInput.value;

  const filterSearch = listOfCards.filter(card => card.title.includes(searchText) || card.body.includes(searchText));

  renderIdeaCard(filterSearch);
}
