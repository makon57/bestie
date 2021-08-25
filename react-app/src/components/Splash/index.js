import Header from "../Header";
import "../Splash/Splash.css"

const Splash = () => {


  return (
    <>
    <div className='splash-container'>
        <Header />
        <div className='options-container'>
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
        </div>
        <div>
            <h1>How To Adopt A Bestie:</h1>
            <p>
                Besties can only be adopted out to residents in the Midwest due to the nature of the adoption process.
                <br></br>
                Our besties reside in foster homes throughout the Midwest.
            </p>
        </div>
    </div>
    </>
  )
};

export default Splash;
