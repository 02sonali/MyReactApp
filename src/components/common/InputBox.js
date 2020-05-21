import React from "react";

class InputBox extends React.Component {
    // constructor(props) {
    //     super(props);
    //     state = {value: ""};
    //     this.handleChange = this.handleChange.bind(this); // we don't need this line while using arrow function declaration
    // }
    state = {value: ""};

    handleChange = (event) => {
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