const bubbleSort = (array) => {
    let flage = true;
    while(flage){//It has O(n) complexity because, in the worst case, it can iterate N times.
        flage=false;
        for(let c=1;c<array.length;c++){// O(n) complexity
          //swap O(1)
            if(array[c]<array[c-1]){
                array[c]=array[c-1]+array[c];
                array[c-1]=array[c]-array[c-1];
                array[c]=array[c]-array[c-1];
                flage=true
            }
        }
    }
    return array;
};
console.log(bubbleSort([34, 203, 3, 746, 200, 984, 198, 764, 9]));// output [3,9,34,198,200,203,746,764,984]
//complexity: O(n^2) "worst case"
//complexity if no elements are swapped: O(n) "best case"
