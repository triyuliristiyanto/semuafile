
    function cekPlat(plat_nomor,tanggal) {
    
    plat_nomor = plat_nomor.slice(3,4)
    console.log(plat_nomor)

    if (tanggal % 2 == 0){
        tanggal = 'genap'
    }else{
        tanggal = 'ganjil'
    }

    if(plat_nomor % 2 == 0){
        plat_nomor = 'genap'
    }else{
        plat_nomor = 'ganjil'
    }    

    if(plat_nomor == tanggal){
         return ( 'Boleh lewat')
    }else{
         return ( 'Gak Boleh Lewat')
    }

    }
    
    

    console.log(cekPlat('D 16 CD' , 21))