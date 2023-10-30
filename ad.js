const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Simulated database (you would use a real database in a production system)
const ads = [
  {
    id: 1,
    text: "Ad 1 Text",
    imageUrl:
      "https://t4.ftcdn.net/jpg/01/43/42/83/360_F_143428338_gcxw3Jcd0tJpkvvb53pfEztwtU9sxsgT.jpg",
    size: "300x250",
  },
];

app.use(bodyParser.json());

// Endpoint to retrieve an ad
app.get("/api/ad", (req, res) => {
  // Implement logic to select and return an ad from your database
  const randomAd = ads[Math.floor(Math.random() * ads.length)];
  res.json(randomAd);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
