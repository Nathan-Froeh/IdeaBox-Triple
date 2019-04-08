

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

var storageBoxParent = document.querySelector('#storage-box');

window.addEventListener('load', retrieveIdea);
ideaTitle.addEventListener('keyup', checkInputFields);
ideaBody.addEventListener('keyup', checkInputFields);
saveButton.addEventListener('click', saveToIdea);


//find way to get input from the insertAdjacentHTML
//document.querySelector does not seem to be the right selector
//look at the event bubbling class we had, this I think is the same thing

storageBoxParent.addEventListener('click', function(event) {
  if (event.target.className === 'star') {
    console.log(event.target.parentNode.parentNode.id)
    console.log('star')
  }

  if (event.target.className === 'upvote-deact') {
    console.log(event.target.parentNode.parentNode.id)
    console.log('up')
  }

  if (event.target.className === 'downvote-deact') {
    console.log(event.target.parentNode.parentNode.id)
    console.log('down')
  }

  if (event.target.className === 'delete') {
    // console.log(event.target.parentNode.parentNode.id)
    deleteIdea(event);
  }

  //parse the idea
  // use .find to get the object within the array matching the id given


});

function saveToIdea(e){
  event.preventDefault();
  var title = ideaTitle.value;
  var body = ideaBody.value;
  var id = Date.now();
  var idea = new Idea(title,body,id);
  ideaStorageArr.push(idea);
  console.log(ideaStorageArr);
  idea.saveToStorage(ideaStorageArr);
  genCard(idea);
  //console.log('1 ' + ideaStorageArr)
  }

// function makeTempArray(e){
//   var tempArr = [];
//   var cardId = parseInt(e.target.closest('.idea-card').id);
//   var localArr = JSON.parse(localStorage.getItem('idea'));
//   for (i = 0; i < ideaStorageArr.length; i++) {
//     var sameIdea = new Idea(ideaStorageArr[i].title, ideaStorageArr[i].body, ideaStorageArr[i].id, ideaStorageArr[i].quality);
//     tempArr.push(sameIdea);
//   }
// }

function deleteIdea(e) {
  event.target.closest('.idea-card').remove();
  var tempArr = [];
  var cardId = parseInt(e.target.closest('.idea-card').id);
  var localArr = JSON.parse(localStorage.getItem('idea'));
  for (i = 0; i < ideaStorageArr.length; i++) {
    var sameIdea = new Idea(ideaStorageArr[i].title, ideaStorageArr[i].body, ideaStorageArr[i].id, ideaStorageArr[i].quality);
    tempArr.push(sameIdea);
  }
  var ideaIndex = localArr.find(function (index){
    return index.id == cardId;
  });
  var indexNumber = localArr.indexOf(ideaIndex);
  tempArr[indexNumber].deleteFromStorage(indexNumber);
} 
// function reassignment(whatever) {
//   var secondArr = [];
//   console.log(ideaStorageArr);
//   ideaStorageArr.splice(whatever, 1);
//   ideaStorageArr.forEach(function (element) {
//     var oldIdeas = new Idea(element.title, element.body, element.id);
//     secondArr.push(oldIdeas);
//   })
//   localStorage.setItem('idea', JSON.stringify(secondArr));
// }

/*****************Aside Menu*************/





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


    


/****************Storage Box**********/

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




