let userinfo = $('#usericon')
let username = $('#sample').clone();
username.html(sessionStorage.getItem("curuser"));
username.show();
username.css({color: 'white'});
username.css({font: 'Montserrat'});
console.log(sessionStorage.getItem("curuser"))
userinfo.append(username);

$('#subscribe1').on('click', function(event) {
    if(sessionStorage.getItem("curuser") != null){
        alert('Thanks for your subscription!');
    }else{
        alert('Please log in first to continue your subscription.');
        window.location.href = "signin.html";
    }
});

$('#subscribe2').on('click', function(event) {
    if(sessionStorage.getItem("curuser") != null){
        alert('Thanks for your subscription!');
    }else{
        alert('Please log in first to continue your subscription.');
        window.location.href = "signin.html";
    }
});

$('#subscribe3').on('click', function(event) {
    if(sessionStorage.getItem("curuser") != null){
        alert('Thanks for your subscription!');
    }else{
        alert('Please log in first to continue your subscription.');
        window.location.href = "signin.html";
    }
});


var strarray1 = [];
var strarray2 = [];
strarray1[0] = "";
strarray1[1] = "Bring on Spring";
strarray1[2] = "Discover Outdoor Plants";
strarray1[3] = "The Perfect Outdoor Flowers For Every Space";
strarray1[4] = "Best Plants for Your Home: PlantsHub your space";
strarray1[5] = "Build Your Own Living Tablescape this Holiday";
strarray1[6] = "Plant Care Tips For Healthy Indoor Succulents";
strarray1[7] = "Plant Life Series A Warm Mid-Century Modern Home";

strarray2[0] = "";
strarray2[1] = "Follow along on a Bird of Paradise’s journey from our greenhouse to your home, and learn how we care for your plant every step of the way.";
strarray2[2] = "Unique florals and foliage for your outdoor space. Delivered straight from our greenhouse to your home.";
strarray2[3] = "There are plenty of reasons to add plants to your space, but did you know health benefits is one of them?";
strarray2[4] = "Invite Spring Into Your Space With These Must-Have Houseplants";
strarray2[5] = "The living room is where you and your family likely spend the most time, making it the perfect space to transform into an indoor jungle. ";
strarray2[6] = "Studies have proven that green spaces and plants help relieve some symptoms of anxiety disorders.";
strarray2[7] = "Fall is the time to get cozy and cuddle up. After the weddings, reunions, and bbq’s of the summer, it’s time to wind down and get recharged.";



var title = document.getElementById("imagetitle");
var paragraph = document.getElementById("imageparagraph");
// var title3 = document.getElementById("img3title");


// $('#imagechange').setAttribute("src", "images/background_img3.jpg");
var image = document.getElementById("imagechange");
var num1 = parseInt(Math.random() * (7 - 1 + 1) + 1);
console.log(num1);
image.style = "background-image:url(images/background_img" + num1 +".jpg); background-size:cover; background-position:center" ;
title.innerText = strarray1[num1];
paragraph.innerText = strarray2[num1];
// title1.innerText = strarray1[num1];
//
// var num2 = parseInt(Math.random() * (9 - 1 + 1) + 1);
// while (num2 == num1){
//     var num2 = parseInt(Math.random() * (9 - 1 + 1) + 1);
// }
// var image2 = document.getElementById("image2");
// image2.src = "images/background_img" + num2 + ".jpg";
// title2.innerText = strarray1[num2];
//
// var num3 = parseInt(Math.random() * (9 - 1 + 1) + 1);
// while (num3 == num1 || num3 == num2){
//     var num3 = parseInt(Math.random() * (9 - 1 + 1) + 1);
// }
// var image3 = document.getElementById("image3");
// image3.src = "images/background_img" + num3 + ".jpg";
// title3.innerText = strarray1[num3];
