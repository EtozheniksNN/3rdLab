/*function validFunction(fnm)
{
    fnLen=fnm.length
    if (fnLen == 0)
    {alert("Вы должны ввести свое имя")
        document.dataentry.fn.focus()}
}
function validphone(phone)
{
    len=phone.length
    digits="0123456789"
    if(len != 7 && len != 9)
    {alert("Неверное количество знаков в номере")
        document.dataentry.phone.focus()}
    for(i=0; i<3; i++)
    {if (digits.indexOf(phone.charAt(i))<0)
    {alert("Это должны быть цифры")
        document.dataentry.phone.focus()
        break}
    }
}*/


function validFunction(fName) {

    let nameLen = fName.length;
    if (nameLen === 0) {
        alert("Введите свое имя");
        document.getElementById("nameField").onblur;

    }
}

function phoneValid(phone) {
    let phoneLen = phone.length;
    const digits = "0123456789";
    if ( phoneLen != 7 && phoneLen != 9 ) {
        alert("Неверное кол-во знаков");
        document.getElementById("phoneField").onblur;
    }

    for( let i=0; i<3;i++){
        if(digits.indexOf(phone.charAt(i))<0){
            alert("Это должны быть цифры");
            document.getElementById("phoneField").focus();
            break;
        }
    }
}