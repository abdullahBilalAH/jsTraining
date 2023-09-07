const secondMax = function(array) {
  if(array.length<=1)
  return null;
  let max=array[0];
  let sMax=array[1];
  for(let c=0;c<array.length;c++){
    if(array[c]>max){
      sMax=max;
      max=array[c];
    }
    if(array[c]<max&&array[c]>sMax)
    sMax=array[c];
  }
  return sMax;
}; 
console.log(secondMax([2,222,213]));//213
console.log(secondMax([-1, -5, 2]));//-1
console.log(secondMax([1,5, 2]));//2
console.log(secondMax([-3, -2, -7]))//-3
console.log(secondMax([]));//null
//time complexity: O(n)
