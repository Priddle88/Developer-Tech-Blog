const postId = document.querySelector('input[name="post-id"]').value;

const editPost = async function (event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;

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
    await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
    });

    document.location.replace('/dashboard');
};

document.querySelector('.editBtn').addEventListener('click', editPost);

document.querySelector('.removeBtn').addEventListener('click', removePost);