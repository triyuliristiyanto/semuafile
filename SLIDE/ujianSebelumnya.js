// No. 1 WEB AND PROGRAMING

const arrayMash = (arr = [],angka=[]) =>{
    if((arr.length !== angka.length)){
        return 'ANGKA DAN HURUF HARUS SAMA GAN'
    }
    //console.log(arr)
    //console.log(angka)
    var newArr = []
    for(var i = 0; i < arr.length ; i++){
        newArr.push(arr[i])
        newArr.push(angka[i]) 
    }
    return newArr
}


// console.log(arrayMash ([1,2,3],['a','b','c']))

// No.2
// 1jam = 3600
// 24jam = 86400 / 1 hari
// 1 tahun = 31536000
// var waktu = 62 

const formatDuration = (waktu=0) => {

    var tahun = Math.floor(waktu / (365 * 24 * 3600))
    console.log(tahun)
    var sisatahun = waktu % 31536000 
    var hari = Math.floor(sisatahun/ (24 * 3600))
    var sisahari = sisatahun % (24 * 3600)
    var jam = Math.floor(sisahari/3600 )
    var sisajam = sisahari % 3600
    var menit = Math.floor(sisajam/60)
    var detik = sisajam % 60
    
    // console.log (tahun + ' tahun ' + hari + ' hari  ' + jam + ' jam '+ menit + ' menit '+ detik + 'detik ' )

    var hasil = ''
    hasil += waktu + '='
    
    //TAHUN
    if (tahun > 0){
        hasil += tahun + ' year'
        if(tahun > 1){
            hasil += "s"
        }
        text += ' , '
    }

    //TAHUN
    if (hari > 0){
        hasil += hari + ' day'
        if(hari > 1){
            hasil += "s"
        }
        text += ' , '
    }

    if (jam > 0){
        hasil += jam + ' hour'
        if(jam > 1){
            hasil += "s"
        }
        text += ' , '
    }

    if (menit > 0){
        hasil += menit + ' minute'
        if(menit > 1){
            hasil += "s"
        }
        text += ' , '
    }

    if (detik > 0){
        hasil += detik + ' detik'
        if(detik > 1){
            hasil += "s"
        }
        text += ' , '
    }

}

formatDuration(123456789) 


// No.3
const summation = (num = 0) =>{
    
    var hasil = 0
    for (var i = 1 ; i <= num ; i++){
        hasil += i
    }
    return hasil
}

// console.log(summation(4))

// No.4 

const ideas = (arr = []) =>{

    var jumIdea = 0 /1 /3
    for (var i = 0;i < arr.length ; i++){
        // buat cek 'idea' dalam array
        if (arr[i] == 'good'){
            //jumIdea ++
            jumIdea += i
        }
        // arr.includes('good')
        console.log(jumIdea)
    }
    if (jumIdea > 2){
        //console.log ('i smell a sereies')
    }else if( jumIdea == 0){
        //console.log ('fail')
    }else{
        //console.log ('publish')
    }
} 

//ideas(['bad' ,'bad' ,'bad' , 'bad'])  // Fail!
//ideas(['bad' ,'good' ,'bad' ,'bad'])  //=> ‘Publish’
ideas(['bad' ,'good' ,'good' ,'bad']) // => ‘Publish’
//ideas(['bad' ,'good' ,'bad' ,'good' ,'good'])  //=> ‘I smell a series’


// No.5
// const sequenceSum {


// sequenceSum(2,2,2)