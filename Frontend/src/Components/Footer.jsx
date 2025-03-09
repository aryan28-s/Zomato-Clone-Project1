import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white text-center py-4">
            <div className="container">
                <p>Follow us on:</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/aryan-shinde-44b9b5276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="me-3 text-decoration-none">Linkedin</a>
                    <a href="https://twitter.com/aryan03284?t=ZZSsaiG2HW5Y5viuQ1NKDg&s=08 " className="me-3 text-decoration-none">Twitter</a>
                    <a href="https://instagram.com/aryan_328s?igshid=MzRlODBiNWFlZA==" className="me-3 text-decoration-none">Instagram</a>
                    <a href="#" className="me-3 text-decoration-none text-secondary">Terms of Service</a>
                    <a href="#" className="me-3 text-decoration-none text-secondary">Privacy Policy</a>
                </div><br></br>
                <p className="">
                    <h6> @ Zomato 2025 | All Rights Reserved </h6>
                </p>

            </div>
        </footer>
    );
};

export default Footer;