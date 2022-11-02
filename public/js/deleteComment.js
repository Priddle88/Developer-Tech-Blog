const commentId = document.querySelector('input[name="commentId"]').value;

const removeComment = async function () {

    await fetch(`/api/comment/${commentId}`, {
        method: 'DELETE'
    });

    document.location.reload();
};

const rmvCmtBtns = document.querySelectorAll('.removeCmtBtn')

for (let i = 0; i < rmvCmtBtns.length; i++) {
    rmvCmtBtns[i].addEventListener('click', removeComment);
}