// friend(["Ryan", "Kiera", "Mark"]) // ["Kiera"]
// friend(["Fikri","Seto","Putri"]) // ['Fikri','Putri']
// friend(["afgan","tri","muslim"]) // ['afgan']



// findMaxAndMin([1,2,34,12,5,10]) // min = 1 , max = 34 Math.min // Sort



// ganjilGenap([2,3,1,3,4]) // ganjil = 3,1,3 genap = 2,4



// soal No 1

const nama = (arr = []) => {
    
    let nama_baru = []

    for (i = 0 ; i < arr.length ; i++){
        if (arr[i].length == 5){
            nama_baru.push(arr[i])
        }
    }

    return nama_baru
}


console.log (nama(["ryan","kiera","Mark"]))
console.log (nama(["sapi","kemban","aqilS"]))
console.log (nama(["fikri","andis","kari"]))

// soal No 2

const findMaxAndMin = (angka = []) => {
    
    angka.sort(function(a,b){return a-b})
    

    console.log (angka[0])
    console.log (angka[angka.length-1])  
} 

findMaxAndMin([1,2,34,12,5,10])
 
// soal No 3

const ganjilGenap = (angka2 = []) => {
    
    hasilGanjil = []
    hasilGenap = []

    for (var i = 0 ; i < angka2.length ; i++){    
        if (angka2[i] % 2 == 0){
            hasilGenap.push(angka2[i]) 
        }else{
            hasilGanjil.push(angka2[i] ) 
        }
    }
    return 'ganjil = ' + hasilGanjil + '\ngenap= ' +hasilGenap
    }

console.log (ganjilGenap([2,3,1,3,4]))