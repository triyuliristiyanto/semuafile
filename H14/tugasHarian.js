// domainName("http://github.com/carbonfive/raygun") // "github" 
// domainName("http://www.zombie-bites.com") // "zombie-bites"
// domainName("https://www.cnet.com") // "cnet"


// moveZeros([false,1,0,1,2,0,1,3,"a"]) // [false,1,1,2,1,3,"a",0,0]
// moveZeros([1,3,4,2,4,0,1,2,0,3]) // [1,3,4,2,4,1,2,3,0,0]
// moveZeros(['budi',0,'fikri','andi']) // ['budi','fikri','andi',0]

// Decoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB") // 'WE ARE THE CHAMPIONS MY FRIEND'
// Decoder("WUBMYWUBNAMEWUBISWUBFIKRIWUB") // 'MY NAME IS FIKRI'



const domainName = (url) => {
    url = url.replace('http://' , '')
    url = url.replace('https://' , '')
    url = url.replace('www.','')
    url = url.replace('.com','')
    var arrUrl = url.split('/')
    console.log(arrUrl[0])
}


domainName('https://www.mentimeter.com/s/d8411580058e9d024b18d18d462e3ecb/e65234eaab09/edit')
domainName("http://github.com/carbonfive/raygun") // "github" 
domainName("http://www.zombie-bites.com") // "zombie-bites"
domainName("https://www.cnet.com") // "cnet"
domainName('https://www.google.com/search?safe=strict&sxsrf=ACYBGNScnJ8kC9ljHH3WL-lv3xZl2hFFmQ%3A1581044525128&source=hp&ei=LdM8Xu_uBcuQ4-EPv7iF2Ao&q=sesuatu&oq=sesuatu&gs_l=psy-ab.3..0i203l2j0l8.2384.4391..4786...2.0..0.77.552.8......0....1..gws-wiz.......35i39j0i131j0i10.zV7TNsguY10&ved=0ahUKEwivuavqub7nAhVLyDgGHT9cAasQ4dUDCAU&uact=5')



const moveZeros = (arr=[]) => {
    var sumZero = 0 // 1
    console.log(arr)
    for(var i = 0 ; i<arr.length ; i++){
        if( arr[i] === 0 ){
            sumZero ++
            arr.splice(i,1)
        }
    }

    for(var i = 0 ; i < sumZero ; i++){
        arr.push(0)
    }


}





moveZeros([false,1,0,1,2,0,1,3,"a"])






// var a = ['fikri']
// var b = ['Seto','Budi']

// b = b.concat(a)
// console.log(b)

// // ['Seto','Budi','Fikri']


// b.push(a)
// // ['Seto','Budi',['Fikri']]


// console.log(b)


const Decoder = (str='') => {
    var arrStr = str.split('WUB')

    for(var i = 0 ; i< arrStr.length ;i ++){
        if(arrStr[i] == ''){
            arrStr.splice(i,1)
        }
    }

    console.log(arrStr)
    var hasil = arrStr.join(' ')
    console.log(hasil)
}

Decoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB") // 'WE ARE THE CHAMPIONS MY FRIEND'

