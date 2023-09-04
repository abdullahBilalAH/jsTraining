function balancedParens(input) {
    let stack =[];
    for(let c=0;c<input.length;c++){
        if(check1(input[c])){
            if(input[c]=='{'||input[c]=='['||input[c]=='('){
                stack.push(input[c]);
            }else{
                if(check2(stack[stack.length-1],input[c]))
                stack.pop();
            else
            return false;
            }
        }
    }
    if(stack.length==0)
    return true;
    return false;
  }
  function check1(char){
    if(char=='{'||char=='['||char=='('||char==')'||char==']'||char=='}')
    return true;
  }
  function check2(x,y){
    if(x=='{'&&y=='}')
    return true;
    if(x=='['&&y==']')
    return true;
    if(x=='('&&y==')')
    return true;

    return false;
  }
  console.log(balancedParens("function check2(x,y){if(x=='{'&&y=='}')return true;if(x=='['&&y==']')return true;if(x=='('&&y==')')return true;return false;}")); // true
  console.log(balancedParens('('));  // false
  console.log(balancedParens('()')); // true
  console.log(balancedParens(')('));  // false
  console.log(balancedParens('(())'));  // true
  console.log(balancedParens('[](){}')); // true
  console.log(balancedParens('[({})]'));   // true
  console.log(balancedParens('[(]{)}')); // false
  console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
  console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false
