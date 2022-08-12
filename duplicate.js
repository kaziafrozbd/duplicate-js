const numbers =[1, 9,8,5,3,1,2,8,3,4,5,6,7,8,9,3,5,6];
function duplicate(num){
    const unique = [];
    for(const element of num){
        
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

const uniqueElements = duplicate(numbers);
console.log(uniqueElements);




