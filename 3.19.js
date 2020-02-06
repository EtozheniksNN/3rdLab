function doIt()
{
    alert("document.myForm.fName.value — это  " + document.myForm.fName.value);
    alert("document.myForm.lName.value — это  " + document.myForm.lName.value);
    const greeting="Привет, "
    alert(greeting + document.myForm.fName.value + " " + document.myForm.lName.value);

    alert("Количество букв в имени " + document.myForm.fName.value.length)
}