/*		MUST HAVE
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
    localStorage.setItem('idea', JSON.stringify(ideaStorageArr));
    //console.log(idea)
  }
  deleteFromStorage(ideaStorageArr) {
    // localStorage.setItem('idea', JSON.stringify(ideaStorageArr));
    togglePrompt();
    console.log('deleteFromStorage')
  }
  // DeleteFromStorage(){}
  // UpdateIdea(){}
  // UpdateQuality(){}
};


// function pageLoadFunctions() {
  
//   getOldIdeas();
// }

function retrieveIdea() {
        ideaStorageArr.forEach(function(idea){
        	genCard(idea);
        });
    }

// function getOldIdeas(ideaStorageArr) {
  // for (i = 0; i < ideaStorageArr.length; i++) {
  //   var sameIdea = new Idea(ideaStorageArr[i].title, ideaStorageArr[i].body, ideaStorageArr[i].id, ideaStorageArr[i].quality);
  //   ideaStorageArr.push(sameIdea);
  //   console.log('SUP')
  // }
// }









