import React, {Component} from "react";

import GoogleMapsApi from "../../services/googleMap";

import "./MapComponent.css";

class MapComponent extends Component {
    mapRef; 
    googleMapsApi;
    map;
    componentDidMount() {
        this.initMap();
    }

    initMap = async () => {
        this.googleMapsApi = await this.props.GoogleMapsApi();

        this.map = new this.googleMapsApi.Map(this.refs.mapRef, {
            zoom: 5,
            center: { lat: 20.593684, lng: 78.96288000000004 }
        });
    };

    preparePositionFromPath = (path) => {
        return path.map(([lat, lng]) => new this.googleMapsApi.LatLng(lat, lng));
    };

    drawDirections = ({ path }) => {
        const directionsService = new this.googleMapsApi.DirectionsService();
        const directionsRenderer = new this.googleMapsApi.DirectionsRenderer();

        directionsRenderer.setMap(this.map);

        const positions = this.preparePositionFromPath(path);
        const waypoints = positions
            .slice(1, positions.length - 1)
            .map(location => ({ location, stopover: false }));

        // request for the google map directions api
        const request = {
            origin: positions[0],
            destination: positions[positions.length - 1],
            waypoints,
            optimizeWaypoints: true,
            travelMode: this.googleMapsApi.TravelMode.DRIVING
        };

        // get the route from directionService and then plot with the help of directionsRenderer
        directionsService.route(request, (response, status) => {
            if (status === this.googleMapsApi.DirectionsStatus.OK) {
                directionsRenderer.setDirections(response);
            } else {
                //log error
                console.error("Error in direction service response");
            }
        });
    };

    componentDidUpdate(props, state, snapShot) {
        if (snapShot) {
            if(snapShot === 'UPDATE_MAP'){
                this.initMap();
            } else {
                this.drawDirections(snapShot);
            }  
        }
    }

    getSnapshotBeforeUpdate(prevProps) {
        const {directionData} = this.props;
        if(prevProps.directionData !== directionData){
            if(directionData === null){
                return 'UPDATE_MAP'
            } 
            return this.props.directionData;
        }
        return null
    }
    
    render(){
        return <>
                <div ref="mapRef" className="map-container">
                </div>
        </>
        
    }
}

MapComponent.defaultProps = {
    GoogleMapsApi
}

export default MapComponent;