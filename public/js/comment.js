// const { post } = require("../../controllers/api");

console.log("TESTING");

const commentFormHandler = async function (event) {
    event.preventDefault();

    console.log("TESTING");

    const postId = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;

    console.log(postId);
    console.log(body);

    if (body) {
        await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                body: body,
                postId: postId,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // document.location.replace('/');
        document.location.reload();
    }
};

document.querySelector('.btnSizing').addEventListener('click', commentFormHandler);