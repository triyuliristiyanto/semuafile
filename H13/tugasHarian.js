// //SOAL NO.1

// const filterData = (arr= [],str = '') => {
    
//     var hasil = []

//     for (var i = 0; i < arr.length ;i++){  // untuk meng
//         for (var j = 0 ; j < arr[i].length; j++){
//             if (arr[i][j] == str){
//                 hasil.push(arr[i])
//             }
//         }
//     }
//     console.log (hasil)
// }

// filterData(['fikri','fendi','budi','andi'] , 'f')
// filterData(['fikri','fendi','budi','andi'] , 'i')

// //SOAL NO.2

// function countPairs(arr) {
//     var t = {}; 
//     arr.forEach (i => t[i] = (t[i] || 0) + 1);
//     return Object.values(t).reduce((acc, p) => acc + Math.floor(p/2), 0);
//   }
  
//   console.log(countPairs(['red','red','green','blue','green']))
//   console.log(countPairs(['red','red','red','red','green']))
//   console.log(countPairs(['red','red','yellow','blue','green']))
  

// //SOAL NO.3

// const numify = (angka = []) =>{

//     var hasilGenap = []
//     var hasilGanjil = []

//     for (var i = 0 ; i < angka.length ; i++){
//         if (angka[i] % 2 == 0){
//             hasilGenap.push(angka[i])
//         }else {
//             hasilGanjil.push(angka[i])
//         }
//     }  
//     console.log ('Angka Genap = ' + hasilGenap) +'\n'
//     console.log ('Angka ganjil = ' + hasilGanjil) 

//     var angkaGenapMax = Math.max(...hasilGenap) // 4
//     var angkaGanjilMax = Math.max(...hasilGanjil) //1

//     console.log('max angka genap = ' + angkaGenapMax ) 
//     console.log('max angka ganjil = ' + angkaGanjilMax )

//     var avg = hasilGenap.reduce(function (a,b){return a+b})/hasilGenap.length 
//     var totalGanjil = hasilGanjil.reduce(function(a,b){return a+b})
    
//     console.log ('avg. angka genap = ' + avg )
//     console.log ('sum angka ganjil = '+ totalGanjil )

// }


// numify([2,3,1,2,3,4,5,4]) 




/// DARI DOSEN
// SOAL

// filterData(['fikri','fendi','budi','andi'] , 'f')  // ['fikri','fendi']
// filterData(['fikri','fendi','budi','andi'] , 'i')  // ['fikri','fendi','budi','andi']

// countPairs(['red','red','green','blue','green']) // 2 pairs
// countPairs(['red','red','red','red','green']) // 2 pairs
// countPairs(['red','red','yello','blue','green']) // 1 pairs

// numify([2,3,1,2,3,4,5,4])
// angka genap = 2,2,4,4
// angka ganjil = 3,1,3,5

// max angka genap = 4
// max angka ganjil = 5

// avg. angka genap = 3
// sum angka ganjil = 12




 // filterData(['fikri','fendi','budi','andi'] , 'f')  // ['fikri','fendi']
// filterData(['fikri','fendi','budi','andi'] , 'i')  // ['fikri','fendi','budi','andi']

// countPairs(['red','red','green','blue','green']) // 2 pairs
// countPairs(['red','red','red','red','green']) // 2 pairs
// countPairs(['red','red','yello','blue','green']) // 1 pairs

// numify([2,3,1,2,3,4,5,4])
// angka genap = 2,2,4,4
// angka ganjil = 3,1,3,5

// max angka genap = 4
// max angka ganjil = 5

// avg. angka genap = 3
// sum angka ganjil = 12



const filterData = (data=[], str ='') => {

    var dataFiltered = []

    for(var i = 0 ; i < data.length ; i ++){
        if(data[i].includes(str) == true){
            dataFiltered.push(data[i])
        }
    }

    return dataFiltered

    // if( data[0].includes(str) == true ){
    //     dataFiltered.push(data[0])
    // }

    // if( data[1].includes(str) == true ){
    //     dataFiltered.push(data[1])
    // }

    // if( data[2].includes(str) == true ){
    //     dataFiltered.push(data[2])
    // }


}


console.log(filterData(['fikri','fendi','budi','andi'] , 'f') ) 




const countPairs = (colors=[]) => {
    var item = [] // ['red','green','blue']
    var countItem = [] // [2,2,4]

    for(var i = 0 ; i< colors.length ; i++){
        if(item.includes(colors[i])){
            var indexItem = item.indexOf(colors[i])
            countItem[indexItem] ++
        }else{
            item.push(colors[i])
            countItem.push(1)
        }
    }

    let pairs= 0 // 1 // 2 // 4
    for(var i = 0 ; i < countItem.length ; i ++){
        var numOfPairs = Math.floor(countItem[i] / 2)
        pairs += numOfPairs 
    }

    'Number of Pairs = ' + pairs

    console.log(item)
    console.log(countItem)
}

countPairs(['red','red','green','blue','green']) // 2 pairs


const numify = (numbers = []) => {
    let ganjil = []
    let genap = []
    let sumGanjil = 0 // 2
    let sumGenap = 0 // 3 // 4

    for(var i = 0 ; i< numbers.length ; i++){
        if(numbers[i] % 2 == 0){
            genap.push(numbers[i])
            sumGenap += numbers[i]
        }else{
            ganjil.push(numbers[i])
            sumGanjil += numbers[i]
        }
    }

    return `
    Angka Genap = ${genap}
    Angka Ganjil = ${ganjil}
    
    Max Angka Genap = ${Math.max(...genap)}
    Max Angka Ganjil = ${Math.max(...ganjil)}
    Avg. Angka Genap = ${sumGenap / genap.length}
    Sum Angka Ganjil = ${sumGanjil}
    `

}


console.log( numify([2,3,1,2,3,4,5,4]) )


// angka genap = 2,2,4,4
// angka ganjil = 3,1,3,5

// max angka genap = 4
// max angka ganjil = 5

// avg. angka genap = 3
// sum angka ganjil = 12 