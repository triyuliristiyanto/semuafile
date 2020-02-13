//var i awalnya 0 


function HitungVocal(kata){
    
    var hasil = 0;
    // var new_kata = kata.toString();
    for(var i = 0 ; i < kata.length; i++){
      char = kata[i].toLowerCase()
      if (char == 'a' || char == 'i' || char == 'u' || char == 'e' || char =='o' ){
        hasil ++
      } 
      // if(kata[i].toLowerCase() == 'a' || kata[i].toLowerCase() == 'i' || kata[i].toLowerCase() == 'u' || kata[i].toLowerCase() == 'e' || kata[i].toLowerCase() == 'o'){   // <== cek satu satu hurufnya
      //     hasil += 1;
      //   }
         }
    return hasil
}

console.log (HitungVocal('budi pergi ke pasar'))
console.log (HitungVocal('aku seorang kapiten'))
console.log (HitungVocal('tri Yuli Ristiyanto'))


// 1. bikin fungsi dengan nama HitungVocal dengan satu parameter dgn identitas kata
// 2. bikinkan variabel hasil untuk menampung jumlah kalimat yang akan dijumlahkan
// 3. bikin new_kata dari number di ubah menjadi string 
// 4. bikin sintak untuk menghitung jumlah huruf vokal (var i =0 ; i < kata.length; i++)
// 5. bikin perbandingan untuk cek 1 persatu kalimat dalam parameter yang di ketikan (jika kata(index ke 1 adalah a,i,u,e,o atau bukan) jika ya maka hasil yang tadinya 0 ditambahkan
//    vegitu sampai dengan kalimatnya berakhir dan hasil akhirnya dijumlahkan ada berapa huruf hasilnya.length
// 6. kemudian return dari hasil atau cek ulang lagi 