const express = require("express");
const app = express();
app.use(express.json()); 

const users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const jk = users[0].kidneys;
  const len = jk.length;
  let ct = 0;
  for (let i = 0; i < jk.length; i++) {
    if (jk[i].healthy) ct++;
  }
  const num_unhealthy = jk.length - ct;
  res.json({
    len,
    ct,
    num_unhealthy,
  });
});

app.post("/", function (req, res) {
  const { healthy } = req.body; // Extract healthy from request body
  users[0].kidneys.push({
    healthy,
  });
  res.status(201).send("Kidney status added.");
});

app.delete("/", function (req, res) {
  const newkidneys = [];
  let un = 0 ;
  for (let i = 0; i < users[0].kidneys.length; ++i) {
    if (users[0].kidneys[i].healthy) newkidneys.push({ healthy: true });
    // else{
    //   un++;
    // }
  }
  // if(un == 0){
  //   res.json({ msg: "no unhealhty kidney !! YEE!!" });
  // }
  users[0].kidneys = newkidneys;
  res.json({ msg: "done" });
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
