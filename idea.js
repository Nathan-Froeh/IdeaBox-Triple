

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
    localStorage.setItem('idea', JSON.stringify(ideaStorageArr));
    console.log(ideaStorageArr)
  }
  deleteFromStorage(index) {
    console.log(ideaStorageArr)
    console.log('Index ! ', index)
    ideaStorageArr.splice(index, 1)
    this.saveToStorage(ideaStorageArr)
  }

   updateIdea(sameIdea, index){
     console.log(sameIdea)
     ideaStorageArr.splice(index, 1, sameIdea)
     this.saveToStorage(ideaStorageArr)
    //  ideaStorageArr.splice(i, 1)
    //  this.saveToStorage(ideaStorageArr)
     console.log('my log', this.title);
    // 
    // recognize star or text update
    // update storage
   }



  // UpdateQuality(){}
};


function retrieveIdea() {
  ideaStorageArr.forEach(function(idea){
    genCard(idea);
  });
}










