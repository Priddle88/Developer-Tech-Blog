const postId = document.querySelector('input[name="postId"]').value;

const removePost = async function () {

    await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
    });

    document.location.reload();
};

const rmvBtns = document.querySelectorAll('.removeBtn')

for (let i = 0; i < rmvBtns.length; i++) {
    rmvBtns[i].addEventListener('click', removePost);
}