import React, { useState } from 'react';
import { Card } from "antd";
import "../../CSS/News.css"


const NewsCard = ({ news }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="news-card" bodyStyle={{ padding: 0 }}>
      <div className="news-row">
        <div className="news-image">
          <img src={news.image} alt="News Image" />
        </div>
        <div className="news-content">
          {isExpanded ? (
            news.content
          ) : (
            <div>
              {news.content.slice(0, 100)} {/* Display the first 100 characters */}
              {news.content.length > 100 && (
                <span
                  className="read-more-link"
                  onClick={toggleExpansion}
                >
                  ...Read More
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

  
  
  

export default NewsCard;
