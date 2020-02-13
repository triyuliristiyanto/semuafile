
// NO 1

const Find_short = (str ='') =>{
    var newStr = str.split(' ') 
    //console.log(newStr)
    var newJumlah = []
    

    for(var i = 0 ; i < newStr.length ; i++){
        newJumlah.push(newStr[i].length)
        //console.log(newJumlah)
    }

    var newSort = newJumlah.sort(function(a,b){return a - b})

    console.log(newSort[0])


}

// Find_short("Many people get up early in the morning");// would return 2
// Find_short("Every office would getting newest monitor");// would return 5
// Find_short("Create new file after this morning");// would return 3



//SOAL no.2

var count = 0 
const persitance = (num) =>{
    var angka = num
    var angkaString = String(angka)
    if (angkaString.length ==1){
        return count
    }
    var hasilKali = 1
    for (var i = 0; i <angkaString.length ; i++){
        hasilKali *= angkaString[i]
    }
    count++
    return persitance(hasilKali)
}

console.log(persitance(39))


let persitance2 = (num) => {
    var count = 0 
    do{
        var hasilKali = 1
        num = String(num)
        for(var i = 0;i<num.length; i++){
            hasilKali *= num[i]
        }
        count++
        num = hasilKali
        num = String(num)

    }while(num.length > 1)
    console.log(count)
}

persitance2(25)


//SOAL no.3
// const Multiplication_table = (angka,baris) =>{
//     //var Newangka = 1
//     var hasil = ''
    
//     for(var i = 1; i < angka+1 ; i++){
//         for (var j = 1; j < baris+1; j++){
//             hasil += ( j * i ) + ' ';    
//             // Newangka += 1
//             // console.log (i)
//             // console.log (j)
//         }
//         hasil += '\n'
//     }
//     console.log(hasil)
// }

const makeSquare = (col=0, row=0) => {
    var hasil = ''
       for (let i = 0; i < row ; i++) {
        var angka = i+1  
        for (let j = 0; j < col; j++) {
                hasil += angka + ' '
                angka += i+1
          }
          hasil += '\n'
       }
       console.log(hasil)
   }
 makeSquare(3,3)

// Multiplication_table(3,5)
// Multiplication_table(3,3)
// Multiplication_table(5,3)

// SOAL No.4

const Alphabet_position = (str = '') =>{

    var newStr = str.split('')
    //console.log (newStr)
    var cekAlpa = ' abcdefghijklmnopqrstuvwxyz'
    //console.log(cekAlpa)
    var hasil = ''
    var newHasil = []
    
    for(var i = 0 ; i < newStr.length ; i++){
        
        if(!(newStr[i] >= 0)){
            // bilang kalo misalnya bukan huruf yang di inputkan
            hasil = cekAlpa.indexOf(newStr[i].toLowerCase()) // <== cek string yang dicari ada di index keberapa dari cekalpha kemudian setelah cek di database alfa hasilnya masukan variabel hasil berbentuk angka indek ke berapa.
            if(hasil !== -1){
                newHasil.push(hasil)
            }
        }
    
    }
//   console.log(newHasil)  
}

Alphabet_position("thE")
Alphabet_position("The sunset sets at twelve o' clock.");
Alphabet_position("it’s never too late to try");
Alphabet_position("Have you done your homework?")

let Alphabet_position2 = (sentence) =>{
    var alpha = ' abcdefghijklmnopqrstuvwxyz'
    sentence = sentence.replace(/[' ']/g,'')
    var pos = ''
    for(var i = 0;i <sentence.length;i++){
        var index = alpha.indexOf(sentence[i].toLowerCase())
        if(index > 0){
            pos += index + ' '
        }
    }
    console.log(pos)
}


Alphabet_position2("Have you done your homework?")




var num =[1,2,3,4,5]
var total = num.reduce(function(prev,cur,index){
    console.log('looping ke = '+ index)
    console.log('prev = ' + prev)
    console.log('cur = ' + cur)
    return prev + cur
})
console.log(total)

// =====sama dengan fungsi dari penumlahan array 15=====
var num = [1,2,3,4,5]
total = 0
for(var i = 0 ; i < num.length; i++){
    total += num[i]
}

console.log (total)
