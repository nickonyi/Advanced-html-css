function stockList(books, categories) {
   const total = {};

   books.forEach(item => {
    const [code,qty] = item.split(' ');
    const letter = code[0];
    const amount = Number(qty);

    if (categories.includes(letter)) {
        total[letter] = (total[letter] || 0) +amount;
    }
   });

   


 
}

console.log(stockList(  ["BBAR 150", "CDhghghXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
            ["A", "B", "C", "D",'E','F','y']));

 function findDigit(num, nth) {
    //turn the numbber into an array
    if(nth < 0) return -1;
    let digit = 0;
    //get the absolute number first
    num = Math.abs(num);
    const numArray = String(num).split('').map(Number);
    // retrieve the nth digit
  
        digit = numArray.reverse()[nth -1 ] || 0;
        
   
    //return the digit
    return digit;
}

console.log(findDigit(-456,4));
