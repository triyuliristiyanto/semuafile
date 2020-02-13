// const parkir = (jamMasuk,jamKeluar) => {
//     var biyaya = (jamKeluar - jamMasuk) *4000
//     return biyaya
// }

// console.log(parkir(2,7)) 

// let mobil = ['Avanza','Xenia','Corola','Timor','Lamborgini']

// let text =  'Mobil saya :\n'

// for (var i = 0 ; i < mobil.length ; i++){
//     text += (i+1) +'.'+ mobil[i] + '\n'        
// }
// console.log(text)


// const ganjilGenap = (angka) =>{
//     if(angka % 2 == 0){
//         return 'Ini adalah GENAP'
//     }else{
//         return 'Ini adalah GANJIL'
//     }
// }
// console.log (ganjilGenap(7))

// let mobil = ['Alya','Xenia','Avanza'];

// let w = mobil.length; 
// let x = mobil.sort(); 
// let y = mobil.reverse();
// let z = mobil.indexOf('Alya','Xenia');

// console.log(w)
// //console.log(x)
// console.log(y)
// console.log(z)

// let buah = ['Jeruk','Nanas','Apel'];
// buah.splice(2, 0, 'Lemon', 'Kiwi');
// console.log(buah)

// buah.splice(0, 1);
// console.log(buah)

// delete buah[0];
// console.log(buah)


// let buah = ['Banana', 'Orange','Lemon', 'Apple', 'Mango'];

// let buah2 = buah.slice(1);
// console.log(buah2)

// let buah4 = buah.slice(1,4);
// console.log(buah4)


// let buah = ['Jeruk','Nanas','Apel'];

// buah.push('Duku');
// console.log(buah)
// buah[buah.length] = 'Pisang';
// console.log(buah)
// buah[6] = 'Mangga';
// console.log(buah)

// var x = [40, 100, 1, 5, 25, 10]
// ascending = x.sort(function(a,b){return a-b})
// console.log(ascending)

// var x = [40, 100, 1, 5, 25, 10]
// descending = x.sort(function(a,b){return b-a})
// console.log(descending)


// var x = [40, 100, 1, 5, 25, 10]
// tertinggi = Math.max(...x)
// console.log(tertinggi)

// terendah = Math.min(...x)
// console.log(terendah)

// var x = [40, 100, 1, 5, 25, 10]
// x.sort(function(a,b){return a-b})
// console.log('ini adalah nilai terendah ' + x[0])
// console.log('ini adalah nilai tertinngi ' + x[x.length-1])


// 
// var arrayKu = [
// 	['Andi',24,'PNS'],
// 	['Budi',28,'Pengacara'],
// 	['Caca',21,'Siswa'],
// ]

// arrayKu[0].sort()
// arrayKu[1].reverse()

// console.log(arrayKu[0])
// console.log(arrayKu[1])

// console.log('splitString')


// function angkaTerbesar(num1,num2,num3){
//     if (num1 > num2 && num1 > num3 ){
//         return num1
//     }else if(num2 > num1 && num2 > num3){
//         return num2
//     }else if(num3 > num1 && num3 > num2){
//         return num3
//     }
    
// }
// console.log (angkaTerbesar(10,30,50))



// function platNo(plat,tanggal){

//     if (((plat.charAt(5) % 2 == 0) && (tanggal % 2 == 0)) || 
//     ((plat.charAt(5) % 2 !== 0) && (tanggal % 2 !== 0))){
//         return 'Boleh Lewat'
//     }else{
//         return 'Ga Boleh Lewat'
//     }
// }

// console.log (platNo('D 1233 DN', 21))

// function hapusAwalAkhir(kata){
//     // for (var i = 0 ; i <kata.length ; i++)
//     return kata.slice(1,kata.length -1)
// }

// function tinggalAwalAkhir(kata){
//     var huruf_awal = kata.charAt(0) 
//     var huruf_akhir = kata.charAt(kata.length -1)
//     return huruf_awal + huruf_akhir
// }

// console.log(hapusAwalAkhir('fikri'))
// console.log(hapusAwalAkhir('purwadika'))
// console.log(tinggalAwalAkhir('sapi'))


// function kalkulator(angka1,angka2,opr){

//     hasill = 0
//     if (opr == '+' ){
//         hasil = angka1 + angka2
//     }else if(opr == '-'){
//         hasil = angka1 - angka2
//     }else if(opr == '*'){
//         hasil = angka1 - angka2
//     }else if(opr == '/'){
//         hasil = angka1 / angka2
//     }else if(opr == '%'){
//         hasil = angka1 % angka2
//     } 
//     return hasil
// }

// console.log (kalkulator(2,3,'-'))



// function squareEveryDigit(angka){
    
//     var hasil = ''
//     var param = String(angka)
//     // console.log (param[3])
//     for(var i = 0 ; i< param.length ; i++){
//         hasil += param[i] * param[i]
//         //console.log(hasil)
//     }
//     return hasil
// }

// console.log(squareEveryDigit(8891))

const removeVocal = (str) =>{
    var new_kata = ''
    for(var i = 0 ; i < str.length ; i++){
        if(str.toLowerCase()[i] == 'a' ||str.toLowerCase()[i] == 'i' ||str.toLowerCase()[i] == 'u' ||str.toLowerCase()[i] == 'e' ||str.toLowerCase()[i] == 'o')
        {
             
        }else{
            new_kata += str[i]
        }
    }
    return new_kata
    
}
console.log(removeVocal('fikri'))
