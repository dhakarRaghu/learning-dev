const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  { username: "harkirat@gmail.com", password: "123", name: "Harkirat Singh" },
  { username: "raman@gmail.com", password: "123321", name: "Raman Singh" },
  { username: "priya@gmail.com", password: "123321", name: "Priya Kumari" }
];

function userExists(username, password) {
  // Loop through ALL_USERS array to check for user existence
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (ALL_USERS[i].username === username && ALL_USERS[i].password === password) {
      return true;
    }
  }
  return false;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({ msg: "User doesn't exist in our in-memory DB" });
  }

  // Create and sign JWT token
  const token = jwt.sign({ username: username }, jwtPassword);
  return res.json({ token });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;

  try {
    // Verify the token
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    // Filter out the authenticated user from ALL_USERS
    const otherUsers = ALL_USERS.filter(user => user.username !== username);

    return res.json({ users: otherUsers });
  } catch (err) {
    return res.status(403).json({ msg: "Invalid token" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
