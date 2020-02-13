function referSeq(num){
  var hasil = []
  
  for(var i = num ; i > 0 ; i--){
    hasil.push[i]
  }
  return hasil
}

console.log(referSeq(10))



function superSize(num){
    
    Newnum = num.toString()
    newArr = Newnum.split('')
    newSort = newArr.sort(function(a,b){return b-a})
    newJoin = newSort.join('')
 
    return newJoin
}

// console.log(superSize(2017)) //7102
// console.log(superSize(321))
// console.log(superSize(513)) //315

function solution(str){
  var NewSplit = str.split('')
  console.log(NewSplit)
  var newReverse = NewSplit.reverse()  
  console.log(newReverse)
  var newJoin = newReverse.join('')
  console.log(newJoin)  
}
//solution('hello')

function digitize(n) {
  //code here

  var newN = String(n)
  
  var newDigit = newN.split('')
   
  var newRev = newDigit.reverse()

  var newjoin = newRev.join('')

  //var newNumber = Number(newjoin)
  
  var arrNumber = []
  for(var i = 0 ;i < newjoin.length ; i++){
    arrNumber.push(Number(newjoin[i]))
  }

  return arrNumber
 
}
console.log(digitize(35231)) // 13253
console.log(digitize(12345)) // 54321