import React from 'react';

const HeroSection = () => {
    return (
        <div className="hero-section text-center py-5 bg-dark text-black"><br></br><br></br><br></br><br></br>
            <p className="display-4"style={{color:"whitesmoke", background:"#111",width:"800px",float:"right","font-size":"50px","border-radius":"10px 0px 0px 10px",position:"absolute",right:"0px",top:"180px"}}><i>Best Restaurants ever</i></p>
            <p className="lead" style={{color:"whitesmoke", background:"#111",width:"600px"}}><i>Order food from your favorite restaurants and enjoy at home.</i></p>
            <form className="d-flex justify-content-center" style={{float:"left"}}>
                <input
                    className="form-control w-50 me-2"
                    type="search"
                    placeholder="Enter your delivery location"
                    aria-label="Search"
                />
                <button className="btn btn-primary" type="submit">Find Restaurant</button>
            </form><br></br><br></br><br></br><br></br>
        </div>
    );
};

export default HeroSection;