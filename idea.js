/*		MUST HAVE

DeleteFromStorage
UpdateIdea
UpdateQuality


*/

class Idea{
  constructor(title, body,id){
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = false;
    this.quality = 'Swill';
    //this.xButton = xButton;
    //console.log('Idea Test', this.title, this.body);
  }

  saveToStorage(ideaStorageArr) {
    console.log('saveToStorage');
    localStorage.setItem('idea', JSON.stringify(ideaStorageArr));
    console.log(ideaStorageArr)
    //console.log(idea)
  }

  deleteFromStorage(cardId) {
    console.log('result');
    var matchingId = this.filter(function(id) {
      this.slice(event.target.parentNode.parentNode.id);
      return this.id === event.target.parentNode.parentNode.id;
    });
  }

  // DeleteFromStorage(){}
  // UpdateIdea(){}
  // UpdateQuality(){}
};




function retrieveIdea() {
			console.log('retreveIdea')
			console.log(localStorage.getItem('idea'))
			console.log(JSON.parse(localStorage.getItem('idea')))

    	//console.log(ideaStorageArr);
        ideaStorageArr.forEach(function(idea){
        	genCard(idea);
        });
    }








