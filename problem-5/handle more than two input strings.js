const commonCharactersMoreThan2 = (ar) => {
    let s = "";
    for(let c=0;c<ar.length-1;c++){
    s=commonCharacters(ar[c],ar[c+1])
    ar[c+1]=s;
    }
    return s;
  };  
  const commonCharacters = (str1, str2) => {
    let s = "";
    const strMap = new Map();
    for(let c=0;c<str2.length;c++){
        strMap.set(str2[c],c);
    }
    for(let c=0;c<str1.length;c++){
        let flag=-1;
        if(strMap.get(str1[c])>flag){
            flag=c;
            s+=str1[c];
        }
    }
    return s;
  };
  console.log( commonCharactersMoreThan2(['acexivou', 'aegihobu',"apepipopup"]));// output: aeiou
