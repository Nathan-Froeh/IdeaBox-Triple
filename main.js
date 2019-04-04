var ideaStorageArr = JSON.parse(localStorage.getItem('idea')) || [];
var ideaTitle = document.querySelector('#ideabox-title-input');
var ideaBody = document.querySelector('#ideabox-body-input');
var saveButton = document.querySelector('#ideabox-save-button')
var ideaSearchBox = document.querySelector('#ideabox-search-input');
var ideaSearchButton;
var starredButton = document.querySelector('#starredButton');
var qualityInput = document.querySelector('#new-quality-input');
var addQualityButton = document.querySelector('#addQualityButton');
var storageBox = document.querySelector('#storage-box');


window.addEventListener('load', retrieveIdea);
ideaTitle.addEventListener('keyup', checkInputFields);
ideaBody.addEventListener('keyup', checkInputFields);
saveButton.addEventListener('click', titleText);

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

    function titleText(event){
        event.preventDefault();
        var title = ideaTitle.value;
        ideaText(title)

    }

    function ideaText(title){
        var body = ideaBody.value;
        genCard(title, body)
        objCreate();
    }

    function objCreate() {    
        var ideaObj = {
        title: ideaTitle.value,
        body: ideaBody.value
        }
        ideaStorageArr.push(ideaObj);
        objSave(ideaStorageArr);
        console.log(ideaStorageArr.length);
    }

    function objSave(ideaStorageArr) {
        localStorage.setItem('idea', JSON.stringify(ideaStorageArr));
        console.log(localStorage.getItem('idea'));
    }

    function retrieveIdea() {
        var stuff = localStorage.getItem('idea');
        var parseIdea = JSON.parse(stuff); 
        var title = parseIdea[0].title;
        var body = parseIdea[0].body;
        ideaStorageArr.forEach(function (genCardtitle, body));
        genCard(title, body);
    }

    



















/****************Storage Box**********/

function genCard(title, body) {
	var ideaCard = `
		<div class = 'idea-card'>
            <div class = 'idea-card-top'>
                <img src = 'Images/star.svg' id = 'star'>
                <img src = 'Images/delete.svg' id = 'delete'>
            </div>
            <article>
                <h4 class = 'idea-card-title'>${title}</h4>
                <p class = 'idea-card-text'>${body}</p>
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




