function validateForm() {
            // Get form elements by their IDs
            const x = document.getElementById('user_id').value;
            const y = document.getElementById('email').value;
            const r = document.getElementById('phone').value;
            const z = document.getElementById('password').value;
            const w = document.getElementById('confirmpassword').value;

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