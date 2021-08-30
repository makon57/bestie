
import "../Splash/Splash.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const Foster = () => {

    useEffect(() => {
        document.querySelector("body").scrollTo(0,0)
    }, [])

  return (
    <>
    <div className='splash-container'>
        <div>
            <div className='intro'>
                <h1 className='how-to'>HOW DO I BECOME A FOSTER?</h1>
                <h1>Fill out an application and lets see if we can become besties!</h1>
                <p>
                    First off, what's a foster? Well, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <hr></hr>
            <div className='steps-a'>
                <h2>STEP 1:</h2>
                <h3>Fill out a foster application!</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <img src="https://i.imgur.com/Ba1cmFT.png" alt='form'></img>
            </div>
            <hr></hr>
            <div className='steps-b'>
                <h2>STEP 2:</h2>
                <h3>Let's go on a date!</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <img src="https://i.imgur.com/U10mQty.png" alt='form'></img>
            </div>
            <hr></hr>
            <div className='steps-a'>
                <h2>STEP 3:</h2>
                <h3>Let's go on another date, but take me home!</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <img src="https://i.imgur.com/Dd7765T.png" alt='form'></img>
            </div>
            <hr></hr>
            <div className='steps-b'>
                <h2>STEP 4:</h2>
                <h3>Let's DTR!</h3>
                <p>
                    It's time to 'define the relationship'. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <img src="https://i.imgur.com/2j1OboE.png" alt='form'></img>
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

export default Foster;
