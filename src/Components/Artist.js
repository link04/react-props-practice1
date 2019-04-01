import React from "react";

class Artist extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.src} width="200" height="200" />
        <h1>Artist Name: {this.props.name} </h1>
        <h2>Top Song: {this.props.topSong} </h2>
      </div>
    )
  }
}

export default Artist;
