const postId = document.querySelector('input[name="postId"]').value;

const editPost = async function (event) {
    event.preventDefault();

    const title = document.querySelector('textarea[name="postTitle"]').value;
    const body = document.querySelector('textarea[name="postContent"]').value;

    await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            body
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    document.location.replace('/dashboard');
};

const removePost = async function () {
    console.log("Testing!!!");
    await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
    });

    document.location.replace('/dashboard');
};

document.querySelector('.updateBtn').addEventListener('click', editPost);

document.querySelector('.removeBtn').addEventListener('click', removePost);