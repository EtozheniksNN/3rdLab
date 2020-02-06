


function validFunction(fName) {

    let nameLen = fName.length;
    if (nameLen === 0) {
        alert("Input your name");
        document.getElementById("nameField").onblur;

    }
}

function phoneValid(phone) {
    let phoneLen = phone.length;
    const digits = "0123456789";
    if ( phoneLen != 7 && phoneLen != 9 ) {
        alert("Wrong kol-vo numbers");
        document.getElementById("phoneField").onblur;
    }

    for( let i=0; i<3;i++){
        if(digits.indexOf(phone.charAt(i))<0){
            alert("It should consists of numbers");
            document.getElementById("phoneField").focus();
            break;
        }
    }
}