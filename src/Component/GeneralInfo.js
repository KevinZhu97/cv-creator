import react from 'react';
import EditText from './EditText'

class GeneralInfo extends react.Component {
    render() {
        return(
            <div className="GeneralInfo">
                <EditText value="First Name"></EditText>
                <EditText value="Last Name" buttons={this.props.buttons}></EditText>
                <EditText value="Email" buttons={this.props.buttons}></EditText>
                <EditText value="Phone Number" buttons={this.props.buttons}></EditText>
            </div>
        )
    }
}

export default GeneralInfo;