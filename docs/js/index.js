//log
alert('login:Room513   pass:513');

const loginInput = document.querySelector('.login');
const passInput = document.querySelector('.pass');
const loginBtn = document.querySelector('.logBtn');

loginBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(loginInput.value === 'Room513' && passInput.value === '513'){
        window.location = './HBsite.html'
    }
    else {
        alert('Wrong login or password. Please try again')
    }
});

