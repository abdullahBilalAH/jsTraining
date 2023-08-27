const arrOfNum =  [1, 2, 2, 4, 5, 6, 6];
const getUniqueValues = (arrOfNum) => {
    let ar =[];
    let check=[];
    for(let c=0;c<arrOfNum.length;c++){
        if(check[arrOfNum[c]]==undefined){
        ar[ar.length]=arrOfNum[c];
        check[arrOfNum[c]]=0;
        }
    }
    return ar;
};
console.log(getUniqueValues(arrOfNum));// [1, 2, 4, 5, 6]
//time complexity is O(n)
