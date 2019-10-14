const palindrome = (word) =>{
    let letters = [];
    var reverse_word = "";
    
    for(let i = 0; i<word.length; i++){
        letters.push(word[i]);
    }

    for(let i = 0; i<word.length; i++){
        reverse_word += letters.pop();
    }

    if(reverse_word === word){
        console.log(word + " is a palindrome.");
    }
    else {
        console.log(word +" is not a palindrome.");
    }
}
palindrome('racecai');