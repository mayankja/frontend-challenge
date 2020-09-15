const express = require("express");
const cars = require("./cars.json");
const app = express();
const Bundler = require("parcel-bundler");
const bundler = new Bundler("src/index.html", { logLevel: 2 });

const PORT = 3001;
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1234');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get("/cars.json", (req, res) => {
  let availableCars = cars.map((car, i) => {
    const id = i + 1;
    return { id, picturePath: `/pictures/${id}.jpg`, ...car };
  });

  if (req.query.duration) {
    availableCars = availableCars.filter(
      ({ availability }) =>
        parseInt(req.query.duration, 10) <= availability.maxDuration
    );
  }

  if (req.query.distance) {
    availableCars = availableCars.filter(
      ({ availability }) =>
        parseInt(req.query.distance, 10) <= availability.maxDistance
    );
  }

  res.json(availableCars);
});

app.use(express.static("server/public"));
app.use(bundler.middleware());

app.listen(PORT, () => {
  // Clear console
  process.stdout.write(
    process.platform === "win32" ? "\x1B[2J\x1B[0f" : "\x1B[2J\x1B[3J\x1B[H"
  );

  console.log("\x1b[32m%s\x1b[0m", "App started successfully!");
  console.log();
  console.log("You can now view it in your browser.");
  console.log();
  console.log(`  http://localhost:${PORT}`);
  console.log();
  console.log("You'll find more instruction in the README file.");
});
