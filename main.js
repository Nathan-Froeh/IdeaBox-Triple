var ideaStorageArr = JSON.parse(localStorage.getItem('idea')) || [];
var ideaTitle = document.querySelector("#ideabox-title-input");
var ideaBody = document.querySelector("#ideabox-body-input");
var saveButton = document.querySelector('#ideabox-save-button')
var ideaSearchBox = document.querySelector('#ideabox-search-input');
var ideaSearchButton;
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

window.addEventListener('load', retrieveIdea);
ideaTitle.addEventListener('keyup', checkInputFields);
ideaBody.addEventListener('keyup', checkInputFields);
saveButton.addEventListener('click', saveToIdea);

/*****************Aside Menu*************/

//combine into 1 eventListener
storageBoxParent.addEventListener('click', function(event) {
  if (event.target.className === 'star') {
    console.log(event.target.parentNode.parentNode.id)
    //console.log(event)
    updateStar(event);
    updateIdeaArray(event)
  }
  if (event.target.className === 'delete') {
    event.target.closest('.idea-card').remove();
    makeDeleteArray(event);
  }
});

  storageBoxParent.addEventListener('click', function(event) {
  if (event.target.className === 'upvote-deact') {
    console.log('up')
  }
  if (event.target.className === 'downvote-deact') {
    console.log('down')
  }
});

function saveToIdea(e,star){
  event.preventDefault();
  var title = ideaTitle.value;
  var body = ideaBody.value;
  var id = Date.now();
  var idea = new Idea(title,body,id,star);
  ideaStorageArr.push(idea);
  console.log(ideaStorageArr);
  idea.saveToStorage(ideaStorageArr);
  genCard(idea);
  }

function makeDeleteArray(e){
  var tempArr = [];
  var localArr = JSON.parse(localStorage.getItem('idea'));
  for (i = 0; i < ideaStorageArr.length; i++) {
    var sameIdea = new Idea(ideaStorageArr[i].title, ideaStorageArr[i].body,
    ideaStorageArr[i].id, ideaStorageArr[i].quality, ideaStorageArr[i].star);
    tempArr.push(sameIdea);
  }
  launchDeleteIdea(tempArr, localArr, e)
}

function launchDeleteIdea(tempArr, localArr, e) {
  var cardId = parseInt(e.target.closest('.idea-card').id);
  var ideaIndex = localArr.find(function (index){
    return index.id == cardId;
  });
  var indexNumber = localArr.indexOf(ideaIndex);
  tempArr[indexNumber].deleteFromStorage(indexNumber);
} 

function updateStar(e){
  console.log(e.target.src)
  if (e.target.src.match("Images/star.svg")) {
     e.target.src = "Images/star-active.svg";
     var star = true
   }else {
    e.target.src = "Images/star.svg";
    star = false
  }
  updateIdeaArray(e, star)
}

function updateIdeaArray(e, star){
  var tempArr = [];
  var localArr = JSON.parse(localStorage.getItem('idea'));
  for (i = 0; i < ideaStorageArr.length; i++) {
    var sameIdea = new Idea(ideaStorageArr[i].title, ideaStorageArr[i].body,
    ideaStorageArr[i].id, ideaStorageArr[i].quality, ideaStorageArr[i].star);
    tempArr.push(sameIdea);
  }
  launchUpdateIdea(tempArr, localArr, e, star)
}

function launchUpdateIdea(tempArr, localArr, e, star){
  var cardId = parseInt(e.target.closest('.idea-card').id);
  var ideaIndex = localArr.find(function (index){
    return index.id == cardId;
  });
  var indexNumber = localArr.indexOf(ideaIndex);
  tempArr[indexNumber].UpdateIdea(indexNumber);
  //saveToIdea(e, star)
}



/****************Idea Box*****************/


function checkInputFields() {
	if (ideaTitle.value && ideaBody.value !== '') {
        saveButton.disabled = false;
        saveButton.classList.add('enable');
	} else {
        saveButton.disabled = true;
        saveButton.classList.remove('enable');
	}
}

function runIdea(title, body) {
	var title = ideaTitle.value;
	var body = ideaBody.value;
}

// function deleteIdea(event) {
//     console.log(event.target);
//     var ideaLocation = findId(event); 
//     console.log(ideaLocation);
//     event.target.closest('.idea-card').remove();
//     ideaStorageArr[ideaLocation].deleteFromStorage(ideaLocation);
//     saveToStorage();
// }


function isStorageEmpty(){
  if(ideaStorageArr != []){
    retrieveIdea()
  }
}


  //getAttribute('src')
  //setAttribute('src', star-active.svg)


/****************Storage Box**********/
function togglePrompt() {
  console.log(ideaStorageArr.length);
  if (ideaStorageArr.length > 0) {
    initialPrompt.classList.add('hidden')
  } else if (ideaStorageArr.length === 0) {
    initialPrompt.classList.remove('hidden')
  }
}

function genCard(newIdea) {
	var ideaCard = `
		<article class = 'idea-card' id='${newIdea.id}'>
            <div class = 'idea-card-top'>
                <input type = 'image' src = 'Images/star.svg' class = 'star' alt = 'star-button'>
                <input type = 'image' src = 'Images/delete.svg' class = 'delete'>
            </div>
            <article>
                <h4 class = 'idea-card-title'>${newIdea.title}</h4>
                <p class = 'idea-card-text'>${newIdea.body}${newIdea.id}</p>
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
 
