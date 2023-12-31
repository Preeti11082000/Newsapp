import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps = {
    country:"in",
    pageSize:8,
    category:"general"

  }
  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
    

  }
  constructor() {
    super();
    console.log("Hi I am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=eceb04c2df7b4ae29d3c39c52aa6d45c&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=eceb04c2df7b4ae29d3c39c52aa6d45c&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();


    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
    });
  };
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=eceb04c2df7b4ae29d3c39c52aa6d45c&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
   this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading:false
    });
  };

  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin:"35px 0px"}}>NewsMonkey Top Headline from {this.capitalizeFirstLetter(this.props.category)} </h1>
       {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageurl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
