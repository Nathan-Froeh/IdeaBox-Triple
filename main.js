var ideaTitle = document.querySelector('#ideabox-title-input');
var ideaBody = document.querySelector('#ideabox-body-input');
var saveButton = document.querySelector('#ideabox-save-button')
var ideaSearchBox = document.querySelector('#ideabox-search-input');
var ideaSearchButton;
var starredButton = document.querySelector('#starredButton');
var qualityInput = document.querySelector('#new-quality-input');
var addQualityButton = document.querySelector('#addQualityButton');
var storageBox = document.querySelector('#storage-box')


/*****************Aside Menu*************/

function titleText(event){
	event.preventDefault();
	var title = ideaTitle.value;
	ideaText(title)

}

function ideaText(title){
	var text = ideaBody.value;
	genCard(title, text)
}


saveButton.addEventListener('click', titleText)









/****************Idea Box*****************/


















/****************Storage Box**********/

function genCard(title, text) {
	var ideaCard = `
		<div class = 'idea-card'>
            <div class = 'idea-card-top'>
                <img src = 'Images/star.svg' id = 'star'>
                <img src = 'Images/delete.svg' id = 'delete'>
            </div>
            <article>
                <h4 class = 'idea-card-title'>${title}</h4>
                <p class = 'idea-card-text'>${text}</p>
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




