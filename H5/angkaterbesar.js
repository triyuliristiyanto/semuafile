var angka1 
var angka2
var angka3

function pilihan (angka1,angka2,angka3){
        
    if ( angka1 > angka2 && angka1 > angka3 ){
        return `angka ${angka1} Angka ke 1 yang terbesar`

    }else if (angka2 > angka1 && angka2 > angka2){
        return `angka ${angka2} angka ke 2 yang terbesar`

    }else {
        return ` angka ${angka3} angka ke 3 yang terbesar`
    }
         

} console.log (pilihan(10,20,30) )





