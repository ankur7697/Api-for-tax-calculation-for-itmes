const express = require("express");
const port = 8000;
const app = express();
app.use(express.urlencoded());
app.use(express.json());
const arr = [
    {
        item : "T-shirts",
        itemCateogory:"Clothes",
        quantiti: 50,
        price: 1000,

    },
    {

    item: "Livcitrogin",
    itemCategory: "Medicine",
    quantity: 5,
    price: 500,
  },
  {
    item: "Sandwich",
    itemCategory: "Food",
    quantity: 2,
    price: 200,
  },
  {
    item: "Perfume",
    itemCategory: "Imported",
    quantity: 1,
    price: 4000,
  },
  {
    item: "Black Swan",
    itemCategory: "Book",
    quantity: 1,
    price: 600,
  },
];

app.get("/taxData", (req, res) => {
  let totalprice = 0;
  let finalList = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].price < 1000 && arr[i].itemCategory === "Clothes") {
      totalprice = arr[i].price + (arr[i].price * 5) / 100;
      if (totalprice > 2000) {
        totalprice = totalprice - (totalprice * 5) / 100;
      }
        let data = { itemCategory: arr[i].itemCategory, price: totalprice };
      finalList.push({
        itemCategory: arr[i].itemCategory,
        payblePrice:totalprice,
    
        
      });
    }
    if (arr[i].itemCategory === "music") {
      totalprice = arr[i].price + (arr[i].price * 3) / 100;
      if (totalprice > 2000) {
        totalprice = totalprice - (totalprice * 5) / 100;
      }
      finalList.push({
        itemCategory: arr[i].itemCategory,
        payblePrice: totalprice,
      });
    }
   

    if (arr[i].itemCategory === "commodities") {
      totalprice = arr[i].price + (arr[i].price * 12) / 100;
      if (totalprice > 2000) {
        totalprice = totalprice - (totalprice * 5) / 100;
      }
      finalList.push({
        itemCategory: arr[i].itemCategory,
        payblePrice: totalprice,
      });
    }
    if (arr[i].itemCategory === "Book") {
      totalprice = arr[i].price;
      if (totalprice > 2000) {
        totalprice = totalprice - (totalprice * 5) / 100;
      }
      finalList.push({
        itemCategory: arr[i].itemCategory,
        payblePrice: totalprice,
      });
    }
    if (arr[i].itemCategory === "Medicine") {
      totalprice = arr[i].price + (arr[i].price * 5) / 100;
      if (totalprice > 2000) {
        totalprice = totalprice - (totalprice * 5) / 100;
      }
      finalList.push({
        itemCategory: arr[i].itemCategory,
        payblePrice:totalprice
      });
    }
    if (arr[i].itemCategory === "Food") {
      totalprice = arr[i].price + (arr[i].price * 5) / 100;
      if (totalprice > 2000) {
        totalprice = totalprice - (totalprice * 5) / 100;
      }
      finalList.push({
        itemCategory: arr[i].itemCategory,
        payblePrice: totalprice,
      });
    }
    if (arr[i].itemCategory === "Imported") {
      totalprice = arr[i].price + (arr[i].price * 18) / 100;
      if (totalprice > 2000) {
        totalprice = totalprice - (totalprice * 5) / 100;
      }
      finalList.push({
        itemCategory: arr[i].itemCategory,
        payblePrice: totalprice,
      });
    }
  }
  return res.json({
    msg: "success",
    finalList,
  });
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server", err);
  } else {
    console.log("Yup!My Express Server is running on port:", port);
  }
});

/*function getItemPriceAfterTax(finalPrice) {
    let taxedPrice = finalPrice*0.18 + finalPrice
    return taxedPrice
    }*/
