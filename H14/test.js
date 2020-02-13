const berapaTahun = (n,d,p,t) =>{
    
    var penduduk = n //1000
    var tahun = 0    
   
    while(penduduk <= t){
        var pertumbuhan = d + (p*penduduk)
        console.log (pertumbuhan)
        penduduk += pertumbuhan
        console.log (penduduk)
        tahun ++
        console.log(tahun)
    }
    console.log (tahun)

}
berapaTahun(1000,50,(5/100),1200)


const getMiddle = (arr= '') =>{
    
    if(arr.length % 2 == 0){
        var Penampung = arr[arr.length/2-1] + arr[arr.length/2]
        }else{
        Penampung = arr.charAt(arr.length/2)
        }
        console.log (Penampung)
}
        
getMiddle("test") //es
getMiddle("testing") //t
getMiddle("middle") //dd
getMiddle("A") //A
