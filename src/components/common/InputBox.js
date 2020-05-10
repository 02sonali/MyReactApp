import React from "react";

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.onValueChange(event.target.value);
    }
    render() {
        return  (
            <input type={this.props.type} name={this.props.name} value={this.state.value} onChange={this.handleChange}/>
        );
    }
}

export default InputBox;