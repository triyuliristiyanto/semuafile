function bikinHurufBerulangKaliYangManaAwalnyaHurufKapital(huruf = '', n) {
    let result = ''
    for (let i = 0; i < n; i++){
      if (i == 0) {
        result += huruf.toUpperCase()
      } else {
        result += huruf
      }
    }
    return result;
  }
  

  function alphaLoops(string = '') {
    let result = ''
    for (let i = 0; i < string.length; i++) {
      result += bikinHurufBerulangKaliYangManaAwalnyaHurufKapital(string[i], i + 1) 
    }
    return result;
  }
  
  console.log(alphaLoops('fikri'))
  console.log(alphaLoops('abcd')) // ABbCccDddd


  function alphaSum(string = '') {
    let result = 0;
    for (let i = 0; i < string.length; i++){
      result += string.charCodeAt(i) - 96 
    }
    return result
  }

  console.log(alphaSum('abc')) // 6
  console.log(alphaSum('babaca')) // 10





  function alphaMove(string = '', jumlahMove = 0) {
    let result = ''
    for (let i = 0; i < string.length; i++){
      result += String.fromCharCode(string.charCodeAt(i) + jumlahMove) 
    }
    return result
  }
  
  
  console.log(alphaMove('abc', 1))
  console.log(alphaMove('abc', 2))
  console.log(alphaMove('aaa', 5))
  