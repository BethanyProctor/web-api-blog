// //get the blog post info from the form
function renderLastBlog() {
    const lastBlogPost = JSON.parse(localStorage.getItem('blogPost'));
    if (lastBlogPost !== null) {
        document.getElementById('saved-un').innerHTML = lastBlogPost.username
        document.getElementById('saved-title').innerHTML = lastBlogPost.title
        document.getElementById('saved-content').innerHTML = lastBlogPost.content
    }
}

//show the input from the form
function init() {
    renderLastBlog();
}
init();


//theme switching
const themeButtonEl = document.getElementById('themeChange');

let isDark = true;

themeButtonEl.addEventListener("click", () => {
    isDark = !isDark
    const theme = {
      'background-color': isDark ? '#edefed' : '#3e4753',
      color: isDark ? '#3e4753' : '#edefed'
    }
    $('body').css(theme)
  })

//the inverse for the header and footer
themeButtonEl.addEventListener("click", () => {
    const theme = {
      'background-color': isDark ? '#3e4753' : '#edefed',
      color: isDark ? '#edefed' : '#3e4753'
    }
    $('.navbar').css(theme)
    $('footer').css(theme)
  })



  