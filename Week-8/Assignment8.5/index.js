const findJudge = (n, trust) => {
    let likesCountList = {};
        
    let beingLikedCountList = {};
    
    for(let i = 1; i <= n; i++){
        likesCountList[i] = 0
        beingLikedCountList[i] = 0
    }
    
    for(let ele of trust){
        likesCountList[ele[0]]++
        beingLikedCountList[ele[1]]++
    }
    
    let judge = 0
    
    for(key in likesCountList){
        if(likesCountList[key] === 0) judge = key
    }
    
    if(beingLikedCountList[judge] === n - 1) return judge
    else return -1
    
};

console.log("Result",findJudge(2,[[1,2]]));