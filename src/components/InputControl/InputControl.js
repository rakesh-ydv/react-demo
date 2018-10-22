import React, {Component} from "react";

import GoogleMapsApi from "../../services/googleMap";

/**
 * Re-usable Google Place AutoComplete InputControl Component 
 * 
 */

class InputControl extends Component {
    maps;
    constructor(){
        super();
        this.state = {ctrlValue: ''};
    }

    setCtrlValue = (value) => {
        this.setState({ctrlValue: value});
    };

    getCtrlValue = () => {
        return this.refs.ctrl.value;
    };

    componentDidMount() {
        this.setUpControl();
    }

    componentWillUnmount() {
        this.maps.event.clearInstanceListeners(this.refs.ctrl);
    }

    setUpControl = async () =>{
        this.maps = await this.props.GoogleMapsApi();
        const autocomplete  = new this.maps.places.Autocomplete(
            this.refs.ctrl
        );
        this.maps.event.clearInstanceListeners(this.refs.ctrl);
        this.maps.event.addListener(autocomplete, `place_changed`, () => {
          const place = autocomplete.getPlace();
          this.setCtrlValue(place.formatted_address);
          this.refs.ctrl.value = place.formatted_address;
        });
    }

    onChangeHandler = (event) =>{
        this.setState({ctrlValue: event.target.value});
    };

    clearValue = () => {
        this.setCtrlValue('');
    };

    render(){
        const {labelText, helpText} = this.props;
        let closeBtn = null;
        if(this.state.ctrlValue){
            closeBtn = <span onClick={this.clearValue}>X</span>
        }
        return <div className="control-container">
                    <label className="label">{labelText}</label>
                    <div className="control-input">
                        <input type="text" ref="ctrl" value={this.state.ctrlValue} onChange={(event) => this.onChangeHandler(event)} placeholder={helpText}/>
                        {closeBtn}
                    </div>
                </div>;
    }
}

/**
 * GoogleMapsApi Manadatory for the control
 */
InputControl.defaultProps = {
    GoogleMapsApi
};

export default InputControl;