// for (var j = 0; j < 3 ; j++){

//     for (var k = 0 ; k <3 ; k++){

//         for (var l=0 ; l < 3 ; l++){
//             //console.log (l)
//             console.log ("CUCU")
//         }
//         //console.log(k)
//         console.log ('BAPA')
//     }
//     //console.log(j)
//     console.log('KAKEK')
// }

// var j = 0

// while (j < 3) {

//     var k = 0
//     while ( k < 3 ){
        

//             var l = 0
//             while ( l < 3){
           
//             console.log (' CUCU')
//             l++
//             }

//         console.log ( 'BAPA')
//         k++
//         }

//     console.log ('KAKEK')
//     j++
// }


// DO AND WHILE

// var j = 0  //INISIAL velue
// do {                                        //inisial value -> condition -> exit way   

//     var k = 0
//     do{

//         var l = 0
//         do{
//             console.log('cucu')
//             l++
//             }while (l < 3)
//         console.log('bapa')
//         k++
//         }while (k < 3)
//     console.log ('kakek')
//     j++ // exit way
//     }while ( j < 3) // condition



// BINTANG  
// *
// **
// ***

// bintang = '*\n **\n ***\n'
// i = 0 | 1 | 2 | 3
// j = 0 | 1 | 0 | 1 | 2 | 0 | 1 | 2| 3

// var bintang = ''
// var i = 0
// do {
//     var j = 0
//     do {
//         bintang += '*'
//         j++
//     }while(j <= i)

//     i++
//     if(i !== 3){
//         bintang += '\n'
//     }
// }while( i < 3 )

// console.log(bintang)


// var bintang = ''
// for(var i = 0 ; i <5 ; i++){
//     for(var j = 0 ; j < 5-i ; j++){
//         bintang += '*'
//     }
//     bintang +='\n'
// }
// console.log(bintang)


// var bintang = ''
// for (var i = 5 ; i > 0 ; i--){
//     for (var j =0 ; j < i ; j++) {
//         bintang += '*'
//     }
//     bintang += '\n'
// }
// console.log(bintang)

var bintang = ''
for (var i = 5 ; i > 0 ; i --){
    bintang += '*'.repeat(i) + '\n'
}
console.log(bintang)
