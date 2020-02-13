let angka1 
let angka2 


function  pilih (angka1,angka2, operator ){

    if (operator == '+' ) {
        total = Number(angka1) + Number(angka2)
        console.log ('Hasil = ' + total)
    }
    else if (operator == '-') {
        total = Number(angka1) - Number(angka2)
        console.log ('Hasil = ' + total)
    }
    else if (operator == '*') {
        total = Number(angka1) * Number(angka2)
        console.log ('Hasil = ' + total)
    }
    else if (operator == '/') {
        total = Number(angka1) / Number(angka2)
        console.log ('Hasil = ' + total)
    }
    else if (operator == 'mod') {
        total = Number(angka1) % Number(angka2)
        console.log ('Hasil = ' + total)
    }else {
        return pilih
    }
       

}console.log (pilih(10,3,'*'))
