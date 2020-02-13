// let mobil = ['Alya' , 'Avanza', 'Xenia','Honda','Alphard']

// var text = 'Mobil Saya\n'

// for(var i = 0 ; i < mobil.length ; i++){
//     text += i+ '. ' + mobil[i] + '\n'
// }

// console.log(text)




// // 1. Function utk hapus huruf vocal 
// // 2. Function check 
// // 3. Function ganjil genap 
// // 4. Function display angka terbesar 
// // 5. Function ngefilter string (hanya bisa integer) 
// // 6. Check Plat Nomor  
//  47  day_5/function.js 
// @@ -0,0 +1,47 @@
// // FUNCTION
// // DECLARATION
// // function nama(){
// //     console.log('Hello World')
// // }

// // EXECUTE
// // nama()



// // PARAMETER
// // function nama(nama,gender){
// //     console.log('Nama Saya ' + nama + ', Saya' + gender)
// // }



// // nama('Fikri')



// // RETURN 
// // var dua = 2
// // function penjumlahan(angka1,angka2){
// //     var hasil = angka1 + angka2 * dua
// //     // console.log(hasil)
// //     return 'fikri'
// // }

// // console.log(penjumlahan(5,10) + 5)


// function bayarParkir(masuk,keluar){
//     let total_jam = keluar - masuk
//     let biaya = total_jam * 4000


//     console.log('Biaya Parkir Adalah ' + biaya)
// }


// console.log(bayarParkir(7,10)) 




//  24  day_5/fungsi.js 
// @@ -0,0 +1,24 @@
// function jumlahkan(a, b){
//     var hasil = a + b
//     console.log(hasil)
// }

// //jumlahkan(3, 4)

// function jumlahkan2(a,b){
//     var hasil = a + b
//     return hasil;
// }

// function kaliDuaSesuatu(a, b){
//     return a * b
// }

// let jam = 4;
// var totalBayarParkir = kaliDuaSesuatu(jam, 3000)

// console.log(console.log("hello"))




//  3  day_5/segitiga_sama_kaki.js 
// @@ -54,3 +54,6 @@ function namaku (nama, gender){


// namaku('Fikri','Pria')



//  0  day_6/array.js 
// No changes.
//  125  day_6/homework.js 
// @@ -0,0 +1,125 @@
// // Ganjil Genap
// // Angka Terbesar
// // Plat Nomor

// // Declare
// function ganjilGenap (angka){
//     if(angka % 2==0){
//         return angka + ' adalah Genap'
//     }else{
//         return angka + ' adalah Ganjil'
//     }
// }

// // function perkalian(angka1 , angka2){
// //     var hasil = angka1 * angka2
// //     return hasil
// // }

// // var angka = perkalian(4,5) + perkalian(2,5)
// // console.log(ganjilGenap(angka))

// // 3,3,3
// function angkaTerbesar(num1,num2,num3){
//     var max = num1
//     if(num2 > max){
//         max = num2
//     }
//     if(num3 > max){
//         max = num3
//     }
//     return max
// }

// // console.log(angkaTerbesar(9,2,5))


// function platNomor(plat,tanggal){
//     if(((plat.charAt(5) % 2 == 0) && (tanggal %2 ==0)) ||
//     ((plat.charAt(5) % 2 != 0) && (tanggal %2 !=0))){
//         console.log('Boleh Lewat')
//     }else{
//         console.log('Gak Boleh Lewat')
//     }
// }


// // console.log(platNomor('D 4351 CA' , 21))


// function hapusAwalDanAkhir(kata){
//     return kata.slice(1,kata.length-1)
// }


// function sisainAwalDanAkhir(kata){
//     var huruf_awal = kata.charAt(0)
//     var huruf_akhir = kata.charAt(kata.length-1)
//     return huruf_awal + huruf_akhir  
// }

// function kalkulator(angka1,angka2,operator){
//     if(operator == '+'){
//         an
//     }
// }




// function squareEveryDigit(num){
//     var hasil = ''
//     var param = String(num)
//     for(var i = 0 ; i < param.length ; i ++){
//         hasil += param[i] * param[i]
//     }

//     return hasil
// }



// function removeVocal (kata){
//     var new_kata = ''
//     for(var i = 0 ; i < kata.length; i++){
//         if(kata[i].toLowerCase() == 'a' || kata[i].toLowerCase() == 'i' || kata[i].toLowerCase() == 'u' || kata[i].toLowerCase() == 'e' || kata[i].toLowerCase() == 'o'){

//         }else{
//             new_kata += kata[i]
//         }
//     }
//     return new_kata
// }

// //console.log(removeVocal('pUrwadhika'))







// var kata = 'Muslim'

// function removeVocal3(string) {
//     let hasil = '';
//     for (let i = 0; i < string.length; i++) {
//       if ('aiueoAIUEO'.indexOf(string[i]) >= 0) {
//         hasil += string[i];
//       }
//     }
//     return hasil;
//   }

// console.log(removeVocal3('aMuslim'))



// var nama = 'purwadhika'

// for(var i = 0 ; i < nama.length ; i ++){
//     console.log(nama[i] + ' checked')
// }
