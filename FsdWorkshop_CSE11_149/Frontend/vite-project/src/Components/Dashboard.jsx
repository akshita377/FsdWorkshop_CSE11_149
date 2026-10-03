import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <div className="dashboard-page">

            <div className="dashboard-card">

                <h1>Welcome to Dashboard 👋</h1>

                <p className="dashboard-subtitle">
                    Your account details
                </p>

                {user ? (
                    <>
                        <div className="details-card">

                            <div className="detail-item">
                                <span>Username</span>
                                <strong>{user.username}</strong>
                            </div>

                            <div className="detail-item">
                                <span>Student ID</span>
                                <strong>{user.id}</strong>
                            </div>

                            <div className="detail-item">
                                <span>Email</span>
                                <strong>{user.email}</strong>
                            </div>

                        </div>

                        <button
                            className="logout-btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <p>No user found.</p>

                        <button
                            className="logout-btn"
                            onClick={() => navigate("/")}
                        >
                            Go to Signup
                        </button>
                    </>
                )}

            </div>

        </div>
    );
}

export default Dashboard;