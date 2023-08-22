function checkPrime(num) {
    if(num==2)
        return true;
    if(num<=1)
        return false;
    for(var c=2;c<num;c++)
        if(num%c==0)
            return false;
    return true;
}
//test
for(var c=-100;c<=100;c++){
    if(checkPrime(c))
        console.log(c+ " is prime");
    else
        console.log(c+ " is not prime");
}
