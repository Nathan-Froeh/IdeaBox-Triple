
class Idea {
  constructor(title, body, id, quality, star) {
    this.title = title;
    this.body = body;
    this.id = id;
    this.quality = quality || 'Swill';
    this.star = star;
  };

  saveToStorage(ideaStorageArr) {
    togglePrompt();
    localStorage.setItem('idea', JSON.stringify(ideaStorageArr));
  };

  deleteFromStorage(index) {
    togglePrompt();
    ideaStorageArr.splice(index, 1);
    this.saveToStorage(ideaStorageArr);
  };

  updateIdea(ideaStorageArr, index, star) {
    star ? ideaStorageArr[index].star = true : ideaStorageArr[index].star = false;
    this.saveToStorage(ideaStorageArr);
  };
};

function retrieveIdea() {
  ideaStorageArr.forEach(function(idea){
    modifyStar(idea);
    togglePrompt();
    });
  };
