function balikanKalimat(kalimat){

    //var kalimat = []
    //var kalimat = ('makan hati')
    var arr = kalimat.split(' ')
    //var arr = kalimat2.split()
    hasil = (arr[1] + ' ' +arr[0])
    
    //console.log(hasil)
    return hasil
}

console.log(balikanKalimat('Makan Hati'))

// NOTED :
// 1.bikin fungsion namnya (balikankalimat) dengan isi parameter (kalimat)
// 2.bikin variabel array yang isinya atau == parameter dibuat menjadi index dengan pemisah spasi menjadi 2 index
// 3.bikin variabel hasil yang berisi dari isi array yang dirumuskan pembacaannya terbalik (ini baru di bilang belum menghasilkan sesuatu)
// 4.akhir dari hasil di return atau di hasilkan
// 5.panggil dengan consol log nama fungsinya  beserta dengan parameter yang akan di exsekusi


function reverseSentence(kalimat){

    var newKalimat = kalimat.split(' ')
    //['aku','murid','purwadika']
    var newReverse = newKalimat.reverse()
    //['purwadika','murid','aku']
    var newJoin = newReverse.join(' ')
    // 'purwadika murid aku'
    return newJoin
}

console.log (reverseSentence('aku murid purwadika'))