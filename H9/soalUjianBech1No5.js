
const sequenceSum = (start,stop,step) => {
    var hasil = 0
    for(var i = start; i<=stop ; i+= step){
        hasil += i
    }


    return hasil
} 

console.log(sequenceSum(2,2,2))
console.log(sequenceSum(1,5,1))


