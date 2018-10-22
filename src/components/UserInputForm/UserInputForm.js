import React, {Component} from 'react';

import InputControl from  '../InputControl/InputControl';
import DirectionSummary from '../../container/DirectionSummary/DirectionSummary';

class UserInputForm extends Component {
    onSubmit = () => {
        this.props.onSubmitHandler({fromInput: this.refs.fromInput.getCtrlValue(), toInput: this.refs.toInput.getCtrlValue()})
    };

    onReset = () => {
        this.refs.fromInput.setCtrlValue('');
        this.refs.toInput.setCtrlValue('');
        this.props.handleReset();
    };

    render() {
        let directionSummary = null;
        if(this.props.directionData != null){
            directionSummary = (<DirectionSummary
                directionData={this.props.directionData}/>)
        }
        return  <div className="form-section"> 
            <div className="from-section">
                <InputControl ref="fromInput" type="text" labelText="Starting point" helpText="Enter Staring Location"/>
            </div>
            <div className="to-section">
                <InputControl ref="toInput" type="text" labelText="Drop-off point" helpText="Enter Drop-off Location"/>
            </div>
            {directionSummary}
            <div>
                <input type="button" value="Submit" onClick={() => this.onSubmit()} />
                <input type="button" value="Reset" onClick={() => this.onReset()} />
            </div>
        </div>        
    }
}

export default UserInputForm;