const fs=require("fs");//file system

const calculateRank=(score)=>{
    let rank;
    var scoreArrs=JSON.parse(fs.readFileSync('./TestData.json',{encoding:"utf-8"}));//read from json file worldList array
    scoreArrs.scoresList.push(score);
    fs.writeFileSync('./TestData.json',JSON.stringify(scoreArrs));
    allArrLessThanNewScore=scoreArrs.scoresList.filter((e)=>e<score);
    rank=(allArrLessThanNewScore.length/scoreArrs.scoresList.length)*100;
return rank.toFixed(1);
}
exports.calculateRank = calculateRank;

