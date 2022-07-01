import react from 'react';
import VisButton from './VisButton';

class EditText extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            edit: 0,
        }

        this.setEdit = this.setEdit.bind(this);
    }

    render() {
        if (this.state.edit === 1) {
            return (
                <div className='Text'>
                    <input type='text' placeholder={this.state.value} onChange={this.updateValue}></input>
                    <input type='button' value='Save' onClick={this.setEdit} className="button"></input>
                </div>
            )
        } else {
            return (
                <div className='Text'>
                    <label>{this.state.value}</label>
                    <VisButton value="Edit" render={this.props.buttons} className="button" onClick={this.setEdit}/>
                </div>
            )
        }
    }

    updateValue = (e) => {
        this.setState({ value: e.target.value })
    }

    setEdit = () => {
        this.setState(() => {
            if (this.state.edit === 0) {
                return { edit: 1}
            }

            return { edit: 0 }
        });
    }
}

export default EditText;