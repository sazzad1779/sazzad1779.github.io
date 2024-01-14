// $(function(){
//  $("#header").load("header.html");
//  $("#sidebar").load("sidebar.html");
//  $("#footer").load("footer.html");
// });

// // document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';
// common.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});
