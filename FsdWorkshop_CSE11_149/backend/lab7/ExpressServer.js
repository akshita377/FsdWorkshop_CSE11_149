import express from "express";

const app = express();

const port = 3000;

app.use(express.json());

let userData = [
    {
        id: 101,
        name: "CM",
        email: "cmrj88@gmail.com"
    },
    {
        id: 102,
        name: "Rahul",
        email: "rahul@gmail.com"
    },
    {
        id: 103,
        name: "Priya",
        email: "priya@gmail.com"
    },
    
];

// GET - Display all users
// app.get("/users", (req, res) => {
//     try {
//         res.status(200).json({
//             msg: "Users fetched successfully",
//             data: userData
//         });

//     } catch (error) {
//         res.status(500).json({
//             msg: "Error fetching users",
//             error: error.message
//         });
//     }
// });
// GET - Get user by ID
app.get("/users/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const user = userData.find(user => user.id === id);

        if (!user) {
            return res.status(404).json({
                msg: "User not found"
            });
        }

        res.status(200).json({
            msg: "User fetched successfully",
            data: user
        });

    } catch (error) {
        res.status(500).json({
            msg: "Error fetching user",
            error: error.message
        });
    }
});

// POST - Create user
app.post("/users", (req, res) => {
    try {
        const newUser = req.body;

        userData.push(newUser);

        res.status(201).json({
            msg: "User created successfully",
            data: newUser
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error creating user",
            error: error.message
        });
    }
});
// // PUT - Update user
app.put("/users/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const index = userData.findIndex(user => user.id === id);

        if (index === -1) {
            return res.status(404).json({
                msg: "User not found"
            });
        }

        userData[index] = {
            id: id,
            name: req.body.name,
            email: req.body.email
        };

        res.status(200).json({
            msg: "User updated successfully",
            data: userData[200]
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error updating user",
            error: error.message
            
        });
    }
});
app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const user = userData.find((u) => u.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);
});
// // DELETE - Delete user
// app.delete("/users/:id", (req, res) => {
//     try {
//         const id = parseInt(req.params.id);

//         const index = userData.findIndex(user => user.id === id);

//         if (index === -1) {
//             return res.status(404).json({
//                 msg: "User not found"
//             });
//         }

//         const deletedUser = userData.splice(index, 1);

//         res.status(200).json({
//             msg: "User deleted successfully",
//             data: deletedUser[0]
//         });
//     } catch (error) {
//         res.status(500).json({
//             msg: "Error deleting user",
//             error: error.message
//         });
//     }
// });

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/users`);
});



//http://localhost:3000/users
//thunderclint ot postman use


//userData.json file array ki jagah file banani h assisgment sunday tak