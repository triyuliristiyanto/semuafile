var jumlah = 4
var harga = 20000
var diskon = 20


function totHarga(jumlah,harga,diskon){
    return jumlah * harga * (1 - diskon / 100)
}

console.log(totHarga(jumlah, harga, diskon))

