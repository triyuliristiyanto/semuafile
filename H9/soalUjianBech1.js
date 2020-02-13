// No.1

function satukanArray(angka=[],huruf=[]){
    
    if ( angka.length !== huruf.length){
        return 'jumlah angka dan huruf anda tidak sama'
    }
    
    var hasil = []
    for ( i = 0 ; i < angka.length ; i++ ){
        hasil.push(angka[i])
        hasil.push(huruf[i])   
    }return hasil

}

console.log (satukanArray([1,2,3,4,5],['a','b','c','d','e']))
console.log (satukanArray([1,2,3,4],['a','b','c','d']))

// 1. i = 0 cek i(0) < angka.length (5) bernilai true langsung push pada angka index[0] dapat 1 juga menambahkan push pada huruf[0] dapat a jadi [1,'a'] setelah selesai push i awalnya 0 di ++ skrng i = 1 
// 2. i = 1 cek i(1) < angka.length (5) bernilai true langsung push pada angka index[1] dapat 2 juga nenambahkan push pada huruf[1] dapat b jadi [1,'a',2,'b'] setelah selesai push i awalnya 1 di ++ skrng i = 2
// 3. i = 2 cek i(2) < angka.length (5) bernilai true langsung push pada angka index[2] dapat 3 juga nenambahkan push pada huruf[2] dapat c jadi [1,'a',2,'b',3,'c'] setelah selesai push i awalnya 2 di ++ skrng i = 3
// 4. i = 3 cek i(3) < angka.length (5) bernilai true langsung push pada angka index[3] dapat 4 juga nenambahkan push pada huruf[3] dapat d jadi [1,'a',2,'b',3,'c',4,'d'] setelah selesai push i awalnya 3 di ++ skrng i = 4
// 5. i = 4 cek i(4) < angka.length (5) bernilai true langsung push pada angka index[4] dapat 5 juga nenambahkan push pada huruf[4] dapat e jadi [1,'a',2,'b',3,'c',4,'d',5,'e'] setelah selesai push i awalnya 4 di ++ skrng i = 5
// 6. i = 5 cek i(5) < angka.length (5) bernilai false selessai looping kemudian keluar dr loopning menuju return