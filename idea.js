

class Idea{
  constructor(title, body, id, quality, star){
    this.title = title;
    this.body = body;
    this.id = id;
    this.quality = quality || 'Swill';
    this.star = star || false;

    //console.log('star Test', this.star);
    //its like the updateStar function is getting ran once for each object
    //is there a simpler way I can make an array to reinstantiate
    //I think I need to set the star to a specific idea object
  }

  saveToStorage(ideaStorageArr) {
    //togglePrompt()
    localStorage.setItem('idea', JSON.stringify(ideaStorageArr));
  }
  deleteFromStorage(index) {
    togglePrompt();
    ideaStorageArr.splice(index, 1)
    this.saveToStorage(ideaStorageArr)
  }

  updateIdea(sameIdea, index){
    //console.log(sameIdea)
    ideaStorageArr.splice(index, 1, sameIdea)
    this.saveToStorage(ideaStorageArr)
    
  }


   //after star click, see what star is true or false
   //toggle star image
   //send true or false 


  // UpdateQuality(){}
};

function retrieveIdea() {
        ideaStorageArr.forEach(function(idea){
          modifyStar(idea);
          togglePrompt();
        });
    }

// function getOldIdeas(ideaStorageArr) {
  // for (i = 0; i < ideaStorageArr.length; i++) {
  //   var sameIdea = new Idea(ideaStorageArr[i].title, ideaStorageArr[i].body, ideaStorageArr[i].id, ideaStorageArr[i].quality);
  //   ideaStorageArr.push(sameIdea);
  //   console.log('SUP')
  // }
// }
