

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

window.addEventListener('load', isStorageEmpty);
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

  // if (event.target.className === 'delete') {
  //   console.log(event.target.parentNode.parentNode.id)
  //   console.log('delete')
  // }

  if (event.target.className === 'delete') {  
      var cardId = event.target.parentNode.parentNode.id;
      
      //event.target.parentElement.parentElement.remove();
      //console.log(event.target.parentElement.parentElement.id);
      newIdea.deleteFromStorage();
      //findDelete(cardId);
      
  }

  //parse the idea
  // use .find to get the object within the array matching the id given


});


// var myIdeas = JSON.parse(localStorage.getItem('idea'));

// function findDelete(cardId){
// 		console.log(ideaStorageArr);
// 	var result = ideaStorageArr.filter(function(matchingIdea){
// 		if(matchingIdea.id === parseInt(cardId)){
// 			console.log( 'TEST RESULT',cardId)

// 		return cardId;
// 		}
// 	});
// 	newIdea.deleteFromStorage(cardId)

// }

// function findDelete(cardId) {
// 	var thisIdea = localStorage.getItem('idea');
//   var owners = cardId.filter(function(cardId) {
//     return cardId.is === 'owner';
//   });
// }


// function findDelete(cardId){
//   var lunch =cardId.map(x => x.id)
//   for (var i = 0; i < cardId.length; i++){
//     if(lunch[i] === true){
//       var myLunch = cardId[i]
//     	console.log(myLunch)
//     }
//   }
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


function saveToIdea(e){
event.preventDefault();
var id = Date.now();
var title = ideaTitle.value;
var body = ideaBody.value;
var newIdea = new Idea(title,body,id);
ideaStorageArr.push(newIdea);
newIdea.saveToStorage(ideaStorageArr);
genCard(newIdea);
// console.log(id)
// console.log(idea)
// console.log(ideaStorageArr)
}

  function isStorageEmpty(){
  	//console.log(ideaStorageArr)
  	if(ideaStorageArr != []){
  		retrieveIdea()
  	}
  }





    // 	var ideaObj;
    // function objCreate() { 
    // 	event.preventDefault();   
    //     ideaObj = {
    //     title: ideaTitle.value,
    //     body: ideaBody.value
    //     }
    //     ideaStorageArr.push(ideaObj);
    //     genCard(ideaObj)
    //     objSave(ideaStorageArr);
    // }
    


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




