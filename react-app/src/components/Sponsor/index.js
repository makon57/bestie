
import "../Splash/Splash.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const Sponsor = () => {

    useEffect(() => {
        document.querySelector("body").scrollTo(0,0)
    }, [])

  return (
    <>
    <div className='splash-container'>
        <div>
            <div className='intro'>
                <h1 className='how-to'>HOW CAN I BECOME A SPONSOR?</h1>
                <h1>Sponsor us! Or a pet! Or three or four pets!</h1>
                <p>
                    First off, what's a sponsor? Well, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <hr></hr>
            <div className='steps-a'>
                <h2>OPTION 1:</h2>
                <h3>Donate toys or food!</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <img src="https://i.imgur.com/gNjfOaq.png" alt='form'></img>
            </div>
            <hr></hr>
            <div className='steps-b'>
                <h2>OPTION 2:</h2>
                <h3>Come play with our besties!</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <img src="https://i.imgur.com/a6lfipo.png" alt='form'></img>
            </div>
            <hr></hr>
            <div className='steps-a'>
                <h2>OPTION 3:</h2>
                <h3>Spread the word!</h3>
                <p>
                    Share our besties on social media platforms and tag us @bestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <img src="https://i.imgur.com/x5LXDC0.png" alt='form'></img>
            </div>
            <hr></hr>
            <div className='steps-b'>
                <h2>OPTION 4:</h2>
                <h3>Share the wealth!</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <img src="https://i.imgur.com/Uu6ohv5.png" alt='form'></img>
            </div>
        </div>
        <div className='applications'>
            <h1>Our besties are waiting for you . . . </h1>
            <div>
                <button><Link to='/adopt'>Check out our list of besties!</Link></button>
            </div>
        </div>
        <div className="vol-don">
            <h1>Read more on how you can help local animal shelters in your area!</h1>
            <div>
                <button><a href='https://www.animalhumanesociety.org' target="_blank" rel="noreferrer noopener">Animal Humane Society</a></button>
                <button><a href='https://www.spcai.org' target="_blank" rel="noreferrer noopener">SPCA Global Animal Rescue</a></button>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
};

export default Sponsor;
