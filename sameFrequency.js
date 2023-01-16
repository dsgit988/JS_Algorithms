
//My solution
function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
  let arr1 = num1.toString().split("");
  let arr2 = num2.toString().split("");
  
  if (arr1.length !== arr2.length){
      return false;
  }
  
  let freq1 = {};
  let freq2 = {};
  
  for (let i = 0; i < arr1.length; i++){
      freq1[arr1[i]] = (freq1[arr1[i]] || 0) + 1;
  }
  
  for (let j = 0; j < arr2.length; j++){
      freq2[arr2[j]] = (freq2[arr2[j]] || 0) + 1;
  }
  
  for (let key in freq1){
      if (!(key in freq2)){
          return false;
      }
      if (freq1[key] !== freq2[key]){
          return false;
      }
  }
  
  return true;
  
}

//Author's solution

/* 
function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}
 */