import Header from "../Header";
import "../Splash/Splash.css"

const Splash = () => {


  return (
    <div className='splash-container'>
        <Header />
        {/* <div className='options-container'>
            <div>
                <h1>ADOPT</h1>
            </div>
            <div>
                <h1>DONATE</h1>
            </div>
            <div>
                <h1>FOSTER</h1>
            </div>
            <div>
                <h1>VOLUNTEER</h1>
            </div>
        </div> */}
        <div>
            <div className='intro'>
                <h1 className='how-to'>How To Adopt A Bestie:</h1>
                <p>
                    * Our besties reside in foster homes throughout the Midwest, therefore besties can only be adopted out to residents in the Midwest due to the nature of the adoption process.
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
                <i className="fa-solid fa-memo icons"></i>
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
                <i className="fa-solid fa-hand-wave icons"></i>
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
                <i className="fa-solid fa-heart-pulse icons"></i>
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
                <i className="fa-solid fa-sack-dollar icons"></i>
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
                <i className="fa-solid fa-house-chimney icons"></i>
            </div>
        </div>
        <div className='applications'>
            <h1>READY TO ADOPT A BESTIE?</h1>
            <div>
                <button>Fill out an Adoption Application</button>
                <button>Fill out a Foster Application</button>
            </div>
        </div>
        <div className="vol-don">
            <h1>If you're not ready to adopt just yet . . . </h1>
            <div>
                <button>VOLUNTEER</button>
                <button>DONATE</button>
            </div>
        </div>
    </div>
  )
};

export default Splash;
