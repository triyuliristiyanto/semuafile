function removeVocal (kata){
    var new_kata = ''
    for(var i = 0 ; i < kata.length; i++){
        if(kata[i].toLowerCase() == 'a' || kata[i].toLowerCase() == 'i' || kata[i].toLowerCase() == 'u' || kata[i].toLowerCase() == 'e' || kata[i].toLowerCase() == 'o'){

        }else{
            new_kata += kata[i]
        }
    }
    return new_kata
}

console.log(removeVocal('pUrwadhika purwadika'))