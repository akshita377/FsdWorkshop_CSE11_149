import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

    const [username, setUsername] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    // PREDEFINED LOGIN DETAILS
    const correctId = "12345";
    const correctEmail = "akshita@gmail.com";

    const handleSignup = async (e) => {

        e.preventDefault();

        // CHECK ID AND EMAIL
        if (id !== correctId || email !== correctEmail) {
            alert("Invalid ID or Email!");
            return;
        }

        try {

            const response = await fetch(
                "http://localhost:3000/signup",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        username: username,
                        id: id,
                        email: email
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(data.message);
                return;
            }

            // Save user
            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

            // Open Dashboard
            navigate("/dashboard");

        } catch (error) {

            console.log(error);

            alert("Could not connect to server");
        }
    };
    return (
        <div className="signup-page">

            <div className="signup-card">

                <h1>Login</h1>

                <p className="subtitle">
                    Enter your registered details
                </p>

                <form onSubmit={handleSignup}>

                    <div className="input-group">

                        <label>Username</label>

                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) =>
                                setUsername(e.target.value)
                            }
                            required
                        />

                    </div>


                    <div className="input-group">

                        <label>ID</label>

                        <input
                            type="text"
                            placeholder="Enter your ID"
                            value={id}
                            onChange={(e) =>
                                setId(e.target.value)
                            }
                            required
                        />

                    </div>


                    <div className="input-group">

                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                        />

                    </div>


                    <button type="submit">
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Signup;