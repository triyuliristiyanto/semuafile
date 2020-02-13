// //  OBJEK LITERAL



// var orang = {
//     namaDpn : "Jamaludin",
//     namaBelakang : "Fikri",
//     PrintfullName : function() {
//     return this.namaDpn + ' ' + this.namaBelakang
//     }
// }


// console.log(orang.PrintfullName() + 'Fikri')
// console.log(orang)


// // OBJEK NEW KEYWORD


// var orang_1 = new Object()
// orang_1.namaDpn = 'Jamaludin'
// orang_1.namaBelakang = 'Fikri'
// orang_1.PrintfullName = function(){
//     return orang_1.namaDpn + " " + orang_1.namaBelakang
// }

// console.log orang_1.PrintfullName()


class Manusia{
    constructor(a, b,c){
        this.nama = a
        this.pekerjaan = b
        this.gender = c
    }
}


var manusia_1 = new Manusia('Fikri','Karyawan','Lelaki')
var manusia_2 = new Manusia('Muslim','Karyawan','Lelaki')
var manusia_3 = new Manusia('Budi','Karyawan','Lelaki')

console.log(manusia_1)
console.log(manusia_2)
console.log(manusia_3)




