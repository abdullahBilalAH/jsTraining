const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
const getUniqueValues = (arrOfNum) => {
    let ar =[];
    for(let c=0;c<arrOfNum.length;c++){
        if(check(ar,arrOfNum[c]));
        else
        ar[ar.length]=arrOfNum[c];
    }
    return ar;
};
function check(ar,value){
    for(let c=0;c<ar.length;c++){
        if(ar[c]==value)
            return true;
    }
    return false;
}
console.log(getUniqueValues(arrOfNum));// [1, 2, 4, 5, 6]
//time complexity is O(n^2)
