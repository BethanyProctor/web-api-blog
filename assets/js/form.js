const form = document.getElementById('blog-form');
const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitButton = document.getElementById('submitBtn')

//step 1 - get the input and make it into an object
function saveLastBlog() {
    const blogPost = {
        username: username.value,
        title: title.value,
        content: content.value,
    };
    //save the information in local storage
    localStorage.setItem('blogPost', JSON.stringify(blogPost));
}

//step 2 - make sure there is something in each field
submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    let inputs = document.querySelectorAll('input[type="text"]');
    let isValid = true;
    inputs.forEach(function (input){
        if (input.value.trim() === "") {
            isValid = false;
            input.style.border = "1px solid red"
        } else {
            input.style.border = "";
        }
    })

    if (!isValid){
        alert("Please fill out all fields");
        return;
    }

    saveLastBlog();

    //step 3 - take you to the blog page 
    window.location.href = "blog.html";
})