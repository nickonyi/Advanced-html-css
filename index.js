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

console.log(stockList(  ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
            ["A", "B", "C", "D",'E','F']));
