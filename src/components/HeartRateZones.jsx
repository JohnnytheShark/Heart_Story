
import Table from '../UI/Table/Table';
import {useState,useEffect} from 'react';
import styles from '../styles/Analysis.module.scss';

export default function HeartRateZones({data,Age,zones}) {
  const [updatedData,updateData] = useState("");
  const [heartzones,updateZones] = useState("");
  const [RestingHeartRate] = useState(60);

  useEffect(()=>{
    if (data && data.tracks && data.tracks.length > 0 && zones && zones.Zone1 && zones.Zone2 && zones.Zone3 && zones.Zone4 && zones.Zone5){
      let MaxHeartRate = 220 - Age;
      let HeartRateReserve = MaxHeartRate - RestingHeartRate;
      updateData([{"Max Heart Rate":MaxHeartRate,"Resting Heart Rate":RestingHeartRate,"Heart Rate Reserve":HeartRateReserve,"Age":Age}]);
      updateZones([
      {"Zone":1,"Description":"Warm-Up, Recovery, Easy","Intensity":"Moderate-Low","Percentage of Max Heart Rate":"50% - 60%","Target Heart Rate (Low End)":zones.Zone1.toString() + " BPM"},
      {"Zone":2,"Description":"Aerobic, Endurance, Base, Light","Intensity":"Moderate","Percentage of Max Heart Rate":"60% - 70%","Target Heart Rate (Low End)":zones.Zone2.toString() + " BPM"},
      {"Zone":3,"Description":"Tempo, Threshold, Cardio, Moderate","Intensity":"Moderate-High","Percentage of Max Heart Rate":"70% - 80%","Target Heart Rate (Low End)":zones.Zone3.toString() + " BPM"},
      {"Zone":4,"Description":"Lactate Threshold, Redline, Hard","Intensity":"High","Percentage of Max Heart Rate":"80% - 90%","Target Heart Rate (Low End)":zones.Zone4.toString() + " BPM"},
      {"Zone":5,"Description":"Anaerobic, V02 Max, Peak, Maximum","Intensity":"Very High","Percentage of Max Heart Rate":"90% - 100%","Target Heart Rate (Low End)":zones.Zone5.toString() + " BPM"}])
    }
  },[data,Age,RestingHeartRate,zones]);

  return (
    <div className={styles.tableContainer}>
        <h1>Decoding Heart Rate Patterns by Age</h1>
        <h3>The data shown below is based on myself at the age of {Age}.</h3>
        <Table data={updatedData} arialabel={"Heart Rate Constants"}/>
        <Table data={heartzones} arialabel={"Heart Rate Zones"}/>
    </div>
  )
}
