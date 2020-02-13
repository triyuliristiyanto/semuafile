    

    function pangkat(angka) {

    return + Array.from (angka.toString( ),
    a => a * a ).join('');
    }

    console.log (pangkat(234));
    
   
    // semua yang di return akkan menjalakan yang ada di funcion