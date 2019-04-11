# IdeaBox-Triple
## Project with Nathan Froehlich and David Engel

### Summary
This is the third project of module one at the Turing School of Software and Design.  The IdeaBox is a webpage where the user can submit their good ideas for safe keeping, utilizing local storage methods.  This project exposed us to a few different concepts:  seperation of the "data model" and the "DOM model", JavaScript Object Notation, management of client-side interactions, and Object Oriented Programming.  
In our Idea.js file we created an Idea class with a constructor as well as "save to storage", "delete from storage" and "update idea" methods.  In addition, our main.js file contains all DOM related Javascript.  Each card is generated as an instance of the Idea class and is saved to local storage with the ability to edit the title and body content at any time.  All cards persist in the same order upon page reload.  When the delete button is clicked, the card dissapears from the DOM and all card data is erased from local storage.  The star button will toggle between a white and orange star image when clicked, however it does not have the additional functions.  
Our webpage has two media queries, one of which activates at <740px wide and the second of which activates at <500px wide.  

As for the structure of the webpage, we used grid for the basic skeleton of the page and flexbox for organization of child elements within our grid items.  As the screen size decreases we abandon the grid display and switch to using flexbox only.

Link to github live page:  https://nathan-froeh.github.io/IdeaBox-Triple/

### Static Comp and Web Page screenshots

#### Static Comp
![Desktop view static comp](https://github.com/Nathan-Froeh/IdeaBox-Triple/blob/master/Images/StaticComp.png)
![Mobile view static comp](https://github.com/Nathan-Froeh/IdeaBox-Triple/blob/master/Images/StaticCompMobile.png)

#### Web Page
![Desktop View](https://github.com/Nathan-Froeh/IdeaBox-Triple/blob/master/Images/ScreenShot1.png)
![Mobile View](https://github.com/Nathan-Froeh/IdeaBox-Triple/blob/master/Images/ScreenShotMobile.png)


