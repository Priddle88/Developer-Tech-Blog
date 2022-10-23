// const moment = require('moment');

addPost = async (event) => {
    event.preventDefault();
    document.querySelector('.postBox').classList.remove('gone');

    postPost = async (event) => {
        event.preventDefault();
        const title = document.querySelector('input[name="post-title"]').value;
        const content = document.querySelector('input[name="post-content"]').value;
        // console.log(newTitle);

        await fetch(`/api/post`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                content,
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        document.location.replace('/');

    };

    document.querySelector('.btnPost').addEventListener('click', postPost);
};

document.getElementById('newPostBtn').addEventListener('click', addPost);

console.log("THIS IS HERE");