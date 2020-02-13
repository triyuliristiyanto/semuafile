const given = (arr = []) => {
    
    var new_arr = []
    for(var i = 0 ; i < arr.length ; i++ ){
        for (var j = 0 ; j < arr[i].length ; j++){
            new_arr.push(arr[i][j])
        }       
    }
    console.log (new_arr.sort())
}
given([[6,3,2,1,5]])
given([[3,2,3,4],[2,9,8,7,4]])
given([[1,2,3],[4,2,3],[1]])
