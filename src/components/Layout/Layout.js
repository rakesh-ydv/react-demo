import React, {Component} from 'react';

import GoogleMapsApi from '../../services/googleMap';
import UserInputForm from '../UserInputForm/UserInputForm';
import MapComponent from '../MapComponent/MapComponent';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import './Layout.css';

class Layout extends Component {

    mapRef; 
    googleMapsApi;
    map;
    constructor(){
        super();
        this.state = {directionInfo : null, totalDistance: null, totalTime: null};
    }

    handleReset = () => {
        this.setState({directionInfo: null, totalDistance: null, totalTime: null})
    };
    
    render() {
        return (<>
                    <div className="user-input-section">
                    <ErrorBoundary>
                        <UserInputForm 
                            handleReset={() => this.handleReset()} 
                            onSubmitHandler={this.props.onSubmitHandler}
                            directionData={this.props.directionData}/>
                    </ErrorBoundary>
                    </div>
                    <div className="map-container">
                        <MapComponent directionData={this.props.directionData}/>
                    </div>
                </>
                )
    }
}

Layout.defaultProps = {
    GoogleMapsApi
}

export default Layout;