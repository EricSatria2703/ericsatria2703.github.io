var login = document.querySelector('.submit');
login.onclick = function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('pass').value;
    var success = document.querySelector('.success');
    var success1 = document.querySelector('.success1');
    var hide = document.querySelector('.submit');
    var hide1 = document.querySelector('.hideme');
    var hide2 = document.querySelector('.hideme1')
    var wrong = document.querySelector('.failed');
    if (username === "driver" && password === "1234") {
        success.classList.add('active');
        success1.classList.add('active');
        hide.classList.add('active');
        hide1.classList.add('active');
        hide2.classList.add('active');
        wrong.classList.remove('active');
    }
    else {
        wrong.classList.add('active');
    }
};