import React from "react";
import InputBox from "../common/InputBox";

class AddImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', category: ""};
        this.updateImageName = this.updateImageName.bind(this);
        this.updateImageCategory = this.updateImageCategory.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    updateImageName(val) {
        this.setState({name: val});
    }
    updateImageCategory(val) {
        this.setState({category: val});
    }
    handleSubmit(event) {
        alert('A form was submitted: ' + this.state.name + "category:" + this.state.category);
        event.preventDefault();
    }
    render() {
        return  (
            <form onSubmit={this.handleSubmit}>
                <h2> {this.props.mode} Image </h2>
                <div>
                    <label htmlFor="name"> Name </label>
                    <InputBox type="text" name="name" onValueChange={this.updateImageName}/>
                </div>
                <div>
                    <label htmlFor="category"> Category </label>
                    <InputBox type="category" name="category" onValueChange={this.updateImageCategory}/>
                </div>
                <input type="submit" value="Submit"/>
                
            </form>
        );
    }
}

export default AddImage;