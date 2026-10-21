// ======================
// Assignment lesson JS3:
// ======================

function isValidPassword(password, username) {
    username = "robert.jed";
    // 1. Check if the password is at least 8 characters long
    if (password.length < 8) {
        return false;
    }
    // 2. Check if the password contains any spaces
    else if (password.includes(' ')) {
        return false;
    }
    // 3. Check if the password contains the username
    else if (password.includes(username)) {
        return false;
    }
    // If it passes all checks, return true
    else {
    return true;
    }
}
console.log(isValidPassword("robert jed"));
console.log(isValidPassword("bR4!."));
console.log(isValidPassword("robert.jed"));
console.log(isValidPassword("r06<R+J`d"));