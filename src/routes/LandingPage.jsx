import {NavLink} from 'react-router-dom';
import styles from '../styles/Home.module.scss';


export default function LandingPage() {
  return (
    <div className={styles.WelcomeMessage}>
        <h1>Heart Story Dashboard</h1>
        <p>Welcome to the interactive dashboard! As a Full-Stack Developer and Data Analyst, I&apos;ve meticulously crafted this showcase to demonstrate my skills in creating powerful and user-friendly dashboards.</p>
        <h2>What You&apos;ll Discover:</h2>
        <ul>
          <li><b>Data Storytelling:</b> Each chart, graph, and widget tells a story - unveiling trends, patterns, and actionable takeaways.</li>
          <li><b>Responsive Design:</b> Whether you&apos;re on a desktop, tablet, or mobile device, our dashboard adapts flawlessly.</li>
        </ul>
        <NavLink to="Analysis">Run Analysis</NavLink>
    </div>
  )
}
