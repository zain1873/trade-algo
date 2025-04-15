import React, { useState } from 'react';

const MarketNews = () => {
  const [activeTab, setActiveTab] = useState('Market News');
  const [searchText, setSearchText] = useState('');

  // Sample news data
  const newsArticles = [
    {
      id: 1,
      title: 'Fed Signals Potential Rate Cut in Coming Months',
      content: 'Federal Reserve officials indicated they could begin cutting interest rates in the coming months if inflation continues to cool, according to minutes from their latest meeting.',
      source: 'Financial Times',
      timeAgo: '2 hours ago',
      category: 'Economy',
      isPlatinum: true,
      externalLink: '#'
    },
    {
      id: 2,
      title: 'Tech Stocks Rally as Earnings Beat Expectations',
      content: 'Major technology companies reported stronger-than-expected quarterly earnings, driving a broad rally in tech stocks and pushing the Nasdaq to new record highs.',
      source: 'Bloomberg',
      timeAgo: '4 hours ago',
      category: 'Stocks',
      isPlatinum: true,
      externalLink: '#'
    },
    {
      id: 3,
      title: 'Oil Prices Surge Amid Middle East Tensions',
      content: 'Crude oil prices jumped more than 3% as geopolitical tensions in the Middle East raised concerns about potential supply disruptions in the region.',
      source: 'Reuters',
      timeAgo: '6 hours ago',
      category: 'Commodities',
      isPlatinum: false,
      externalLink: '#'
    },
    {
      id: 4,
      title: 'Bitcoin Breaks $65,000 Resistance Level',
      content: 'Bitcoin surged past the $65,000 resistance level, reaching its highest price in weeks as institutional investors continue to increase their cryptocurrency holdings.',
      source: 'CoinDesk',
      timeAgo: '8 hours ago',
      category: 'Crypto',
      isPlatinum: true,
      externalLink: '#'
    },
    {
      id: 5,
      title: 'European Markets Close Higher on Strong Economic Data',
      content: 'European stock markets ended the day higher after new economic data showed stronger-than-expected growth in several key economies across the continent.',
      source: 'CNBC',
      timeAgo: '10 hours ago',
      category: 'Global Markets',
      isPlatinum: false,
      externalLink: '#'
    },
    {
      id: 6,
      title: 'Central Banks Worldwide Reassess Gold Reserves',
      content: 'Central banks around the world are increasing their gold reserves at the fastest pace in decades, signaling a shift in global monetary policy and asset allocation strategies.',
      source: 'Wall Street Journal',
      timeAgo: '12 hours ago',
      category: 'Economy',
      isPlatinum: true,
      externalLink: '#'
    }
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  // Filter news based on search text
  const filteredNews = newsArticles.filter(article => {
    if (searchText === '') return true;
    return article.title.toLowerCase().includes(searchText.toLowerCase()) || 
           article.content.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="market-news-container">
      <div className="news-header">
        <div className="news-icon-container">
          <i className="bi bi-newspaper"></i>
        </div>
        <div>
          <h2 className="news-title">Market News</h2>
          <p className="news-subtitle">Curated financial news from premium sources for platinum members</p>
        </div>
      </div>

      <div className="news-card">
        <div className="news-card-header">
          <h3 className="news-card-title">Latest Financial News</h3>
          <div className="search-filter-container">
            <div className="search-container">
              <input 
                type="text" 
                className="search-input-news" 
                placeholder="Search news..." 
                value={searchText}
                onChange={handleSearchChange}
              />
              {/* <i className="bi bi-search search-icon"></i> */}
            </div>
            <button className="filter-button">
              <i className="bi bi-funnel"></i>
            </button>
          </div>
        </div>

        <div className="tabs-container">
          <button 
            className={`tab-button ${activeTab === 'Market News' ? 'active' : ''}`}
            onClick={() => handleTabChange('Market News')}
          >
            Market News
          </button>
          {/* <button 
            className={`tab-button ${activeTab === 'Premium Analysis' ? 'active' : ''}`}
            onClick={() => handleTabChange('Premium Analysis')}
          >
            Premium Analysis
          </button> */}
        </div>

        <div className="news-grid">
          {filteredNews.map(article => (
            <div key={article.id} className="news-item">
              <div className="news-item-content">
                <h4 className="news-item-title">
                  {article.title}
                  <i className="bi bi-box-arrow-up-right external-link-icon"></i>
                </h4>
                <p className="news-item-description">{article.content}</p>
                <div className="news-item-footer">
                  <div className="news-source-time">
                    <span className="news-source">{article.source}</span>
                    <span className="news-time">
                      <i className="bi bi-clock"></i> {article.timeAgo}
                    </span>
                  </div>
                  <div className="news-tags">
                    <span className="news-category">{article.category}</span>
                    {article.isPlatinum && (
                      <span className="news-platinum">Platinum</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketNews;