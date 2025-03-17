function finalLongWord(str) {
    let words = str.split(' '); // Split by spaces
    let longestWord = words.reduce((longest, current) => 
        current.length > longest.length ? current : longest, 
    );
    return longestWord;
}

console.log(finalLongWord("Badon is a good boy"));

const hasTag = (str) =>{
    if(str.length > 280 ||  str.trim().length === 0){
        return flase
    }

    // let strNew = str.split(" ").map((curEl)=> curEl.replace(curEl[0], curEl[0].toUpperCase()))
    let strNew = str.split(" ").map((curEle)=>curEle.charAt(0).toUpperCase() + curEle.slice(1)) 

    let strNews =`#${ strNew.join( "")}`
  
  return strNews
   
}

console.log(hasTag("my name is badon"))