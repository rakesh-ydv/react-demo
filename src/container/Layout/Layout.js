import React, { Component } from 'react';

import UserInputForm from '../../components/UserInputForm/UserInputForm';
import MapComponent from '../MapComponent/MapComponent';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import './Layout.css';

class Layout extends Component {
    constructor() {
        super();
        this.state = { directionInfo: null, totalDistance: null, totalTime: null };
    }

    handleReset = () => {
        this.setState({ directionInfo: null, totalDistance: null, totalTime: null })
    };

    render() {
        return (<>
            <div className="user-input-section">
                <ErrorBoundary>
                    <UserInputForm
                        handleReset={() => this.handleReset()}
                        onSubmitHandler={this.props.onSubmitHandler}
                        directionData={this.props.directionData} />
                </ErrorBoundary>
            </div>
            <MapComponent directionData={this.props.directionData} />
        </>
        )
    }
}

export default Layout;