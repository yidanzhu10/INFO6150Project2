let userinfo = $('#usericon')
let username = $('#sample').clone();
username.html(sessionStorage.getItem("curuser"));
username.show();
username.css({color: 'white'});
username.css({font: 'Montserrat'});
console.log(sessionStorage.getItem("curuser"))
userinfo.append(username);

