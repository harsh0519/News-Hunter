import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description , imageurl, newsurl} = this.props;
    return (
      <div className="my-3 mx-3">
        <div className="card">
          <img src={!imageurl?"https://c.ndtvimg.com/ndtv-logo_625x300_1530090600008.jpg":imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsurl} target="_blank" rel="noreferrer"  className="btn btn-danger btn-sm">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
