// function balikinHasil(angka){
//     angka = String(angka)
//     if (angka.length % 2 !== 0 ){
//         return 'Panjang Digit Harus Genap'
//     }

    
//     var hasil = []
    
//     for(var i= 0 ; i < angka.length; i+=2){
//         hasil.push(angka[i]) + (angka[i+1])
//     }
//     console.log ('Sebelum Reverse = ' + hasil)

//     hasil = hasil.reverse()
//     console.log ('Setelah Reverse = ' + hasil)

//     hasil = hasil.join('')
//     console.log ('Setelah Join = ' + hasil)

//     return hasil    
// }


// balikinHasil(123456)


function cyclicRotation(number){
    number = String(number)
    if(number.length % 2 !== 0){
        return 'Panjang Digit Harus Genap'
    }
    
    var temp = [] 

    for(var i = 0 ; i < number.length ; i+=2 ){
        temp.push(number[i] + number[i+1])
    }
    console.log('Sebelum Reverse = ' + temp)
    
    temp = temp.reverse()
    console.log('Setelah Reverse = ' + temp)
    
    temp = temp.join('')
    console.log('Setelah Join = ' + temp)

    return temp


}

cyclicRotation(123456) // 563412


const cyclicRotation2 =(num) =>{
    var newNum = String(num)
    
    if(newNum.length % 2 !== 0){
        return 'Panjang Digit Harus Genap'
    }
    var newHasil = [] //12
    //i = 0 / 2
    //newNum = 123456
    for(var i = 0 ; i< newNum.length ; i+=2){
        newHasil.push(newNum[i] + newNum[i+1])
    }
    console.log ('ini adalah sebelum di reverse ' + newHasil)

    newHasil = newHasil.reverse()
    console.log ('ini adalah setelah di reverse ' + newHasil)

    newHasil = newHasil.join('')
    console.log ('ini adalah setelah di join ' + newHasil)
    return newHasil
}

cyclicRotation2(123456) // 563412

// 1. var i = 0 -> 0 < 6 true turun ke newHasil.ngepush/menambahkan index ke 0 dari newNum dapat '1' + index ke 0+1 jadi dapat '2' hasilnya [12] selesai i asalnya 0 + 2 = 2
// 2. var i = 2 -> 2 < 6 true turun ke newHasil.ngepush/menanbahkan index ke 2 dari newNum dapat '3' + index ke 2+1 jadi dapat '4' hasilnya [34] selesai i asalnya 2 + 2 = 4
// 3. var i = 4 -> 4 < 6 true turun ke newHasil.ngepush/menambahkan index ke 4 dari newNum dapat '5' + index ke 5+1 jadi dapat '6' hasilnya [56] selesai i asalnya 4 + 2 = 6
// 4. var i = 6 -> 6 <6 false fungsi selsesai sampai sini