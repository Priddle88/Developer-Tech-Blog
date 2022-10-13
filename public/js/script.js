addPost = (event) => {
    event.preventDefault();
    document.querySelector('.postBox').classList.remove('gone');
}



document.getElementById('newPostBtn').addEventListener('click', addPost);

console.log("THIS IS HERE");

