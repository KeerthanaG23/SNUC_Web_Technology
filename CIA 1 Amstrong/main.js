// Reading a positive number as a prompt
function fun()
{
    let number;
    number = window.prompt("Enter a positive number: ");
// Validate input
    if(isNaN(number)|| number <= 0)
    {
        window.alert("Please enter a valid positive number.");
        return;
    }
    const nod = num_digits(number);
    check_condition(nod,number);
}

// Function to determine the number of digits in the given number
function num_digits(num)
{
    let nod =  0
    while(num > 0)
    {
        nod += 1;
        num = parseInt(num/10);
    }
    return nod;
    
}
// Function to check Amstrong condition
function check_condition(nod,num)
{
    let temp = num;
    let sum = 0;
    while(num > 0) 
    {
        let remainder = num % 10;
        sum += remainder ** nod;
        num = parseInt(num / 10);
    }
    if (sum == temp)
    {
        window.alert( `${temp} is an Amstrong number`);
        // document.getElementById("para").innerHTML = "The number is an Amstrong number";
    }
    else
    {
        window.alert( `${temp} is not an Amstrong number`);
    }
}


