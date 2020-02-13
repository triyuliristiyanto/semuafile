// var angka = [71, 70, 73, 70, 70, 69, 70, 72, 71, 300, 71, 69]

// console.log ('Ini Adalah data Asli' + " " +angka)

// angka_sort = angka.sort(function (a,b) {return a - b})
// var tghAngkaAwal = angka.slice(0,5)
// var tghAngkaAkhir = angka.slice(6,12)
// var Q1 = (tghAngkaAwal[3] + tghAngkaAwal[4]) / 2
// var Q2 = (tghAngkaAkhir[8] + tghAngkaAkhir[9]) / 2


// console.log ('Ini Adalah Angka Yang sudah di Sort'  + " " + angka_sort )
// console.log ('Ini Adalah setengah angka Awal' + " " + tghAngkaAwal)
// console.log ('Ini Adalah Setengah Angka Akhir' + " " +tghAngkaAkhir)
// console.log ('Ini Adalah Q1' + " " +Q1)
// console.log ('Ini Adalah Q2' + " " +Q2)



// // 



// function IQR (num){
    
//     var angkaSort = num
//     for(var i = 0 ; i < num.length ; i++) {
//         i =+ angkaSort.sort(function(a,b) {return a - b})
//     }

//     return angkaSort
// }

// function SpliceAwal(angkaSort){
  
//     ganjilGenap = angkaSort.length % 2;
//     if (ganjilGenap == 0){
//         q1 = angkaSort.slice(0,angkaSort.length/2)
//         console.log('Setengeh Data Pertama Adalah ' + q1)
//         q3 = angkaSort.slice(angkaSort.length/2,angkaSort.length)
//         console.log('Setengah Data Terakhir Adalah ' + q3)
//     }else{
//         q1 = angkaSort.slice(0,angkaSort.length/2)
//         console.log('Q1 Ganjil ' + q1)
//         q3 = angkaSort.slice(angkaSort.length/2+1,angkaSort.length)
//         console.log('Q3 Ganjil ' + q3)
//     } 
// }

// console.log (IQR([71, 70, 73, 70, 70, 69, 70, 72, 71, 300, 71, 69]))
// console.log (SpliceAwal([69,69,70,70,70,70,71,71,71,72,73,300]))
// console.log (SpliceAwal([69,69,70,70,70,40,71,71,71,72,73]))


// - DARI MENTOR -

// [3,2,4,3,2,8,9,2]


const findMedian = (data=[]) => {           // <---- ini fungsi di return biar bisa dipanggil lagi dibawahnya kalo ga direturn ini baklan undifined 
    if(data.length % 2 == 0){
        return (data[data.length/2 - 1] + data[data.length/2]) / 2
    }else{
       return data[Math.floor(data.length/2)]
    }
}


const removeOutlier = (data=[]) => {
    let dataSorted = [...data].sort(function(a,b) {return a-b}) // <-- datanya supaya ga nge short data aslinya [...data]
    let middle = Math.floor(data.length/2)

    let setengahPertama = dataSorted.slice(0,middle)
    // let setengahKedua = data.length % 2 ==0 ? dataSorted.slice(middle,data.length) :dataSorted.slice(middle+1,data.length) 

    let setengahKedua;
    if(data.length % 2 == 0){
        setengahKedua = dataSorted.slice(middle,data.length)
    }else{
        setengahKedua = dataSorted.slice(middle+1 , data.length)
    }

    let q1 = findMedian(setengahPertama)
    let q3 = findMedian(setengahKedua)

    let iqr = q3 - q1

    let lower = q1 - (1.5 * iqr) // 67,
    let upper = q3 + (1.5 * iqr) // 73

    let dataNotOutlier = []
    let dataOutlier = []

    for(var i = 0 ; i< data.length ; i++){
        if(dataSorted[i] < lower || dataSorted[i] > upper){
            dataOutlier.push(dataSorted[i])
        }else{
            dataNotOutlier.push(dataSorted[i])
        }
    }

    console.log('data asli = ' + data)
    console.log('data setelah di sort = ' + dataSorted)
    console.log('setengah data pertama = ' + setengahPertama)
    console.log('setengah data kedua = ' + setengahKedua)
    console.log('Q1 = ' + q1)
    console.log('Q3 = ' + q3)
    console.log('Lower Limit ' + lower)
    console.log('Upper Limit ' + upper)
    console.log('Data Tidak Outlier ' + dataNotOutlier)
    console.log('Data yang Outlier ' + dataOutlier)
}


removeOutlier([60,63,64,62,69,80,1,60,63,64,60])