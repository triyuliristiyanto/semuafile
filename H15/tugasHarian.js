const creatPhoneNumber = (arr=[]) => {

var angka = arr.toString()
var split1 = angka.split(',')

var pisah1 = split1[0] + split1[1] + split1[2]
var pisah2 = split1[3] + split1[4] + split1[5] 
var pisah3 = split1[6] + split1[7] + split1[8] + split1[9] 
var gabungan = '(' + pisah1 + ')' + " " + pisah2 + "-" + pisah3

console.log(gabungan)

}

creatPhoneNumber([1,2,3,4,5,6,7,8,9,0])
creatPhoneNumber([4,2,4,2,1,2,3,5,7,9])


const likes = (arr=[]) => {

    var jumArr = (arr.length)
    // console.log(jumArr)

    if(jumArr ==  0){
        return ("no one like this")
    }else if(jumArr == 1){
        return (arr[0] + " like this")
    }else if(jumArr == 2){
        return (arr[0] + " And " + arr[1] + " like this ")
    }else if(jumArr == 3){
        return (arr[0] + arr[1] + " And " + arr[2] + " like this ")
    }else if(jumArr == 4){
        return (arr[0] +', ' +arr[1] + " And 2 Others like this ")
    } 
    //  console.log(jumArr)
}

console.log(likes([]))
console.log(likes(["Peter"]))
console.log(likes(["Jacob","Alex"]))
console.log(likes(["Max","John","Mark"]))
console.log(likes(["Alex","Jacob","Mark","Max"]))


// const sedikitKalimat = (arr) => {
//     let arrNew = arr.split(' ')
//     let arrPush = []
//     let arrSort = []
//     let hasil = []

//     for (var i = 0 ; i< arrNew.length ; i++){
//         arrPush.push(arrNew[i].length) 
       
//     }

//     arrSort = arrPush.sort(function(a,b){return a-b})
//     hasil = arrSort[0]

//     console.log(arrNew)
//     console.log(arrPush)
//     console.log(arrSort)
//     console.log(hasil)
// }
// sedikitKalimat('saya jalan jalan ke bandung')
// sedikitKalimat('sapi adalah sapi yang ada di sini')




// const kalimatDikit = (str) => {
//     let newStr = str.split(' ')
//     let arrPush = []
//     let arrSort = []

//     for(var i = 0; i < newStr.length; i++){
//         arrPush.push(newStr[i].length)
//     }

//     arrSort = arrPush.sort(function(a,b){return a-b})
//     var hasil = arrSort[0]

//     console.log(newStr)
//     console.log(arrPush)
//     console.log(arrSort)
//     console.log(hasil)
// }

// kalimatDikit('saya jalan jalan ke bandung')



const findShort = (str) => {
    let newStr = str.split(' ')
    let arr = []
    let sortArr = []
    

    for(var i = 0 ; i < newStr.length ; i++){
        arr.push(newStr[i].length)
    }
        sortArr = arr.sort(function(a,b){return a - b})
        var hasil = sortArr[0]
    // console.log(newStr)
    // console.log(arr)
    // console.log(sortArr)
    console.log(hasil)
}

findShort('jalan jalan ke bandung')
findShort('kita harus optimis dan yakin')
