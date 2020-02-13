function summation(num){    
    var hasil = 0;
    for (var i = 1 ; i <= num ; i++){
    hasil += i           
    }return hasil
}
console.log (summation(5))
console.log (summation(4))
console.log (summation(3))
console.log (summation(2))



// function doubleInteger(i) {
//     // i will be an integer. Double it and return it.
//     var hasil = 0;
//     for (var j = 0 ; j < i ; i++){
//         hasil += (i * i)
//     }
//     return i;
//   }

//   console.log (doubleInteger(2))


// DARI DOSEN

// i = 1 cek 1 lebihkecil atau sama dengan angka (3) true kemudian masuk ke pengkondisian yang else karena belum i(1) == angka(3) masuke variabel hasil 1 + kemudian i++ i asalnya 1 jadi 2 
// i = 2 cek 2 lebihkecil atau sama dengan angka (3) true kemudian masuk ke pengkondisian yang else karena belum i(2) == angka(3) masukke variabel hasil 1 + 2 + kemudian i++ i asalnya 2 jadi 3 
// i = 3 cek 3 lebihkecil atau sama dengan angka (3) true kemudian masuk ke pengkondissian if karena sudah masuk i(3) == angka (3) masuk ke variable hasil 1 + 2 + 3 = kemudian i++ i asalnya 3 jadi 4
// i = 4 cek 3 lebihkecil atau sama dengan angka 3 false berees cetak total adalah 1+2+3 = 6
const summation = (angka=0) => { // 1 + 2 + 3 = 6 
        var hasil = ''
        var total = 0
        for(var i = 1 ; i <= angka ; i++){
            if(i == angka){
                hasil += i
                hasil += ' = '
                total += i
                // Pake =
            }else{
                hasil += i
                hasil += ' + '
                total += i
                // Pake +
            }
            
        }
        
        return hasil + total
    
    }
    
    console.log(summation(3))
    console.log(summation(4))
    