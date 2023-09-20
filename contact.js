var nameError=document.getElementById("name-error");
var phoneError=document.getElementById("phone-error");
var emailError=document.getElementById("mail-error");
var dateError=document.getElementById("date-error");
var addressError=document.getElementById("yogesh");
var submitError=document.getElementById("submit-error");

function validatename()
{
    var name1=document.getElementById("contactname").value;
    if(name1.length==0)
    {
        nameError.innerText="required*"
        nameError.style.color="red"
        return false;
    }
    else if(!name1.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
    {
        nameError.innerText="full name required*"
        nameError.style.color="red"
        return false;
    }
    else
    {
        nameError.innerText="valid"
        nameError.style.color="green"
        return true
    }
}
function validatephone()
{
    var Phone=document.getElementById("phone1").value;
    if(Phone.length==0)
    {
         phoneError.innerText="required*"
         phoneError.style.color="red"
         return false

    }
    else if(!Phone.match(/^\+?[0-9]{1,3}\s[0-9]{1,10}$/
    )  || Phone.length==13){
         phoneError.innerText="complete number required with code*"
         phoneError.style.color="red"
         return false
    }
    else{
        phoneError.innerText="Valid"
        phoneError.style.color="green"
        return true
    }
}
function validateemail()
{
    var email=document.getElementById("emails").value;
    if(email.length==0)
    {
        emailError.innerText="required*"
        emailError.style.color="red"
        return false
    }
    else if(!email.match(/^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/))
    {

        emailError.innerText="@ is missing*"
        emailError.style.color="red"
        return false
    }
    else{
        emailError.innerText="Valid"
        emailError.style.color="green"
        return true 
    }
}
function validateadress()
{
    var adress=document.getElementById("Address").value
    if(adress.length<=10)
    {
        addressError.innerText="required*"
        addressError.style.color="red"
        return false
    }
    else if(adress.length<30 && adress.length>10)
    {
        addressError.innerText="valid"
        addressError.style.color="green"
        return true
    }
    else{
        addressError.innerText="out of limit*"
        addressError.style.color="red"
        return false 
    }
}
function Sendmail() 
{
    if((validateadress())&&(validateemail())&&(validatename())&&(validatephone()))
    {
        alert("hello")
        const submit=document.getElementsByClassName('bb')[0];
            submit.addEventListener('submit',(e)=>{
                e.preventDefault();
                console.log("clicked")
            })
            Email.send({
                SecureToken:"87d8b1fb-e605-4397-9c33-7c9769d631f6",
                To : "yogeswararaopandranki@gmail.com",
                From : "yogeswararaopandranki@gmail.com",
                Subject : "This is the subject",
                Body : "And this is the body"
            }).then(
              message => alert(message)
            );
    }
    else{
        alert("some fields are missing")
        return false
    }
}

