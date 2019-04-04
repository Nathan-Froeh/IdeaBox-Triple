var ideaTitle = document.querySelector('#ideabox-title-input');
var ideaBody = document.querySelector('#ideabox-body-input');
var saveButton = document.querySelector('#ideabox-save-button')
var ideaSearchBox = document.querySelector('#ideabox-search-input');
var ideaSearchButton;
var starredButton = document.querySelector('#starred-Button');
var qualityInput = document.querySelector('#new-quality-input');
var addQualityButton = document.querySelector('#addQualityButton');
var storageBox = document.querySelector('#storage-box')
var filterStarredIdeas = document.querySelector('.filter-starred-ideas') // Brian working on aside menu
var orangeStar = document.querySelector('#star')
var deleteButton = document.querySelector('#delete');
var upVote = document.querySelector('#upvote-deact');
var textQuality = document.querySelector('.quality');
var downVote = document.querySelector('#downvote-deact')
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


orangeStar.addEventListener('click', makeStarOrange) 

function makeStarOrange() {
    if (document.getElementById("star").src = 'Images/star.svg') {
        document.getElementById("star").src = 'Images/star-active.svg';
    } else if ( document.getElementById("star").src = 'Images/star-active.svg') {
        document.getElementById("star").src = 'Images/star.svg';
    }
}


























/****************Idea Box*****************/


















/****************Storage Box**********/

function genCard(title, text) {
	var ideaCard = `
		<div class = card 'idea-card'>
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
                <p class = 'quality'>Quality: Swill</p>
                <img src = 'Images/downvote.svg' id = 'downvote-deact'>
            </div>
        </div>
          `
  storageBox.insertAdjacentHTML('afterBegin', ideaCard);
};





