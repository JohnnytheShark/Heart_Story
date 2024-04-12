export default function Deployment() {
  return (
    <div>
      <article>
        <h1>What is the stack used to build this application?</h1>
        <p>Super simple, I used React for the Frontend, and Flask as the backend to interpret the data.</p>
        <p>For this example site all I did was take one of my runs and process it with this script:</p>
        <a href="https://github.com/JohnnytheShark/Python-Projects/blob/master/GPX/GPXtoJSON.py" target="_blank" rel="noreferrer noopener">Python Script</a>
        <p>Copied the JSON file over to my frontend, and built a reusable frontend around it.</p>
        <p>If I wanted to interpret other runs I would just update the file and refresh the frontend.</p>
      </article>
        <article>
        <h1>What would Deployment look like?</h1>
        <p>
        To deploy the backend REST API, I’d configure it to run on Google Cloud Run. Ensuring robust security measures, the API would accept GPX files uploaded by users via a frontend form. Subsequently, it would process the data and provide it to the frontend in JSON format. Additionally, I’d include a convenient download link, allowing users to retrieve their data either as a JSON file or a CSV file. 🚀🔒📊
        </p>
        </article>
        <article>
          <h1>What is a GPX file?</h1>
          <p>It is a GPS Exchange Format File. Garmin, Suunto, TomTom, and Magellan support the file type for fitness applications.</p>
        </article>
        <article>
            <h1>Why didn&apos;t I deploy it?</h1>
            <p>I encountered legal concerns related to potential misinterpretation of data for medical purposes. Despite having a disclaimer, I aimed to avoid any legal complications. My primary intention was to demonstrate my abilities as a Full-Stack Developer and showcase my Data Analytical skills. Consequently, I utilized one of my runs as the reference data for the visual components.
            </p>
        </article>
        <article>
            <h1>How are the visuals created?</h1>
            <p>I created the visuals using my knowledge of SVG graphics, and D3.js library.</p>
        </article>
        <article>
          <h1>How Are Heart Rate Zones Calculated?</h1>
          <p>([Maximum heart rate – resting heart rate] x % intensity) + resting heart rate = training zone.</p>
          <h2>References:</h2>
          <a href="https://health.clevelandclinic.org/exercise-heart-rate-zones-explained" target="_blank" rel="noreferrer noopener">Cleveland Clinic</a>
        </article>
        <article>
            <h1>Who would I market this to?</h1>
            <p>I&apos;m honestly okay with it being open source for anyone to use. If I were to try to sell it to anyone it would be one of the big name companies like Garmin, Strava, Apple Fitness, Nike, or Adidas to incorporate it into their own applications.</p>
        </article>
        <article>
          <h1>How would I improve this app?</h1>
          <p>I would create more visuals for the end user, along with adding the ability to compare multiple runs in charts not just looking at one run at a time. I would also get a legal team to insure we could go to market with a similar application for mobile.</p>
        </article>
    </div>
  )
}
