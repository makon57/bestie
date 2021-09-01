import Header from "../Header";
import "../Splash/Splash.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const About = () => {

    const [params, setParams] = useState(window.location.pathname)


    useEffect(() => (
        setParams(window.location.pathname)
    ),[setParams])

    return (
    <>
    <div className='splash-container'>
        <Header />
        <div>
            <div className='intro'>
                <h1 className='how-to'>Our mission at Bestie:</h1>
                <p>
                Our mission is to engage the hearts, hands, and minds of the community to help animals and to
                compassionately and responsibly create a more humane world for animals. We believe that everyone
                should be good to animals, so we'd like to partner with people and learn alongside
                eachother how to lead responsibly and with compassion.
                </p>
            </div>
            <hr></hr>
            <div className='steps-a'>
                <h2>STEP 1:</h2>
                <h3>Application & Rental Approval</h3>
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
                <h3>Meet & Greet</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <img src="https://i.imgur.com/MSZoCJK.png" alt='form'></img>
            </div>
            <hr></hr>
            <div className='steps-a'>
                <h2>STEP 3:</h2>
                <h3>Home Visit & Veterinary Checks</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <img src="https://i.imgur.com/Ku9RtFe.png" alt='form'></img>
            </div>
            <hr></hr>
            <div className='steps-b'>
                <h2>STEP 4:</h2>
                <h3>Contracts & Payment</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <img src="https://i.imgur.com/Uu6ohv5.png" alt='form'></img>
            </div>
            <hr></hr>
            <div className='steps-a'>
                <h2>STEP 5:</h2>
                <h3>Pick Up</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <img src="https://i.imgur.com/Dd7765T.png" alt='form'></img>
            </div>
        </div>
        <div className='applications'>
            <h1>READY TO ADOPT A BESTIE?</h1>
            <div>
                <button><Link to='/adopt'>Check out our list of besties!</Link></button>
            </div>
        </div>
        <div className="vol-don">
            <h1>If you're not ready to adopt just yet . . . </h1>
            <div>
                <button><Link to='/foster'>Become a foster</Link></button>
                <button><Link to='/sponsor'>Become a sponsor</Link></button>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
};

export default About;
