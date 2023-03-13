import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ zIndex: 1, left: "90%" }}
          >
            {source}{" "}
          </span>
          <img
            rel="noreferrer"
            src={
              !imageurl
                ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-announcements/-476x249w4/gsmarena_00.jpg"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small class="text-muted">
                updated by {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More..
            </a>
          </div>
        </div>
      </div>
    );
  }
}
