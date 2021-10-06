function palindrome(str) {
    let regEx=/[A-Za-z0-9]/gi
    let forwardArr=str.toLowerCase().match(regEx)
    let reverseArr=[]
    for (let i=forwardArr.length;i>0;i--){
      reverseArr.push(forwardArr[i-1])
    }
    return forwardArr.join()==reverseArr;
  }
  
  
  
 console.log(palindrome("eye"));