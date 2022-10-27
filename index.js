// //What event listeners do you need to start off with?
// Can you correctly add bookmarks?
// What UI element allows a user to remove a previously added bookmark?
// How can you make sure that the correct bookmark is removed?


// get the user's input for bookmark link and push to object that maintains a collection of bookmarks.
let userInputBookmarkLink = document.querySelector("#bookmark-link")


let userInputBookmarkLinkValue = userInputBookmarkLink.value.toLowerCase()



// get the user's input for bookmark name and push to object that has key:value pair of bookmark name and link

let userNameBookmark = document.querySelector("#bookmark-name")

let userNameBookValue = userNameBookmark.value.toLowerCase()



// 1. add an eventListener to "Add Bookmark" button
// 2. in the function block, get the link and name to create an object 
// 3. and push into an arrayOfBookmarks

// let arrayOfBookmarks = [
    

// ]
// console.log(arrayOfBookmarks)

// let addBookmark = document.querySelector("click", (event) => {
//     // 2. in the function block, get the link and name to create an object 

// })

let obj1 = {}
obj1['name'] = 'Rich'
// console.log("obj1",obj1)

let obj2 = {}
obj2['Bookmark Name'] = "Bookmark Link"
// console.log("obj2:", obj2)

let obj3 = {}
obj3['Pokemon'] = "www.pokemon.com"
// console.log("obj3:", obj3)


// 3. test if we can push an obj into an array.
// arrayOfBookmarks.push(obj2)
// arrayOfBookmarks.push(obj3)

// console.log(arrayOfBookmarks)


class Bookmark {
    constructor(name, link){
        this.name = name;
        this.link = link;
    }

    render(){
        //create a div
        let divOfEachBookmark = document.createElement("div");

        let bookmarkName = document.createElement("h2");
        bookmarkName.textContent = `${this.name}`

        let bookmarkLink = document.createElement("h3");
        bookmarkLink.textContent = `${this.link}`

        // create remove bookmark
        let removeBookmark = document.createElement("button")
        removeBookmark.textContent = "Remove"

        // create addEventListener on remove button
        let filter = removeBookmark.addEventListener("click", ()=>{



        })

        divOfEachBookmark.append(bookmarkName, bookmarkLink, removeBookmark)
        console.log(divOfEachBookmark)

        return divOfEachBookmark
    }
}

class ArrayOfBookmarks {
    constructor(){
        this.arrayOfBookmarks = [];
        // this.filteredArrayOfBookmarks = [];
    }

    addBookmark(bookmark){
        this.arrayOfBookmarks.push(bookmark)
    }

    render(){
        // select where to render() the bookmarks on the web app
        //
        let bookmarkItself = document.createElement("div")
        
        let listOfBookMarks = document.querySelector(".bookmarks");

        // map each element and 
        this.arrayOfBookmarks.map((bookmark)=> {
            bookmarkItself.append(bookmark.render())
        })

         listOfBookMarks.replaceChildren(bookmarkItself)
    }
    
}

let arrayOfBookmarks = new ArrayOfBookmarks()


// everytime you add a bookmark name and link, and you hit the button, it should create two things:
// select the add button
    const add = document.querySelector("#add");
    // add eventListener on add button
    add.addEventListener("click",()=> {
    // 1. to create an object that contains key:value pair of name:link
    
    let userInputBookmarkLinkValue = userInputBookmarkLink.value.toLowerCase()
    let userNameBookValue = userNameBookmark.value.toLowerCase()

    let bookmark = new Bookmark(userNameBookValue, userInputBookmarkLinkValue )
    console.log(bookmark)

    // let createObj = {}
    // createObj[userNameBookValue] = userInputBookmarkLinkValue
    // // 2. push that object into an array that maintains our objects
    // arrayOfBookmarks.push(createObj)
    // console.log(arrayOfBookmarks)

    

    arrayOfBookmarks.addBookmark(bookmark)
    console.log(arrayOfBookmarks)



    bookmark.render()
    console.log(Bookmark)

    arrayOfBookmarks.render()
})

