// const rateLimit = require("express-rate-limit");
// const express = require("express");

// // Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// // see https://expressjs.com/en/guide/behind-proxies.html
// // app.set('trust proxy', 1);

// const apiLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 1000,
//   message:
//     "Too many accounts created from this IP, please try again after an hour",
// });

// // only apply to requests that begin with /api/
// app.use("/", apiLimiter);

const express = require("express");
const rateLimiter = require("./slidingWindowCounter");
const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Successfully get a card!</h1>");
});

app.use(rateLimiter);
app.use("/", router);

app.listen(3000, () => {
  console.log("server is running on port 5000");
});
