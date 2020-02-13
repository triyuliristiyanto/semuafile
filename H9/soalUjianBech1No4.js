
function ideas(arr=[]){
    // tahu jumlah good ada berapa -oke
    // pengkondisian
    var good = 0 // 1 // 2
    for(var i = 0 ; i < arr.length ; i ++){
        if(arr[i] == 'good'){
            good ++
        }
    }
    //var hasil =''
    if(good == 0){
        return 'fail'
    }else if(good > 2){
        return 'i smell a series'
    }else{
        return 'publish'
    }
}

console.log(ideas(['good','bad','bad','good']))

// var i = 0 cek 0 < 4 true maka cek aray index[0] good bukan ternyata true maka good++ maka var good yang awalnya berisi 0 skrng nambah 1 increment ++ i awalnya 0 berubah 1
// var i = 1 cek 1 < 4 true maka cek aray index[1] good bukan ternyata false makalangsung ke ingkrement i awalnya 1 berubah 2
// var i = 2 cek 2 < 4 true maka cek aray index[2] good bukan ternyata false makalangsung ke ingkrement i awalnya 2 berubah 3
// var i = 3 cek 3 < 4 true maka cek aray index[3] good bukan ternyata true maka good++ makan var good yang sudah berisi 1 akan ditambahkan menjadi 2 incremwnt ++ i yang awalnya 3 ditambah jadi 4   
// var i = 4 cek 4 < 4 false maka untuk pengecekan jumlah good sudah selesai.akanmenghasilkan good ada 2 

// baru masuk ke pengkondisiain if else
