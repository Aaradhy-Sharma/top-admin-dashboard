const sidebarList1 = document.querySelector('[data-sidebarList1');
const sidebarList2 = document.querySelector('[data-sidebarList2');
const dbBottomImg = document.querySelector('[data-dashboardBottomImg');
const searchBar = document.querySelector('[data-search-bar');
const searchIcon = document.querySelector('[data-search-icon]');
const langSelector = document.querySelector('[data-lang-selector]');
const userIcon = document.querySelector('[data-userIcon]');
const userImg = document.querySelector('[data-userIcon]');
const bookmarkIcon = document.querySelectorAll('[data-bookmark]');
const deleteIcon = document.querySelectorAll('[data-delete]');
const shareIcon = document.querySelectorAll('[data-share]');
const shareL1 = document.getElementById('shareL1');
const shareL2 = document.getElementById('shareL2');
const shareL3 = document.getElementById('shareL3');
const shareR1 = document.getElementById('shareR1');
const shareR2 = document.getElementById('shareR2');
const shareR3 = document.getElementById('shareR3');





let bookmarked = false;
bookmarkIcon.forEach((bookmarkIcon) => {
    bookmarkIcon.addEventListener('click', () => {
        bookmarked = !bookmarked;
        if(bookmarked){
            bookmarkIcon.setAttribute('src', './Assets/bookmarked.svg');
            console.log("bookmarked")
        }
        else{
            bookmarkIcon.setAttribute('src', './Assets/bookmark.png');
            console.log("unbookmarked");
        }
    });
});


let deleted = false;
deleteIcon.forEach((deleteIcon) => {
    deleteIcon.addEventListener('click', () => {
        deleted = !deleted;
        if(deleted){
            deleteIcon.setAttribute('src', './Assets/deleted.svg');
            console.log("deleted")
        }
        else{
            deleteIcon.setAttribute('src', './Assets/delete.svg');
            console.log("undeleted");
        }
    });
});


let shared = false;
shareIcon.forEach((shareIcon) => {
    shareIcon.addEventListener('click', () => {
        shared = !shared;
        if(shared){
            shareIcon.setAttribute('src', './Assets/shared.png');
            console.log("shared")
        }
        else{
            shareIcon.setAttribute('src', './Assets/share.svg');
            console.log("unshared");
        }
    });
});

shareL1.addEventListener('click', () => {
    open('https://aaradhy-sharma.github.io/top-calculator/');
});

shareL2.addEventListener('click', () => {
    open('https://aaradhy-sharma.github.io/top-signup-form/');
});

shareR1.addEventListener('click', () => {
    open('https://aaradhy-sharma.github.io/top-etch/');
});

shareR2.addEventListener('click', () => {
    open('#');
});

shareL3.addEventListener('click', () => {
    open('#');
});

shareR3.addEventListener('click', () => {
    open('#');
});


console.log("script loaded successfully.")