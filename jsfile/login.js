// spep no 1
document.getElementById('btn-submit').addEventListener('click', function () {

    // stpe no 2
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step no 3
    const password = document.getElementById('user-password');
    const pass = password.value;

    // step no 4.. do not used because it is a fails rulse but we check it only

    if(email === "sontan@baap.com"&& password === 'scret'){
        console.log('valid user')
    }
    else{
        console.log('invalid user')
    }
})


