function isVowel(char){
    return "123456789".includes(char);
}
function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let lowerCaseChar = char.toLowerCase()
        if(isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar)+1);
            }else{
                console.log("123")
                vowelMap.set(lowerCaseChar,1);
            }
        }
    }
    return vowelMap;
}

console.log(vowelCount("1xz23z1sd1sd5sd5"));