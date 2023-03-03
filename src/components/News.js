import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalresults] = useState(0)



  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  const updatenews = async () => {
    props.setProgress(10);

    const url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=15950d0d96974b4da6b941feb5312dcb&language=en`
    // `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=15950d0d96974b4da6b941feb5312dcb&page=${page}&pagesize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseddata = await data.json();
    props.setProgress(60);
    setArticles(parseddata.articles)
    console.log("articles are ", parseddata.articles)
    setTotalresults(parseddata.totalResults)
    setLoading(false)

    props.setProgress(100)
  }
  useEffect(() => {
    updatenews();

    document.title = `${capitalize(props.category)} - NewsMonkey`;
    //eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=15950d0d96974b4da6b941feb5312dcb&page=${page + 1}&pagesize=${props.pagesize}`;

    let data = await fetch(url);
    let parseddata = await data.json();

    setArticles(articles.concat(parseddata.articles))
    setTotalresults(parseddata.totalResults)
  };


  return (
    <div style={{ backgroundColor: "black", marginTop: "130px" }}>
      <h1 className="text-center" style={{ paddingInline: '10px', overflow: 'hidden', backgroundColor: 'black', color: '#1179F7' }}>
        <span style={{ color: 'white' }}>Latest <span style={{ color: '#1179F7' }}>{capitalize(props.category)} </span>News Updates{" "}</span>
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}


      >
        <div className="container" style={{ backgroundColor: "black" }} >
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 70)
                        : ""
                    }
                    newsUrl={element.url}
                    imgUrl={element.urlToImage}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );

}
News.defaultProps = {
  country: "in",
  pagesize: 6,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
