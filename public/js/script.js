

const postIt = () => {
    console.log("CLICKED IT!");
};

// document.addEventListener("keydown", function (event) {
//     if (event.key == "+ New Post") {
//         console.log('hello')
//         postIt();
//         // $('input[type="text"]').val('');
//     }
// });

document.querySelector('.newPostBtn').addEventListener('click', postIt);

