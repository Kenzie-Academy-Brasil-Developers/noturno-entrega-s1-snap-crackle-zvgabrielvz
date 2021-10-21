
function snapCrackle(maxValue) {
    
    let word = [];
    for(let count = 1; count <= maxValue; count++){

        if((count % 2 !== 0) && (count % 5 === 0) ){
        word.push('SnapCrackle')
        } else if( (count % 2 === 0) && (count % 5 !== 0) ){
            word.push(count)
        } else if(count % 5 === 0){
            word.push('Crackle')
        } else if(count % 2 !== 0){
            word.push('Snap')
        }
    }  
    return word.toString() 
}


function snapCracklePrime(maxValue){
     
}

function isPrime(number){
    let prime = true
    for(let count = 2; count < number; count++){
        if(number % count === 0){
            prime = false;
        }
    }
    if(prime === true){
        return true
    } else{
        return false
    }
}
