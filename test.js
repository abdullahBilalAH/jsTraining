function isPalindrome(string) {
    string = string.toLowerCase();
    var str = "";
    for (var c = 0; c < string.length; c++) {
        if (terms(string[c]))
            str += string[c];
    }
    var flag1 = 0;
    var flag2 = str.length - 1;
    for (;flag1 < flag2;) {
        if (str[flag1] !== str[flag2])
            return false;
        flag1++;
        flag2--;
    }
    return true;
}
function terms(char) {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
        return true;
    else
        return false;
}
