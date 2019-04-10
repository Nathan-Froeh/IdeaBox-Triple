
var ideaStorageArr = JSON.parse(localStorage.getItem('idea')) || [];
var ideaTitle = document.querySelector("#ideabox-title-input");
var ideaBody = document.querySelector("#ideabox-body-input");
var saveButton = document.querySelector('#ideabox-save-button')
var ideaSearchBox = document.querySelector('#ideabox-search-input');
var starredButton = document.querySelector('#starredButton');
var qualityInput = document.querySelector('#new-quality-input');
var addQualityButton = document.querySelector('#addQualityButton');
var storageBox = document.querySelector('#storage-box');
var starButton = document.querySelector('.star');
var qualityUpButton = document.querySelector('.upvote-deact');
var qualityDownButton = document.querySelector('.downvote-deact');
var deleteButton = document.querySelector('.delete');
var initialPrompt = document.querySelector('.initial-prompt');
var storageBoxParent = document.querySelector('#storage-box');

/************ BEGIN EVENT LISTENERS ************/

window.addEventListener('load', retrieveIdea);
ideaTitle.addEventListener('keyup', checkInputFields);
ideaBody.addEventListener('keyup', checkInputFields);
saveButton.addEventListener('click', saveToIdea);

storageBoxParent.addEventListener('click', function(event) {
  if (event.target.className === 'star') {
    modifyStarImage(event);
  }
  if (event.target.className === 'delete') {
    event.target.closest('.idea-card').remove();
    deleteCard(event);
  }
});

storageBoxParent.addEventListener('input', function(event){
  if (event.target.className === 'idea-card-title') {
    var title = event.target.innerText;
    updateIdeaText(event, title);
  }
  else if (event.target.className === 'idea-card-text') {
    var text = event.target.innerText;
    updateIdeaText(event, text);
  }
})

/************* BEGIN FUNCTIONS ***************/

function saveToIdea(e) {
  event.preventDefault();
  var idea = new Idea(ideaTitle.value,ideaBody.value,Date.now());
  ideaStorageArr.push(idea);
  idea.saveToStorage(ideaStorageArr);
  modifyStar(idea);
  };

function deleteCard(e) {
  ideaStorageArr.forEach(function(idea, index) {
    var myIdea = reinstantiate(index);
    if(parseInt(e.target.closest('.idea-card').id) == idea.id) {
      myIdea.deleteFromStorage(index);
    };
  });
};

function modifyStarImage(e) {
  var star = false;
  e.target.src.match("Images/star.svg") ? e.target.src = "Images/star-active.svg" : e.target.src = "Images/star.svg";
  e.target.src.match("Images/star.svg") ? star = false : star = true;
  updateStarArray(e, star);
};

function updateStarArray(e, star) {
  ideaStorageArr.forEach(function(idea, index) {
    var myIdea = reinstantiate(index);
    if (parseInt(e.target.parentNode.parentNode.id) === idea.id) {
      myIdea.updateIdea(ideaStorageArr, index, star);
    };
  });
};

function reinstantiate (i) {
  return new Idea(ideaStorageArr[i].title, ideaStorageArr[i].body,
    ideaStorageArr[i].id, ideaStorageArr[i].quality, ideaStorageArr[i].star);
};

function updateIdeaText(e, updatedText) {
  ideaStorageArr.forEach(function(idea, index) {
    var myIdea = reinstantiate(index);
    if ((parseInt(e.target.parentNode.parentNode.id) === idea.id) && (e.target.className === 'idea-card-title')){
      ideaStorageArr[index].title = updatedText;
      myIdea.saveToStorage(ideaStorageArr);
    } else if ((parseInt(e.target.parentNode.parentNode.id) === idea.id) && (e.target.className === 'idea-card-text')){
      ideaStorageArr[index].body = updatedText;
      myIdea.saveToStorage(ideaStorageArr);
    };
  });
};

function checkInputFields() {
	if (ideaTitle.value && ideaBody.value !== '') {
    saveButton.disabled = false;
    saveButton.classList.add('enable');
	} else {
    saveButton.disabled = true;
    saveButton.classList.remove('enable');
	};
};

function isStorageEmpty() {
  if (ideaStorageArr != []) {
    retrieveIdea();
  };
};

function togglePrompt() {
  if (ideaStorageArr.length > 0) {
    initialPrompt.classList.add('hidden');
  } else if (ideaStorageArr.length === 0) {
    initialPrompt.classList.remove('hidden');
  };
};

function modifyStar(newIdea) {
  if (newIdea.star === true) {
    var starValue = 'Images/star-active.svg'
  } else {starValue = 'Images/star.svg'};
  genCard(newIdea, starValue);
};

function genCard(newIdea, starValue) {
	var ideaCard = `
		<article class = 'idea-card' id='${newIdea.id}'>
            <div class = 'idea-card-top'>
                <input type = 'image' src = ${starValue} class = 'star' alt = 'star-button'>
                <input type = 'image' src = 'Images/delete.svg' class = 'delete'>
            </div>
            <article>
                <h4 class = 'idea-card-title' contenteditable = 'true'>${newIdea.title}</h4>
                <p class = 'idea-card-text' contenteditable = 'true'>${newIdea.body}</p>
            </article>
            <div class = 'idea-card-bottom'>
                <input type = 'image' src = 'Images/upvote.svg' class = 'upvote-deact'>
                <p class = 'quality'>Quality:</p>
                <input type = 'image' src = 'Images/downvote.svg' class = 'downvote-deact'>
            </div>
        </article>
          `
  storageBox.insertAdjacentHTML('afterBegin', ideaCard);
};