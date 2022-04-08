let form = $('#login')
form.submit(function(){
    let email = $("#exampleFormControlInput1").val();
    let pwd = $("#inputPassword1").val();
    console.log(email);

    // return landing_page.html;
    if(pwd == sessionStorage.getItem(email)){
        alert("Login success!")
        sessionStorage.setItem("curuser", email);
        window.location.href="landing_page.html";
    }else{
        let login = $("#log-in").clone();
        login.html("We could not find your records, please check the information you've entered or sign in if you are new user");
        // login.html(sessionStorage.getItem("email"));
        // alert('We could not find your records, please sign up first');
        login.show();
        form.append(login);
    }

    return false;
});

let signup = $('#signup')
signup.submit(function (){
    let email = $("#exampleFormControlInput2").val();
    let pwd = $("#inputPassword2").val();
    console.log(sessionStorage.getItem(email));
    if(sessionStorage.getItem(email) == null){
        sessionStorage.setItem(email, pwd);
        alert("You have successfully signed up, please login!");
    }else {
        alert("This email has been registered, please use another email or login");
    }

    window.location.href="signin.html";
});