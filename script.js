// Generate Random Password
function generate(){

    // Set Password Length
    var complexity = document.getElementById('exampleFormControlTextarea1').value; 

    // Possible passwords
    var values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+';

    var password = "";

    // Create for loop for password
    for(var i=0; i < 15; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    // Add passwsord to textbox
    document.getElementById("exampleFormControlTextarea1").value = password; 

}

// Copy to Clipboard
function copyClipboard(){

    //Get result to clipboard
    var copyText = document.getElementById('exampleFormControlTextarea1');

    // Select text field
    copyText.select();

    // Copy text in text field
    document.execCommand('copy');

    // Alert Copied text
    alert("Copied you password to clipboard :)");
}
