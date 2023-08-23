
function reverse (str) {
    var s="";
    for(var c=str.length-1;c>=0;c--)
        s+=str[c];
    return s;
  }
  //test
console.log(reverse("Hello, World!"))