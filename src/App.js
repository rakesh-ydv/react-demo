import React, { Component } from 'react';

import Layout from './container/Layout/Layout';
import axiosInstance, {postData, fetchDirectionInfo} from './services/DirectionService';
import {SUCCESS, IN_PROGRESS, FAILED, IN_PROGRESS_ERROR_MSG} from './services/constants/constants';
import withErrorHandler from './hoc/withErrorHandler';
import Modal from './components/Modal/Modal';
import Spinner from './components/Spinner/Spinner';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {isLoading: false, apiToken: null, directionData: null, isError: false, error: null};
  }
  submitData = async (formData) => {
    this.setState({isLoading: true});
    let response = await postData(formData);
    if(response && response.data && response.data.token){
      this.setState({apiToken: response.data.token}, this.onUpdateCallback);
    }
  };

  onUpdateCallback = async () => {
    this.setState({isLoading: true});
    let response = await fetchDirectionInfo(this.state.apiToken);
    if(response && response.data){
      switch(response.data.status){
        case SUCCESS : 
          this.setState({ directionData: response.data, isError : false, error: null, isLoading: false});
          break;
        case IN_PROGRESS :
          this.setState({isError : true, error: response.data.error || IN_PROGRESS_ERROR_MSG, isLoading: false});
          break;
        case FAILED :
          this.setState({isError : true, error: response.data.error, isLoading: false});
          break;
        default:
          this.setState({isLoading: false, isError : false, error: null});
      }
    }
  };
  
  dismissHandler = () => {
    this.setState({isError : false, error: null});
  };

  render() {
    let modalContent = null, spinner = null;;
    if(this.state.isError){
      modalContent = <Modal show={this.state.isError} modalClosed={this.dismissHandler}>{this.state.error}</Modal>
    }
    if(this.state.isLoading){
      spinner = <Spinner />;
    }
    return (
      <div className="App">
        <Layout onSubmitHandler={this.submitData} directionData={this.state.directionData}></Layout>
        {modalContent}
        {spinner}
      </div>
    );
  }
}

export default withErrorHandler(App, axiosInstance);
