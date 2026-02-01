import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/thankYou.css";

const ThankYou = () => {
    const [backLink] = useState("/");

    return (
        <div className="thank-you-container">
            <div className="thank-you-card">
                <div className="thank-you-header">
                    <h1>Thank You!</h1>
                </div>
                <div className="thank-you-body">
                    <p>Your form submission has been received.</p>
                    <p>
                        <Link to={backLink} className="thank-you-back-link">
                            ← Back to our site
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;

