import React, { Component } from "react"
class GiveImage extends Component {
    constructor() {
        super();
        this.state = {
            message: "Click Here For Image"
        }

    }
    showImage() {
        this.setState({
            message: <img src="https://www.w3schools.com/css/img_forest.jpg" alt="image" width="500" height="600"></img>
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.showImage()}>Image</button>
            </div>
        )
    }
}
export default GiveImage;
