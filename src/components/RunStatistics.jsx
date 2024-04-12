import Table from '../UI/Table/Table';
import {useState,useEffect} from 'react';
import styles from "../styles/Analysis.module.scss";
import {calculateTotalDistance,calculateTotalTime} from '../utility/utiltyFunctions';

export default function RunStatistics({data}) {
    const [updatedData,updateData] = useState([]);
    useEffect(()=>{
        const coordinates = data.tracks[0].segments[0].map(point => [point.latitude, point.longitude]);
        const totalDistanceMiles = calculateTotalDistance(coordinates,true);
        const totalDistanceKm = calculateTotalDistance(coordinates)
        const totalTime = calculateTotalTime(data)
        updateData([{"Total Miles":totalDistanceMiles.toFixed(2), "Equivalent Kilometers":totalDistanceKm.toFixed(2),"Total Time":totalTime}])
    },[data])

  return (
    <div className={styles.tableContainer}>
        <h1>Running Statistics: </h1>
        <Table data={updatedData}/>
    </div>
  )
}
