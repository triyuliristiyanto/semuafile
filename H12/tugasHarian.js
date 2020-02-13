// // TUGAS NOMER 1

// const sumTwosmallest =(angka = []) =>{
    
//     let penjumlahan = []

//     angka.sort(function (a,b) {return a - b})
//     // console.log (angka)
//     penjumlahan = angka[0] + angka[1]
//     console.log (penjumlahan)

// }

// sumTwosmallest ([3,4,2,4,2,4,2,3,4])
// sumTwosmallest ([3,2,1])

// // TUGAS NOMER 2

// const removeDuplicates = (arr='') => {
    
//     let new_arr = arr.split(' ') 
//     // console.log (new_arr)

//     let sortir = [...new Set(new_arr)];
//     console.log (sortir);

// }

// removeDuplicates('alpha beta gamma gamma')
// removeDuplicates('mari mari kesini')
// removeDuplicates('kamu kamu aku')
// removeDuplicates('kamu kamu aku aku sayang')

// // // TUGAS NOMER 3

// const theMost = (alfabeth ='') => {
//     var arrHuruf = []
//     var arrJumlahAlfa = []
//     var arrAlfabeth = alfabeth.split('') 

//     for (var i = 0 ; i < arrAlfabeth.length; i++){
//         if (arrHuruf.includes(arrAlfabeth[i].toLowerCase())){
//             var index_ke = arrHuruf.indexOf (arrAlfabeth[i].toLowerCase())
//             arrJumlahAlfa[index_ke] ++
//         }else{
//             arrHuruf.push(arrAlfabeth[i].toLowerCase())
//             arrJumlahAlfa.push(1)
//         }     
//     } 

//     var hasil = Math.max(...arrJumlahAlfa)
//     var hurufTerbanyak= arrHuruf[arrJumlahAlfa.indexOf(hasil)]
//     return `Huruf Terbanyak Adalah : ${hurufTerbanyak}`

// } 
// console.log (theMost('xlpphaaa'))
// console.log (theMost('fikriiii'))


// // TUGAS NO.4


// const findUniq = (alfabeth = []) => {
//     var arrHuruf = []
//     var arrJumlahAlfa = []
//     var arrAlfabeth = alfabeth
    

//     for (var i = 0 ; i < arrAlfabeth.length; i++){
//         if(arrHuruf.includes(arrAlfabeth[i])){
//             var index_ke = arrHuruf.indexOf (arrAlfabeth[i])
//             arrJumlahAlfa[index_ke] ++
//         }else{
//             arrHuruf.push(arrAlfabeth[i])
//             arrJumlahAlfa.push(1)
//         }     
//     } 

//     var hasil = Math.min(...arrJumlahAlfa)
//     var hurufTerbanyak= arrHuruf[arrJumlahAlfa.indexOf(hasil)]
//     return `angka Terunik Adalah : ${hurufTerbanyak}`

// } 
    
// console.log(findUniq([1,1,1,1,7,1,1]))
// console.log(findUniq([2,1,2,3,3,4,4]))




// ganjilGenap([1,4,3,2]) 
// ganjilGenap([1,4,3,2])


// SOAL
// sumTwoSmallest([3,4,2,4,2,3,4]) // 2 + 2 = 4
// sumTwoSmallest([3,2,1]) // 1 + 2 = 3

// removeDuplicates('alpha beta beta gamma gamma') // 'alpha beta gamma'
// removeDuplicates('mari mari kesini') // 'mari kesini'

// theMost('xlpphaaaa') // huruf paling banyak adalah 'a'
// theMost('fikriiii') // huruf paling banyak adalah 'i'

// findUniq([1,1,1,1,3,1,1]) // 3
// findUniq([2,1,2,3,3,4,4]) // 1



















// console.log(sumTwoSmallest([5,4,2,3,4,2]))


const removeDuplicates = (str='') => {

    var arr = str.split(' ')
    var hasil = []
    for(var i = 0 ; i< arr.length ; i++){
        if(!(hasil.includes(arr[i]))){
            hasil.push(arr[i])
        }
    }

    return hasil.join(' ')

    // var arr = str.split(' ')
    // var set = new Set(arr)
    // var arr_set = Array.from(set)
    // return arr_set.join(' ')
}

console.log(removeDuplicates('alpha beta beta gamma alpha'))


const theMost = (str='') => {


    var huruf = [] //[f,a] 
    var jumlah_huruf = [] //[2,4] 

    // Count Huruf
    for(var i = 0 ; i < str.length ; i ++){
        if(huruf.includes(str[i])){
            var index_huruf = huruf.indexOf(str[i])
            jumlah_huruf[index_huruf] ++
        }else{
            huruf.push(str[i])
            jumlah_huruf.push(1)
        }
    }
    // Find The Most
    var jumlah_terbanyak = Math.max(...jumlah_huruf) // 4
    var index_terbanyak = jumlah_huruf.indexOf(jumlah_terbanyak) //1

    console.log('Huruf Paling Banyak Adalah = ' + huruf[index_terbanyak] + ' dengan jumlah = ' + jumlah_terbanyak)


    // if(huruf.includes(str[0])){
    //     var index_huruf = str[0].indexOf(huruf)
    //     jumlah_huruf[index_huruf] ++
    // }else{
    //     huruf.push(str[0])
    //     jumlah_huruf.push(1)
    // }

    // if(huruf.includes(str[1])){
    //     var index_huruf = str[1].indexOf(huruf)
    //     jumlah_huruf[index_huruf] ++
    // }else{
    //     huruf.push(str[1])
    //     jumlah_huruf.push(1)
    // }

    // if(huruf.includes(str[2])){
    //     var index_huruf = huruf.indexOf('i') // 1
    //     jumlah_huruf[1] ++
    // }else{
    //     huruf.push(str[2])
    //     jumlah_huruf.push(1)
    // }

    // if(huruf.includes(str[3])){
    //     var index_huruf = huruf.indexOf(str[3]) // 1
    //     jumlah_huruf[index_huruf] ++
    // }else{
    //     huruf.push(str[3])
    //     jumlah_huruf.push(1)
    // }


}

theMost('faafaa') // i



// var arr =['fikri','andi']

// arr.indexOf('andi') // 1
// console.log(arr.includes('andi')) // false





// var input = 'fafafafafaf'

// var arr_huruf = ['f','a']
// var arr_jumlah_huruf = [6,6]


// var obj = {
//     f : 6,
//     a : 6
// }

// var arr = [['f',6],['a',6]]



// FIND UNIQ

const findUniq = (arr=[]) => {
    var angka = [] // [1,2,3]
    var jumlah_angka = [] // [3,2,1]

    for(var i = 0 ; i<arr.length ; i++){
        if(angka.includes(arr[i])){
            var index_angka = angka.indexOf(arr[i])
            jumlah_angka[index_angka] ++
        }else{
            angka.push(arr[i])
            jumlah_angka.push(1)
        }
    }

    for(var i= 0 ; i<jumlah_angka.length ; i++){
        if(jumlah_angka[i] == 1){
            return 'Angka Yang Unik Adalah ' + angka[i]
        }
    }
    return 'Gak Ada Yang Unik'

    // console.log(angka)
    // console.log(jumlah_angka)

}

console.log(findUniq([1,1,1,2,2,3,3]))
