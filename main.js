// query selector below
const titleInput = document.querySelector("#title-box");
const bodyInput = document.querySelector("#body-box");
// commentInput = document.querySelector('.card-comments');
const saveButton = document.querySelector(".user-form--button");
const ideaCardsArea = document.querySelector(".idea-cards--area");
const ideaCard = document.querySelector(".idea-card");
const filterButton = document.querySelector(".starred-ideas--button")
const searchBar = document.querySelector('.user-form--searchbar')

//global variables
const listOfCards = [];
const starredIdeas = [];

//event listeners below
saveButton.addEventListener("click", saveUserInfo);
window.addEventListener("load", createExampleIdeaCard);
titleInput.addEventListener("input", handleChange);
bodyInput.addEventListener("input", handleChange);
saveButton.addEventListener("load", disableButton);
// disable show starred button on load
ideaCardsArea.addEventListener("click", chooseIcon);
// filterButton.addEventListener("click", showStarredCards)
// searchBar.addEventListener("input", matchToCard)
window.addEventListener("load", loopThru)
function createExampleIdeaCard() {
  var exampleCard = new Idea("Example Idea", "I think big thoughts!");
  listOfCards.unshift(exampleCard);
  renderIdeaCard(listOfCards);
}

function createCard() {
  const ideaCard = new Idea(titleInput.value, bodyInput.value);

  return ideaCard;
}

// loop through listOfCards array
function iterateInList(mainList) {
  for (let i = 0; i < mainList.length; i++) {
    console.log(mainList[i])
  }
}

function loopThru() {
  console.log(createCard)
  iterateInList(listOfCards)
}

function renderIdeaCard(mainList) {
  ideaCardsArea.innerHTML = "";
  for (let i = 0; i < mainList.length; i++) {
    var starImageSrc = changeStarImageSrc(mainList[i]);
    ideaCardsArea.innerHTML += `
      <section class="idea-card">
        <div class="card-header">
          <img data-name="star-icon" id="${mainList[i].id}" class="star-icon" src="${starImageSrc}" alt="star-icon">
          <img data-name="delete-button" id="${mainList[i].id}" class="delete-icon" src="./assets/delete.svg"
            alt="delete-icon">
        </div>
        <div class="card-body">
          <p class="idea-title">${mainList[i].title}</p>
          <p class="idea-body">${mainList[i].body}</p>
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

function deleteCard(ideaCardID) {
  var ideaCardID = parseInt(ideaCardID);
  for (let i = 0; i < listOfCards.length; i++) {
    if (ideaCardID === listOfCards[i].id) {
      listOfCards.splice(i, 1);
      renderIdeaCard(listOfCards);
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

function favoriteCard(ideaCardID) {
  var ideaCardID = parseInt(ideaCardID);
  var starStatus = false;

  for (let i = 0; i < listOfCards.length; i++) {
    
    if (ideaCardID === listOfCards[i].id) {
      listOfCards[i].star = !listOfCards[i].star;  
    }

    renderIdeaCard(listOfCards);

    starStatus = listOfCards[i].star;
  }
  return starStatus
}

function changeStarImageSrc(ideaCard) {
  if (ideaCard.star) {
    return "./assets/star-active.svg";
  } else {
    return "./assets/star.svg";
  }
}

// function showStarredCards() {
//   for (let i = 0; i < listOfCards.length; i++) {
//     if (listOfCards[i].star) {

//       starredIdeas.push(listOfCards[i])
//     }

//     renderIdeaCard(starredIdeas)
//   }
//   switchCardsShown();
// }

// function switchCardsShown() {
//   if (filterButton.innerText === 'Show Filtered Ideas') {
//     filterButton.innerText = 'Show All Ideas';
//     renderIdeaCard(starredIdeas);
//   } else {
//     filterButton.innerText = 'Show Filtered Ideas';
//     renderIdeaCard(listOfCards)
//   }
// }

// function matchToCard() {
  
// }

// function searchTitle() {

// }

// function searchBody() {

// }