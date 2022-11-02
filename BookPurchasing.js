function BookPurchase({ name, genre, price }, discount, tax) {
  pajak = (10 / 100) * price;
  diskon = (10 / 100) * price;
  priceafterdiscount = price - diskon;
  console.log("Nama Buku : ", name);
  console.log("Genre Buku : ", genre);
  console.log("Amount Of Discount : ", diskon);
  console.log("Price After Discount : ", priceafterdiscount);
  console.log("price After Tax : ", priceafterdiscount + pajak);
}

const bookDetail = {
  name: "Pengantar Ekonometrika",
  genre: "encyclopedia",
  price: 200000,
};

BookPurchase(bookDetail, 10, 10);
