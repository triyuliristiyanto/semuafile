function count(str){    
    var newDigit = 0
    var newkata = 0  
    //var a = '0'  
    for(var i = 0; i < str.length; i ++){
        if( str[i] >=0 ){
            newDigit ++
        }else{
            newkata ++
        }
    }
  console.log ('Jumlah huruf ada ' + newDigit)
  console.log ('jumlah angka ada ' + newkata)
} 
count('fikri123')





const noZero = (num = 0) =>{
    var newNomer = String(num)
    // console.log(newNomer)
    var newDigit = []

    for (var i = 0 ; i < newNomer.length ; i++){  
        if(newNomer[i] == 0){
            
        }else{
            newDigit.push(newNomer[i])
        }

    }
    newDigit = newDigit.join('')
    return newDigit
    
}

console.log(noZero(1324000)) 


const MSE = (para1=[],para2=[]) =>{

    let newAray = []
    let cariMean = 0

    for(var i = 0; i < para1.length ; i ++){
        var selisih = para2[i] - para1[i]
        newAray.push(selisih)
    }
    for(var i = 0 ; i < newAray.length ; i++){
        cariMean += newAray[i]
    }

    var newMean = cariMean / newAray.length
    var pangkat = newMean * newMean
    
    console.log (newMean)
    console.log (pangkat)
}

MSE ([1,2,3],[4,5,6])


const sentence = (str = '') =>{
    let newstr = str.split(' ')
    //console.log (newstr)
    let newarr = []
    let gabung = []

    for (var i = 0 ; i <newstr.length ; i++){
        newarr.push(newstr[i].length)
        gabung.push(newarr[i]+newstr[i])
        console.log(gabung)
    }
        var newSort = gabung.sort()
        console.log(newSort)
        var lessAngka = []
        for(var i = 0 ; i < newSort.length ; i++){
            lessAngka.push(newSort[i].slice(1,newSort[i].length))
        }
        var newStr = lessAngka.join(' ')
        console.log(newStr)
}       

sentence('budi pergi ke pasar')



