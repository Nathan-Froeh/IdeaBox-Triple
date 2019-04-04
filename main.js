

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
var star;
var qualityUp;
var qualityDown;
var deleteButton;


window.addEventListener('load', isStorageEmpty);
ideaTitle.addEventListener('keyup', checkInputFields);
ideaBody.addEventListener('keyup', checkInputFields);
saveButton.addEventListener('click', saveToIdea);

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
var id;
var title = ideaTitle.value;
var body = ideaBody.value;
var idea = new Idea(title,body);
ideaStorageArr.push(idea);
idea.saveToStorage(ideaStorageArr);
}

// function quality(){

// }

// function deleteButton(){

// }



    	var ideaObj;
    function objCreate() { 
    	event.preventDefault();   
        ideaObj = {
        title: ideaTitle.value,
        body: ideaBody.value
        }
        ideaStorageArr.push(ideaObj);
        genCard(ideaObj)
        objSave(ideaStorageArr);
    }

    function objSave(ideaStorageArr) {
        localStorage.setItem('idea', JSON.stringify(ideaStorageArr));
    }
        //console.log(localStorage.getItem('idea'));
        //console.log(ideaStorageArr);

  function isStorageEmpty(){
  	if(ideaStorageArr != []){
  		retrieveIdea()
  	}
  }

    function retrieveIdea() {
    	//console.log(ideaStorageArr);
        ideaStorageArr.forEach(function(idea){
        	genCard(idea);
        });
    }

    


/****************Storage Box**********/

function genCard(idea) {
	//console.log(idea);
	var ideaCard = `
		<div class = 'idea-card'>
            <div class = 'idea-card-top'>
                <img src = 'Images/star.svg' id = 'star'>
                <img src = 'Images/delete.svg' id = 'delete'>
            </div>
            <article>
                <h4 class = 'idea-card-title'>${idea.title}</h4>
                <p class = 'idea-card-text'>${idea.body}</p>
            </article>
            <div class = 'idea-card-bottom'>
                <img src = 'Images/upvote.svg' id = 'upvote-deact'>
                <p class = 'quality'>Quality:</p>
                <img src = 'Images/downvote.svg' id = 'downvote-deact'>
            </div>
        </div>
          `
  storageBox.insertAdjacentHTML('afterBegin', ideaCard);
};




