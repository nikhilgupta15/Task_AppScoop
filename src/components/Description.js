import React, { Component } from "react";

export default class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: props.location.state.subtitle,
      img: props.location.state.image,
    };
  }

  render() {
    return (
      <div className="container mt-2">
        {this.state.subtitle !== undefined ? (
          <h3 className="text-center">Subtitle: {this.state.subtitle}</h3>
        ) : (
          <div></div>
        )}
        <img
          src={this.state.img}
          className="img-responsive rounded mx-auto d-block w-75 mt-2"
        ></img>
      </div>
    );
  }
}
