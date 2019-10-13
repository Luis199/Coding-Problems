const duplicates= (arr)=>{
    let temp={};
    arr.sort();
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] === arr[i++]){
            temp =arr[i]; 
        }
    }   
    return temp;

}
console.log(duplicates([3,2,1,0,0,2]));