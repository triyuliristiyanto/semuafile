// var baris = 1 || 2 || 3 || 4 || 5
// var spasi = 5 || 4 || 3 || 2 || 1
// var binta = 1 || 3 || 5 || 7 || 9 

function bikinSegitiga(baris){
    
    var bintang = 1
    var print = ''
    
    for (var i = 1 ; i <= baris ; i++){
        for (var j = 0 ; j <= baris-i ; j++){
            print += ' ' 
        }
    
        for (var k = 0 ; k < bintang ; k++){
            print += '*' 
        }
        
        print += '\n'
    
        bintang += 2
    }
    
    console.log(print)
}

    
bikinSegitiga(3)
bikinSegitiga(5)
bikinSegitiga(2)
bikinSegitiga(7)

