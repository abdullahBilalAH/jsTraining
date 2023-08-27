/*I wanted to use the 'set', but when I asked GPT,
it considered it as a built-in function. 
It's more likely to be a built-in data structure, but just to be cautious,
I wrote the code in this way.*/
const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
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
