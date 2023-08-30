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
  console.log( commonCharacters('acexivou', 'aegihobu'));// output: aeiou
