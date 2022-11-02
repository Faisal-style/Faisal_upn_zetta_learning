function BookPurchase({ name, genre, price, stock, purchased }, discount, tax) {
  if (stock > 0) {
    let total = 0;
    diskon = (discount / 100) * price;
    priceafterdiscount = price - diskon;
    pajak = (tax / 100) * priceafterdiscount;
    priceaftertax = priceafterdiscount + pajak;
    let text;
    for (let index = 1; index <= purchased; index++) {
      total = total + priceaftertax;

      if (index == stock) {
        text = "can't purchased again";
        break;
      } else if (index <= stock) {
        text = "You can Purchase This Product again";
      }
    }
    return total;
  } else {
    return "Stock = 0";
  }
}

const bookDetail = {
  name: "Pengantar Ekonometrika",
  genre: "encyclopedia",
  price: 10000,
  purchased: 5,
  stock: 5,
};

function termOfcredit(total, term) {
  priceperterm = total / term;
  objectofterm = [];
  for (let index = 0; index < term; index++) {
    objectofterm.push({ index: index + 1, term: priceperterm });
  }
  return objectofterm;
}

console.log(termOfcredit(BookPurchase(bookDetail, 10, 10), 5));
