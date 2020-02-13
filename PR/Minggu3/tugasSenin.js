function findOposite(angka){
    
    
    if (angka < 0){
        return(-angka)
    }
    if (angka > 0){
        return(-angka)
    }
    return angka 
}
console.log(findOposite(-4))
console.log(findOposite(54))
console.log(findOposite(7))


const isEmail = (str="") => {
    var extension = ['.com','.co.id','.id','.tech']
    // CHECK EXTENSION
    var isAda = false
    var jumlah = 0

    for (i=0 ; i < extension.length ; i++){
        if(str.includes(extension[i])){
            jumlah ++
        }

        if(str.endsWith(extension[i])){
            isAda = true
        }

    }


    //CHECK DUPLICAT EXTENSION
    var isCheck = false
    if(str.includes('@')){
        var index = str.indexOf('@')
        if(index > 0 && index < str.length){
            isCheck=true
        }

    var jumlahAt = 0 
    for(var i = 0 ; i < str.length ; i++)
    if(str[i]== '@'){
        jumlahAt ++    
    }
    // console.log(jumlahAt)
    // console.log(jumlah)
    } 
    // console.log(isCheck)
    // console.log(isAda)
    if(isAda && isCheck && jumlah == 1 && jumlahAt == 1){
        return 'Email True'
    }else{
        return "Email False"
    }
}
console.log(isEmail('me@@fikri.tech'))
console.log(isEmail('me@fikri.tech'))
// isEmail('me')
// isEmail('fikri@google')



const makeSquare = (column,row) => {
    var length = column * row
    var print = ''
   for(j=0 ; j < row ; j++){
   for(i =0 ; i < column ; i++){
     print += 1 +(j*column )+ i + ' '
   }
   print+= '\n'
   }
  console.log(print)
  }
  
makeSquare(2,3)

const passwordStrength= (str = '') =>{

    var adaAlpha = false
    var adaUpper = false
    var adaNumeric = false
    for(var i = 0 ; i < str.length; i++){
        if(!(str[i] >= 0)){
            adaAlpha = true
            if(str[i] == str[i].toUpperCase()){
                adaUpper = true
            }
        }
        if (str[i] > 0){
            adaNumeric = true
        }
    }
    if (adaNumeric && adaUpper && adaAlpha){
        return 'Password Strength'
    }else{
        return 'Password Weak'
    }
}

console.log(passwordStrength('fikrii'))
console.log(passwordStrength('fikrFi12'))




