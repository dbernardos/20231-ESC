const form   = document.getElementById('form');
const campos = document.querySelectorAll('.form-control');
const spans  = document.querySelectorAll('.span-required');
const butao  = document.querySelector('.fa-solid');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

//const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]w+)*\.\w+([-.]\+)*$/;

form.addEventListener('submit', (event) => {
    if (
        !emailValidate() ||
        !passwordValidate()
        ) 
        { event.preventDefault(); }
});


function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}
function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}
function emailValidate() {
    if (emailRegex.test(campos[0].value)) {
        removeError(0);
        return true;
        

    } else {
        setError(0);
        return false;
    }

}

function passwordValidate() {
    if (campos[1].value.length < 8) {
        setError(1);
        return false;

    } else {
        removeError(1);
        return true;
    }
}

butao.addEventListener('click', function() {
    butao.classList.add()
})