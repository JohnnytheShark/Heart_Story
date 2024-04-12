import styles from '../styles/Home.module.scss';
import {NavLink,useNavigate} from 'react-router-dom';

function Home() {
const navigate = useNavigate();
  return (
    <div className={styles.details}>
    <div>
    <h1>Heart 🫀 Story</h1>
      <p>Still working on branding for this application, but here is the broad overview.
        I wanted to create an application that would allow me to better visualize my runs, workouts, and sprints.
        I set this up as an open source repository for any one else to download and use.
      </p>
    </div>
    <a href="https://github.com/JohnnytheShark/Heart_Rate" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
    <NavLink to="/FrequentlyAskedQuestions">Frequently Asked Questions</NavLink>
    <br/>
    <div>
      <h2>Example GPX File</h2><br/>
      <p>I did not want to be liable for misinterpretations of health data, at least not without a legal team behind me. However, I still wanted to showcase my skills as a developer. I took my first ever half-marthon and used it as the data mapped out here.</p>
      <button onClick={()=>navigate('Analysis')}>Run Analysis</button>
    </div>
    <div>
      <h3>Disclaimer</h3>
      <p>This app visualizes data from GPX files, which may include heart rate data. The app does not analyze or interpret this data for medical purposes. Heart rate is an individual metric, and users should not rely on it for diagnosing or treating any medical conditions. We recommend consulting with a healthcare professional before using this app to make decisions about your exercise routine or if you have any health concerns.</p>
    </div>
    <div>
      <h3>Privacy Disclaimer</h3>
      <p>Privacy Disclaimer: This app prioritizes your privacy. We do not store any of the GPX data you upload, including location, elevation, or heart rate information. The app utilizes a secure API to convert your GPX file to a temporary JSON format for visualization purposes only. This temporary data is discarded after use and not retained by our servers.</p>
    </div>
    </div>
  )
}

export default Home
