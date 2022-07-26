// query selector below
titleInput = document.querySelector('#title-box');
bodyInput = document.querySelector('#body-box');
saveButton = document.querySelector('.user-form--button');



//event listeners below
saveButton.addEventListener('click', saveUserInfo);

function saveUserInfo(event) {
  event.preventDefault();

  var ideaBox = new Idea(titleInput.value, bodyInput.value);

  return ideaBox;
}


