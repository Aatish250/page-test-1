seePass = document.querySelectorAll('.see-pass');
passInp = document.querySelectorAll('.pass-inp');
function textPassShow(n){
    passInp[n].type = 'text';
    seePass[n].name = 'eye-off';
}
function textPassHide(n){
    passInp[n].type = 'password';
    seePass[n].name = 'eye';
}

imageEffect = document.querySelector('#imageEffect');
logIn = document.querySelector('.log-in');
signUp = document.querySelector('.sign-up');
containerCard = document.querySelector('.container-card');
// body = document.getElementsByTagName('BODY')[0];
body = document.body;
function toSignUp(){
    logIn.style.left = '-100%';
    signUp.style.left = '0%';
    body.style.backgroundImage = "url('../image/evening\ deer\ 2.jpg')";
    if(body.clientWidth>900){
        containerCard.style.transform = 'translateX(50%)';
    }else {
        body.style.backgroundPosition = '20%';
    }
}
function toLogIn(){
    logIn.style.left = '0%';
    signUp.style.left = '100%';
    body.style.backgroundImage = "url('../image/evening\ deer.jpg')";
    if(body.clientWidth>900){
        containerCard.style.transform = 'translateX(-50%)';
    }else {
        body.style.backgroundPosition = '80%';
    }
}