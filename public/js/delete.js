const postId = document.querySelector('input[name="post"]').value;

const removePost = async function (event) {
    event.preventDefault();

    await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
    });

    document.location.reload();
};

const rmvBtns = document.querySelectorAll('.removeBtn')

for (let i = 0; i < rmvBtns.length; i++) {
    rmvBtns[i].addEventListener('click', removePost);
}

// rmvBtns.map(
//     addEventListener('click', removePost)
// );

// map(function (rmvBtns) { addEventListener('click', removePost) });

console.log("Testing!!!");