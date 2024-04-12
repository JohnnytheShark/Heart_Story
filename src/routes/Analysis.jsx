import HeartRate from "../components/HeartRate";
import HeartRateZones from "../components/HeartRateZones";
import HeartRatePie from "../components/HeartRatePie";
import data from '../example-data/MarthonRun.json';
import styles from '../styles/Analysis.module.scss';

import { useState, useEffect } from 'react';
import RunStatistics from "../components/RunStatistics";

export default function Analysis() {
 const [zones, updateZones] = useState({}); // Initialize zones as an object
 const [Age] = useState(27); // Assuming Age is static and won't change
 const [RestingHeartRate] = useState(60); // Assuming RestingHeartRate is static

 useEffect(() => {
    if (data && data.tracks && data.tracks.length > 0) {
      let MaxHeartRate = 220 - Age;
      let HeartRateReserve = MaxHeartRate - RestingHeartRate;
      let zone1 = Math.round(HeartRateReserve * 0.5 + RestingHeartRate);
      let zone2 = Math.round(HeartRateReserve * 0.6 + RestingHeartRate);
      let zone3 = Math.round(HeartRateReserve * 0.7 + RestingHeartRate);
      let zone4 = Math.round(HeartRateReserve * 0.8 + RestingHeartRate);
      let zone5 = Math.round(HeartRateReserve * 0.9 + RestingHeartRate);

      updateZones({ "Zone1": zone1, "Zone2": zone2, "Zone3": zone3, "Zone4": zone4, "Zone5": zone5 });
    }
 }, [Age, RestingHeartRate]); // Removed data from the dependency array if it's static

 return (
    <div className={styles.details}>
      <HeartRate data={data} zones={zones}/>
      <HeartRateZones data={data} Age={Age} zones={zones} />
      <HeartRatePie data={data} zones={zones} />
      <RunStatistics data={data}/>
    </div>
 );
}