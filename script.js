// Generate Random Password
function removePassword(condition, data, values) {
    if (condition === false) {
        for (let i = 0; i < data.length; i++) {
            values = values.replace(data[i], "");
        }
    }
    return values;
}

function generate() {
    var length = prompt("What is the size of your password?");
    var values =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    var numbers = "1234567890".split("");

    if (numbers.indexOf(length) > -1 || length > 0) {
        length = parseInt(length);

        if (length >= 8 && length <= 128) {
            var isSpecialCharacter = confirm(
                "Do you want to include a special character?"
            );
            var isNumeric = confirm("Do you want to include a number?");
            var isLowerCase = confirm(
                "Do you want to include a lower case letter?"
            );
            var isUpperCase = confirm(
                "Do you want to include a upper case letter?"
            );

            console.log(
                length,
                isSpecialCharacter,
                isNumeric,
                isUpperCase,
                isLowerCase
            );

            // Set Password Length
            // var complexity = document.getElementById(
            //     "exampleFormControlTextarea1"
            // ).value;

            // Possible passwords

            var specialCharacters = "!@#$%^&*()_+".split("");
            values = removePassword(
                isSpecialCharacter,
                specialCharacters,
                values
            );

            values = removePassword(isNumeric, numbers, values);
            var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
            values = removePassword(isLowerCase, lowerCase, values);
            var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
            values = removePassword(isUpperCase, upperCase, values);

            var password = "";
            console.log(numbers.indexOf(length));

            // Create for loop for password
            for (var i = 0; i < length; i++) {
                password =
                    password +
                    values.charAt(
                        Math.floor(
                            Math.random() * Math.floor(values.length - 1)
                        )
                    );
            }
            // Add passwsord to textbox
            document.getElementById(
                "exampleFormControlTextarea1"
            ).value = password;
        } else {
            alert("That length is invalid.");
        }
    } else {
        alert("Invalid entry. Please enter numeric value.");
    }
}

// Copy to Clipboard
function copyClipboard() {
    //Get result to clipboard
    var copyText = document.getElementById("exampleFormControlTextarea1");

    // Select text field
    copyText.select();

    // Copy text in text field
    document.execCommand("copy");

    // Alert Copied text
    alert("Copied you password to clipboard :)");
}
