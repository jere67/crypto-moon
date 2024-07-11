import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false";

app.use(express.static("public")); // Use for client file

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}`, {
      headers: {
        x_cg_pro_api_key: process.env.token
      }
    });
    console.log(response.data);
    res.render("index.ejs", { data: response.data });
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
