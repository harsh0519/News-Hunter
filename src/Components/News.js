import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {
  articles = [
    {
      source: { id: "google-news", name: "Google News" },
      author: "Adriana Gomez Licon, Steve Peoples",
      title: "Florida Democrats weighing candidates to challenge DeSantis",
      description:
        "MIAMI (AP) — Florida Gov. Ron DeSantis  is poised to learn the identity of his general election opponent on Tuesday as Democrats choose between a man who spent a lifetime in politics — much of it as a Republican — and a woman casting herself as “something new…",
      url: "https://apnews.com/article/abortion-2022-midterm-elections-florida-primary-c7381cddbff112b8c65873b6a03250cd",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/055f40a4da9d44c1b92e9568dae49191/3000.jpeg",
      publishedAt: "2022-08-23T18:45:00+00:00",
      content:
        "MIAMI (AP) Florida Gov. Ron DeSantis is poised to learn the identity of his general election opponent on Tuesday as Democrats choose between a man who spent a lifetime in politics much of it as a Rep… [+7705 chars]",
    },
    {
      source: { id: "google-news-au", name: "Google News (Australia)" },
      author: "Amanda Meade",
      title:
        "Lachlan Murdoch files defamation action against Australian independent news outlet Crikey",
      description:
        "Claim lodged by co-chairman of News Corp names news website, politics editor Bernard Keane and editor-in-chief Peter Fray as respondents",
      url: "https://amp.theguardian.com/media/2022/aug/23/lachlan-murdoch-files-defamation-action-against-independent-news-outlet-crikey",
      urlToImage:
        "https://i.guim.co.uk/img/media/e4312c1c7365f3443de8fef61d3be8fc537d248f/0_157_2592_1555/master/2592.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=6d40a3401d78bf656cae2c1bccc8c7e4",
      publishedAt: "2022-08-23T10:22:00+00:00",
      content:
        "Lachlan Murdoch has filed proceedings for defamation in Australias federal court against the independent news site Crikey over an article that named the Murdoch family as an unindicted co-conspirator… [+3988 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: null,
      title: "Daily Briefing",
      description:
        "The day's top stories, from sports to movies to politics to world events.",
      url: "https://profile.usatoday.com/newsletters/daily-briefing/",
      urlToImage:
        "https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg",
      publishedAt: "2021-08-15T15:35:07+00:00",
      content:
        "The day's top stories, from sports to movies to politics to world events.",
    },
    {
      source: { id: "the-jerusalem-post", name: "The Jerusalem Post" },
      author: null,
      title: "Congresswoman Nita Lowey: I am proud to stand with Israel",
      description:
        "Gantz: Security of Israel is above politics; PA: This is a crime.",
      url: "https://www.jpost.com/Arab-Israeli-Conflict/Gantz-Security-of-Israel-is-above-politics-Palestinians-This-is-a-crime-607595",
      urlToImage:
        "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/448812",
      publishedAt: "2019-11-13T04:41:00Z",
      content:
        "US Ambassador David M. Friedman said the US stands “with our friend and ally Israel at this critical moment” on social media on Tuesday after roughly 170 rockets were fired on Israel from the Gaza St… [+6160 chars]",
    },
  ];

  constructor() {
    super();
    // console.log("this is news const");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    //console.log("render")
    this.setState({
      loading:true
    })
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=92902c220aa04299b8538ba68acf146a&page=1&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    //console.log(parseddata);
    this.setState({
      articles: parseddata.articles,
      totalArticles: parseddata.totalResults,
      loading:false,
    });
  }
  hanleprev = async () => {
    //console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=92902c220aa04299b8538ba68acf146a&page=${
      this.state.page - 1
    }&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    this.setState({
      loading:true
    })
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      page: this.state.page - 1,
      articles: parseddata.articles,
      loading: false,
    });
  };
  hanlenext = async () => {
    console.log("next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pagesize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=92902c220aa04299b8538ba68acf146a&page=${
        this.state.page + 1
      }&pageSize=${this.props.pagesize}`;
      let data = await fetch(url);
      this.setState({
        loading:true
      })
      let parseddata = await data.json();
      console.log(parseddata);
      this.setState({
        page: this.state.page + 1,
        articles: parseddata.articles,
        loading: false,
      });
    }
  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="my-3">TOP HEADLINES</h2>
        {this.state.loading&&<Spinner />}
        <div className="row">
          {!(this.state.loading)&&this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  description={element.description}
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            onClick={this.hanleprev}
            className="btn btn-danger"
          >
            &larr; Previous
          </button>
          <button
            type="button"
            onClick={this.hanlenext}
            className="btn btn-warning"
            disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pagesize)}
          >
            Next &rarr;
          </button>
        </div>{" "}
      </div>
    );
  }
}

export default News;
