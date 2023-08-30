const commonCharacters = (str1, str2) => {
    let s = "";
    for(let c=0;c<str1.length;c++){
        for(let i=0;i<str2.length;i++){
            if(str1[c]==str2[i]){
                s+=str1[c];
                break;
            }
        }

    }
    return s;
  };
  console.log( commonCharacters('acexivou', 'aegihobu'));// output: aeiou
