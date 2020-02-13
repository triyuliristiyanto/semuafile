function hapusKarakter(kalimat,huruf){
    
    var kalimat_baru = ''

    for(var i = 0 ; i < kalimat.length;i++ ){
        if( kalimat[i].toLowerCase() == huruf){
        }else {
            kalimat_baru += kalimat[i]
        }
    }
    return kalimat_baru
}
console.log(hapusKarakter('im student at purwadika', 'a'));
