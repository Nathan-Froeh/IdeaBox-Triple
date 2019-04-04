/*		MUST HAVE

Idea method
Constructor
SaveToStorage
DeleteFromStorage
UpdateIdea
UpdateQuality


*/

class Idea{
  constructor(title, body){
    //this.id = id;
    this.title = title;
    this.body = body;
    this.star = false;
    this.quality = 'Swill';
    //this.xButton = xButton;
    console.log('Idea Test', this.title, this.body);
  }

  saveToStorage(ideaStorageArr) {
    console.log('hi');
    localStorage.setItem('posts', JSON.stringify(ideaStorageArr));
  }
}

//console.log(title);
//console.log(`body ${body}`);
// console.log();
// console.log();
// consolelog();
// consolelog();
// consolelog();
// consolelog();
// consolelog();















