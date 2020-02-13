const alphaloops = (str='') => {
    var hasil = ''

    for(var i = 0; i<str.length; i++){
        hasil += str[i].toUpperCase()
        hasil += str[i].repeat(i)
    }
    console.log(hasil)
}

alphaloops('abcd')
alphaloops('Fikri')


const alphaSum = (str) => {
    var hasil = 0
    var alphabet = ' abcdefghijklmnopqrstuvwxyz'

    for (var i=0 ; i<str.length ; i++){
        var hurufDicari = str[i]
        var index = alphabet.indexOf(hurufDicari)
        hasil += index
        
    }
    
    // var hurufDicari = str[0]
    // var index = alphabet.indexOf(hurufDicari)
    // hasil += index

    // var hurufDicari = str[1]
    // var index = alphabet.indexOf(hurufDicari)
    // hasil += index

    // var hurufDicari = str[3]
    // var index = alphabet.indexOf(hurufDicari)
    // hasil += index
    console.log(hasil)
}

alphaSum('abc')






const alphaMove = (str = '',num =0) => {
    var index_before = []
    var index_after = [] 
    var alphabet = ' abcdefghijklmnopqrstuvwxyz'
    var print = ''

    for (var i = 0; i <str.length; i++){
        index_before.push(alphabet.indexOf(str[i]))
    }
    console.log(index_before)

    for (var i = 0; i <str.length;i++){
        var jumlah = index_before[i] + num    
        index_after.push(jumlah)
    }
    console.log(index_after)

    for (var i = 0 ; i < index_after.length; i++){
        print += alphabet[index_after[i]]
    }
    console.log(print)


}
alphaMove('abc', 1)
alphaMove('abc', 2)
alphaMove('aaa', 5)
   