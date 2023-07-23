// DOM by name attribute
// Overall form validation
function validateForm()
{

    let x = document.forms['myform']['user_id'].value;
    //JavaScript Document Object Model (DOM) to access the value of an input field-name "user_id" inside the HTML form-ID "myform."
    if (x=="")
    {
        alert("Username is mandatory");
        return false;
    }
    else if (alphaNumeric(x)==false)
    {
        alert("Use any of these letters in you username (/^[0-9a-zA-Z]+$/)");
        return false;
    }
    else if(x.length<3 || x.length >20)
    {
        alert("Username must be at least or at most 20 characters long");
        return  false;
    }
    

    let y = document.forms['myform']['email'].value;
        if(y=="")
        {
            alert("Email is mandatory");
            return false;
        }
        else if (validateEmail(y)==false)
        {
            alert("Invalid email format");
            return false;
        }
    

    let r = document.forms['myform']['phone'].value;
    if (r=="")
    {
        alert ("Please enter your contact number");
        return false;
    }
    else if (validatePhone(r)==false)
    {
        alert("Invalid phone number format. It should be in the format +91 1234567890")
        return false;   
    }
    

    let z = document.forms['myform']['password'].value;
    if(z=="")
    {
        alert("Password is mandatory");
        return false;
    }
    else if (validatePassword(z)==false)
    {
        alert("Password must be at least 8 characters long, containing at least one uppercase letter, one lowercase letter, one number, and one special character (@, #, $).")
        return  false;
    }
  
    
    
    let w = document.forms['myform']['confirmpassword'].value;
    if(w=="")
    {
        alert("Confirm  your Password ");
        return false;

    }
    else if(w!==z)
    {
        alert ("Your password doesn't match")
        return false;
    }

    
}
// Function calls for internal validation
function alphaNumeric(inputtext)
{
    var letter = /^[0-9a-zA-Z]+$/;
    return letter.test(inputtext);
}

function validateEmail(email)
{
        const emailRegex =/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
}

function validatePhone(phone)
{
    var phoneRegex = /^\+\d{1,2}\s\d{10}$/;
    return phoneRegex.test(phone);
}

function validatePassword(password)
{
    var passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!])[A-Za-z\d@#$!]{8,}$/;
    return passwordRegex.test(password);

}

function myFunction()
{
    var s = document.getElementById("password");
    if(s.type=="password")
    {
        s.type = "text";
    }
    else 
    {
        s.type = "password";
    }
    var c = document.getElementById("confirmpassword");
    if(c.type=="password")
    {
        c.type = "text";
    }
    else 
    {
        c.type = "password";
    }
}