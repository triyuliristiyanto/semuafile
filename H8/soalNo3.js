function splitAngka(angka1,angka2){
   
   
    angka1 = String(angka1)
    angka2 = String(angka2)

    if(angka1.length !== angka2.length){
        return 'kedua parameter harus mempunyai digit yang sama'
    }
    var hasil = '' 
    for (var i = 0 ; i < angka1.length ; i++ ){
        hasil += angka1[i] + angka2[i]  
    }
    return hasil
}
console.log(splitAngka(34,98)); //39 48
 


// 1.bikin dulu fungsi dengna nama splitAngka masukan parameter dengan nama angka1 dan angka2
// 2.convert atau ubah dari angka menjadi string dulu biiar bisa dibaca di dalam Array
// 3.siapkan nama yang akan di isi dengan isi dari fungsi for nanti dengan string kosong
// 4.deklarasikan ditambah dengan variabel dengan nama hasil
// 5.var i adalah i lebih 


function splitAngka2(num1,num2){
 
    num1 = String(num1)
    num2 = String(num2)
    
    if(num1.length !== num2.length){
        return 'kedua parameter harus mempunyai digit yang sama'
    }
    var hasil = ''    
    for(var i = 0 ; i < num1.length ;i++){
        hasil += num1[i] + num2[i] 
    }
    return hasil
}
console.log(splitAngka2(34,98))



// 1.i = 0 -> 0 < 2 true masukan/dicetak ke hasil num1 index ke 0 = 3 + num2 index ke 0 = 9 dapet 39 i++ asalnya 0 berubah 1
// 2.i = 1 -> 1 < 2 true masukan/dicetak ke hasil num1 index ke 1 = 4 + num2 index ke 1 = 8 dapet 48 i++ asalnya 1 berubah 2 
// 3.i = 2 -> 2 < 2 false disini berhenti untuk looping selesai