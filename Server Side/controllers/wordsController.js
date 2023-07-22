const fs=require("fs");//file system 

const getWords=()=>{
    let arrOfQusetions=[];
    var arrWords=JSON.parse(fs.readFileSync('./TestData.json',{encoding:"utf-8"})).wordList;//read from json file worldList array

// now we want to make sure that we have at least one "adverb" "varb" "noun" "adjective"
//so we can solve this problem by two ways 



// first way using four arrays by filter and add random element from each one 
// i did not recomend this way because it takes alot of run time 


// let adverbArr=arrWords.filter((e)=>e["pos"]=="adverb");//2
// let verbArr=arrWords.filter((e)=>e["pos"]=="verb");//4
// let nounArr=arrWords.filter((e)=>e["pos"]=="noun");//5
// let adjective=arrWords.filter((e)=>e["pos"]=="adjective");//4
// let arr=[adverbArr,verbArr,nounArr,adjective];
// for(let i=0;i<arr.length;i++){
//     let shuffled=[...arr[i]].sort(() => 0.5 - Math.random());
//     arrOfQusetions.push( ...shuffled.slice(0, 1))
// }
// second way we use while loop and count increasing by 1 when we add the target 
// i use this because it takes less runtime and less memory
let count=1;
while(arrOfQusetions.length<4)
{
    //filtering one element 
    let shuffled=[...arrWords].sort(() => 0.5 - Math.random());
    var target=shuffled[0];
   if(target.pos=="adverb"&&count==1){
    arrOfQusetions.push(target)
count++;
   }
   if(target.pos=="verb"&&count==2){
    arrOfQusetions.push(target)
count++;
   }
   if(target.pos=="noun"&&count==3){
    arrOfQusetions.push(target)
count++;
   }
   if(target.pos=="adjective"&&count==4){
    arrOfQusetions.push(target)
count++;
   }
}
// add the rest of elements random 
while(arrOfQusetions.length<10)
{
    let shuffled=[...arrWords].sort(() => 0.5 - Math.random());//random array from arrWords
    var target=shuffled[0];//select the first element
    var test=arrOfQusetions.find((e)=>e.id==target.id);//to test this obj is already in the arrOfQuestions or not to prevent dublicated questions 
  // if the object is not in arrOfQuestions add it 
    if(!test){
        arrOfQusetions.push(target)

    }
}
return arrOfQusetions.sort(() => 0.5 - Math.random());//to sort this array random because the forth elements are fixed 

}
exports.getWords = getWords;
