// var hari = 760

// let tahun = Math.floor (hari / 365)
// let sisa_tahun = hari % 365
// let bulan = Math.floor (sisa_tahun / 30)
// let sisa_bulan = sisa_tahun % 30


// console.log(tahun + ' tahun, ' + bulan + ' bulan, ' + sisa_bulan + 'hari')


// 1 menit = 60 Detik
// 1 jam   = 3600 detik
// 1 hari  = 86400 detik
// 1 bulan = 2592000 detik
// 1 tahun = 31536000 detik

// function timeConvert(n) {

//     var num = n;
//     var hours = (num / 60);
//     var rhours = Math.floor(hours);
//     var minutes = (hours - rhours) * 60;
//     var rminutes = Math.round(minutes);
//     return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
//     }
    
// console.log (timeConvert(200));


// UJIAN DATA SCIENCE FUNDAMENTAL

// formatDuration(62) // 1 Minute and 2 Seconds

// formatDuration(31536000)// 1 Year 
// formatDuration(31536062)// 1 Year , 1 Minute and 2 Seconds 
// 86400 //

 

const formatDuration = (input=0) => { // 31536062
    var tahun = Math.floor(input / (365 * 24 * 3600)) // 1
    var sisa_tahun = input % 31536000 // 62
    var hari = Math.floor(sisa_tahun / (24*3600)) // 0
    var sisa_hari = sisa_tahun % (24 * 3600) // 62 % 86400 = 62
    var jam = Math.floor(sisa_hari / 3600) // 0
    var sisa_jam = sisa_hari % 3600 // 62
    var menit = Math.floor(sisa_jam / 60) // 1
    var detik = sisa_jam % 60 // 2

    var text = ''
    text += input + ' = '

    // TAHUN
    if(tahun > 0){
        text += tahun + ' year'
        if(tahun > 1){
            text += "s"
        }
        text += ' , '
    }

    // HARI
    if(hari > 0){
        text += hari + ' day'
        if(hari > 1){
            text += "s"
        }
        text += ' , '
    }

    // JAM
    if(jam > 0){
        text += jam + ' hour'
        if(jam > 1){
            text += "s"
        }
        text += ' , '
    }

    // MENIT
    if(menit > 0){
        text += menit + ' minute'
        if(menit > 1){
            text += "s"
        }
        text += ' , '
    }

    // DETIK
    if(detik > 0){
        text += detik + ' second'
        if(detik > 1){
            text += "s"
        }
        text += ' , '
    }

    var arrText = text.split(' , ') 
    // [ '31536062 = 1 year', '1 minute', '2 second\'s', '' ]
    arrText.pop(arrText.length-1)

    var new_text = ''
    for(var i = 0 ; i < arrText.length ; i++){
        new_text += arrText[i]
        if(i == arrText.length-2){
            new_text += ' and '
        }else if(i !== arrText.length-1){
            new_text += ' , '
        }
    }

    console.log(new_text)
}


formatDuration(123456789)// =  3 years, 333 Days, 21 hours, 33 minuts and 9 seconds
