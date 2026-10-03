const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

const file = "./lab/userData.json";

// GET USERS
app.get("/users", (req, res) => {
    fs.readFile(file, "utf8", (err, data) => {

        if (err) {
            return res.status(500).json({
                message: "Error reading users"
            });
        }

        const users = JSON.parse(data);

        res.json(users);
    });
});


// SIGNUP
app.post("/signup", (req, res) => {

    const { username, id, email } = req.body;

    if (!username || !id || !email) {
        return res.status(400).json({
            message: "Username, ID and Email are required"
        });
    }

    try {

        const data = fs.readFileSync(file, "utf8");

        const users = JSON.parse(data);

        const newUser = {
            username: username,
            id: id,
            email: email
        };

        users.push(newUser);

        fs.writeFileSync(
            file,
            JSON.stringify(users, null, 4)
        );

        res.status(201).json({
            message: "Signup successful",
            user: newUser
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Error saving user"
        });
    }
});


app.listen(PORT, () => {
    console.log(
        `Express server running on http://localhost:${PORT}`
    );
});



//http://localhost:5173/
