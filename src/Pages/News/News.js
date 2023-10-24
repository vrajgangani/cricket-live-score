import React from "react";
import newsData from "../../Assets/NewsData/NewsData";
import NewsCard from "../../Components/Cards/NewsCard";
import "../../CSS/News.css";
import { Typography } from "antd";

const { Title } = Typography;

const News = () => {
  return (
    <>
      <div className="news-container">
       <Title level={2} style={{textAlign:"center"}}>Latest News</Title>
        
      {newsData.map((news, index) => (
        <NewsCard key={index} news={news} />
      ))}
    </div>
    </>
  );
};

export default News;
