// const moment = require('moment');

addPost = async (event) => {
    event.preventDefault();
    document.querySelector('.postBox').classList.remove('gone');

    postPost = async (event) => {
        event.preventDefault();
        const newTitle = document.querySelector('input[name="post-title"]').value;
        const newContent = document.querySelector('input[name="post-content"]').value;

        await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title: newTitle,
                content: newContent,
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        document.location.replace('/');

    };

    document.querySelector('.btnPost').addEventListener('click', postPost);
};

document.getElementById('newPostBtn').addEventListener('click', addPost);

console.log("THIS IS HERE");