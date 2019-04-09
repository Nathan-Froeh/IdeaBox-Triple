

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
    var cardId = parseInt(event.target.parentNode.parentNode.id)
    updateStar(event, cardId);
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

storageBoxParent.addEventListener('input', function(event){
  if(event.target.className === 'idea-card-title'){
    console.log('Title')
  }
  if(event.target.className === 'idea-card-text'){
    console.log('Body')
  }
})

function saveToIdea(){
  event.preventDefault();
  var title = ideaTitle.value;
  var body = ideaBody.value;
  var id = Date.now();
  var idea = new Idea(title,body,id); //put local vars in place of parameters 
  ideaStorageArr.push(idea);
  console.log(ideaStorageArr);
  idea.saveToStorage(ideaStorageArr);
  modifyStar(idea);
  }

function makeDeleteArray(e){
  var tempArr = [];
  var localArr = JSON.parse(localStorage.getItem('idea')); //comment out this line
  for (i = 0; i < ideaStorageArr.length; i++) {
    var sameIdea = new Idea(ideaStorageArr[i].title, ideaStorageArr[i].body,
    ideaStorageArr[i].id, ideaStorageArr[i].quality, ideaStorageArr[i].star);
    tempArr.push(sameIdea);
    // console.log(sameIdea.id)
    // console.log(parseInt(e.target.closest('.idea-card').id))
    // if(parseInt(e.target.closest('.idea-card').id) === sameIdea.id) {
    //   console.log(sameIdea)
    //   console.log(i)
    //   //sameIdea.launchDeleteIdea(sameIdea, i)
    // }
    
  }
 
  launchDeleteIdea(tempArr, localArr, e) //get rid of this and the function with line 79
}

function launchDeleteIdea(tempArr, localArr, e) {
  var cardId = parseInt(e.target.closest('.idea-card').id);
  var ideaIndex = localArr.find(function (index){
    return index.id == cardId;
  });
  var indexNumber = localArr.indexOf(ideaIndex);
  tempArr[indexNumber].deleteFromStorage(indexNumber);
} 

function updateStar(e, cardId){
  if (e.target.src.match("Images/star.svg")) {
     e.target.src = "Images/star-active.svg";
     var star = true
   }else {
    e.target.src = "Images/star.svg";
    star = false
  }
  updateIdeaArray(e, star, cardId)
}


function updateIdeaArray(e){
  var tempArr = [];
  for (i = 0; i < ideaStorageArr.length; i++) {
    var sameIdea = new Idea(ideaStorageArr[i].title, ideaStorageArr[i].body,
    ideaStorageArr[i].id, ideaStorageArr[i].quality, ideaStorageArr[i].star);
    tempArr.push(sameIdea);
    if(parseInt(e.target.parentNode.parentNode.id) === sameIdea.id) {
      sameIdea.star = !sameIdea.star;
      //console.log('my idea', sameIdea.star)
      console.log(sameIdea)
      console.log(i)
      //sameIdea.updateIdea(sameIdea, i)
    }
  }
}

// function launchUpdateIdea(tempArr, localArr, e, star){
//   var cardId = parseInt(e.target.closest('.idea-card').id);
//   var ideaIndex = localArr.find(function (index){
//      return index.id = cardId;
//   });
//   // console.log(cardId)
//   // console.log(ideaIndex) // this links the star to the object but I think I need to do this for line 98 on the instantiation
//   var indexNumber = localArr.indexOf(ideaIndex);
//   tempArr[indexNumber].updateIdea(indexNumber, star);
//   // console.log(indexNumber)
// }



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

function modifyStar(newIdea){
  if(newIdea.star === true){
    var starValue = 'Images/star-active.svg'
  }else{starValue = 'Images/star.svg'}
  genCard(newIdea, starValue)
}

function genCard(newIdea, starValue) {
	var ideaCard = `
		<article class = 'idea-card' id='${newIdea.id}'>
            <div class = 'idea-card-top'>
                <input type = 'image' src = ${starValue} class = 'star' alt = 'star-button'>
                <input type = 'image' src = 'Images/delete.svg' class = 'delete'>
            </div>
            <article>
                <h4 class = 'idea-card-title' contenteditable = 'true'>${newIdea.title}</h4>
                <p class = 'idea-card-text' contenteditable = 'true'>${newIdea.body} ! ${newIdea.id}</p>
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




