import React from "react";

/**
 * Shows a Summary of Direction
 * @param {*} props 
 */
const DirectionSummary = (props) => {
    let totalDistance = props.directionData ?  props.directionData['total_distance'] : null, 
        totalTime = props.directionData ?  props.directionData['total_time'] : null;
    return  <>
                <div>Total Distance: {totalDistance}</div>
                <div>Total Time: {totalTime}</div>
            </>
}; 

export default DirectionSummary;