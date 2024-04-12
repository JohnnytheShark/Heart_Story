import { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import styles from '../styles/Analysis.module.scss';
import PropTypes from 'prop-types';

export default function HeartRatePie({ data, zones }) {
 const svgRef = useRef();
 const [isDataLoaded, setIsDataLoaded] = useState(false);
 const [heartRateZones, updateHeartRateZones] = useState([]); // Initialize as an array

 function refreshPage() {
    window.location.reload();
 }
 function countHeartRatesInZone(zone, previousZoneLowerLimit = 0) {
  if (data && data.tracks && data.tracks.length > 0) {
     return data.tracks.reduce((acc, track) => {
       return acc + track.segments.reduce((accSeg, segment) => {
         return accSeg + segment.reduce((accPoint, point) => {
           // Check if heart rate is within the current zone and greater than the previous zone's lower limit
           // Assuming the upper limit of the current zone is the value of 'zone' itself
           return accPoint + ((parseInt(point.heart_rate) >= previousZoneLowerLimit && parseInt(point.heart_rate) <= zone) ? 1 : 0);
         }, 0);
       }, 0);
     }, 0);
  }
}

 useEffect(() => {
    if (data && data.tracks && data.tracks.length > 0) {
        let count1 = countHeartRatesInZone(zones.Zone2);
        let count2 = countHeartRatesInZone(zones.Zone3, zones.Zone2);
        let count3 = countHeartRatesInZone(zones.Zone4, zones.Zone3);
        let count4 = countHeartRatesInZone(zones.Zone5, zones.Zone4);
        let count5 = countHeartRatesInZone(Infinity, zones.Zone5);
      updateHeartRateZones([
        { zone: "Zone 1", value: count1 },
        { zone: "Zone 2", value: count2 },
        { zone: "Zone 3", value: count3 },
        { zone: "Zone 4", value: count4 },
        { zone: "Zone 5", value: count5 },
      ]);
      setIsDataLoaded(true);
    }
 }, [data, zones]);

 useEffect(() => {
    if (isDataLoaded) {
       const createPieChart = () => {
         const svg = d3.select(svgRef.current);
         const margin = { top: 40, right: 80, bottom: 60, left: 50 };
         const width = svg.node().getBoundingClientRect().width - margin.left - margin.right;
         const height = svg.node().getBoundingClientRect().height - margin.top - margin.bottom;
         const innerRadius = 0;
         const outerRadius = Math.min(width, height) / 2;
         const labelRadius = (innerRadius * 0.2 + outerRadius * 0.8);
         const padAngle = 0.100

         const colors = d3.scaleOrdinal()
           .range(["#D1D1D1", "#2978A0", "#4B7F52", "#F05D23", "#CA3C25", "#d0743c", "#ff8c00"]);
        
         const pie = d3.pie()
         .padAngle(padAngle)
           .sort(null)
           .value(d => d.value);
   
         const arc = d3.arc()
         .padRadius(10)
           .outerRadius(outerRadius - 10)
           .innerRadius(innerRadius);

        const arcLabel = d3.arc()
        .outerRadius(labelRadius)
        .innerRadius(labelRadius);
   
         // Instead, ensure the SVG is responsive by setting the viewBox
         svg.attr("viewBox", `0 0 ${width} ${height}`);
   
         const g = svg.append("g")
           .attr("transform", `translate(${width / 2}, ${height / 2})`); // Center the group
   
         const arcs = g.selectAll(".arc")
           .data(pie(heartRateZones))
           .enter().append("g")
           .attr("class", "arc");
   
           arcs.append("path")
           .attr("fill", (d, i) => colors(i))
           .attr("d", arc)
           .style('stroke', 'white') // Specify the stroke color
           .style('stroke-width', 2); 

            arcs.append("text")
            .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
            .attr("dy", ".35em") // Adjusts the vertical position of the text
            .text(d => `${Math.round((d.endAngle - d.startAngle) / (2 * Math.PI) * 100)}%`) // Calculates the percentage
            .style("text-anchor", "middle") // Centers the text
            .style("font-size", "12px")
            .style("fill", "black");

            const legend = svg.append("g")
            .attr("transform",`translate(${width/4}, ${height / 3})`);

            const legendItems = legend.selectAll(".legend")
            .data(heartRateZones)
            .enter().append("g")
            .attr("class","legend")
            .attr("transform",(d,i) => `translate(0,${i*20})`)

            // Add colored rectangles for each legend item
            legendItems.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", (d, i) => colors(i));

            // Add text labels for each legend item
            legendItems.append("text")
            .attr("x", 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .text(d => d.zone)
            .style("font-size", "12px");


       };
   
       createPieChart();
    }
   }, [heartRateZones, isDataLoaded]);

 return (
    <div className={styles.chart}>
      <h1>Heart Rate Zones based on this Run</h1>
      <svg ref={svgRef} width="90vw" height="500">
      </svg>
      <button onClick={refreshPage}>Chart not loading?</button>
    </div>
 );
}
