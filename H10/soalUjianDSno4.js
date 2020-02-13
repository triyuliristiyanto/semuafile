const countWords = (sentence = '') => {
  var arrKata = []
  var arrJumlahKata = []
  var arrSentence = sentence.split(' ')

  for (var i = 0 ; i < arrSentence.length; i ++){

      if(arrKata.includes(arrSentence[i].toLowerCase())){
        var index_ke = arrKata.indexOf(arrSentence[i].toLowerCase())
        arrJumlahKata[index_ke] ++
      }else{
        arrKata.push(arrSentence[i].toLowerCase())
        arrJumlahKata.push(1)
      }

  }   
 console.log(arrKata)   // sebelum di gabungkan atau masih misah
 console.log(arrJumlahKata) // sebelum di gabungkan atau masih misah
 var text = ''
 for(var i = 0;i <arrKata.length;i++){
   text += "Jumlah kata '" + arrKata[i].charAt(0).toUpperCase() + arrKata[i].slice(1,arrKata[i].length)  
   +"' adalah " + arrJumlahKata[i] + '\n' // <---- ini memisahkan huruf pertama menjadi huruf besar dan menyatukan hemjadi hasilnya
  }  
  console.log(text)
}  

countWords('Nama Saya adalah Nama saya')