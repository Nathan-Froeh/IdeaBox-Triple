class Idea{
  constructor(title, body,id, star){
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = star || false;
    this.quality = 'Swill';
    //this.xButton = xButton;
    //console.log('Idea Test', this.title, this.body);
  }

  saveToStorage(ideaStorageArr) {
    togglePrompt();
    localStorage.setItem('idea', JSON.stringify(ideaStorageArr));
    console.log(ideaStorageArr)
  }
  deleteFromStorage(index) {
    togglePrompt();
    console.log(ideaStorageArr)
    console.log('Index ! ', index)
    ideaStorageArr.splice(index, 1)
    this.saveToStorage(ideaStorageArr)
  }

   UpdateIdea(index){
    console.group(index)
    // recognize star or text update
    // update storage
   }

   //after star click, see what star is true or false
   //toggle star image
   //send true or false 


  // UpdateQuality(){}
};

function retrieveIdea() {
        ideaStorageArr.forEach(function(idea){
          genCard(idea);
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