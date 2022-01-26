document.getElementById("submitButton").addEventListener("click", function (e) {
    e.preventDefault();
    let str = document.getElementById("inputString").value;
    let numStr = str.length
    if (numStr === 0 ) {
        displayWord.textContent = "Please Enter a Word!";
    } else {
    palindrome(str);  
    }
});


// palindrome Function
function palindrome(str) {
    const regex = /[\W_]/g;

    const newString = str.toLowerCase().replace(regex, "");

    const reversed = newString.split("").reverse().join("");

    let displayWord = document.getElementById("displayWord");

    if (reversed === newString) {
        displayWord.textContent = "YES! Word is a palindrome";
        return;
    } else {
    displayWord.textContent = "No! Word is NOT! a palindrome";
    return;
    } 
}
