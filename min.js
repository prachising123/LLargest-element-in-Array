
    let array = [5,4,2,15,10,1]
    let max= array[0]
    for(let i =0; i<array.length; i++){
        if(max<array[i]){
            max=array[i]
        }
    }
    document.write("Max value is "+max);