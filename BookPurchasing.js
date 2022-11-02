function BookPurchase({ name, genre, price, stock, purchased }, discount, tax) {
  pajak = (10 / 100) * price;
  let total = 0;
  diskon = (10 / 100) * price;
  priceafterdiscount = price - diskon;
  priceaftertax = priceafterdiscount + pajak;
  let text;
  console.log("Nama Buku : ", name);
  console.log("Genre Buku : ", genre);
  console.log("Amount Of Discount : ", diskon);
  console.log("Purchased : ", purchased);
  console.log("Stock : ", stock);
  console.log("Price After Discount : ", priceafterdiscount);
  console.log("price After Tax : ", priceaftertax);
  for (let index = 1; index <= purchased; index++) {
    total = total + priceaftertax;

    if (index == stock) {
      text = "can't purchased again";
      break;
    } else if (index <= stock) {
      text = "You can Purchase This Product again";
    }
  }
  console.log("Total Harga : ", total);
  console.log("Status : ", text);
}

const bookDetail = {
  name: "Pengantar Ekonometrika",
  genre: "encyclopedia",
  price: 200000,
  purchased: 10,
  stock: 10,
};

BookPurchase(bookDetail, 10, 10);
