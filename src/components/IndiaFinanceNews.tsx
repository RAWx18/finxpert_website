
import React, { useState, useEffect } from "react";
import { ExternalLink, Calendar, TrendingUp } from "lucide-react";

const IndiaFinanceNews = () => {
  const [activeNews, setActiveNews] = useState(0);

  const newsItems = [
    {
      id: 1,
      title: "India’s Retail Inflation Drops to Six‑Year Low",
      excerpt: "India's annual retail inflation fell to 2.82% in May 2025—the lowest in over six years—allowing RBI to maintain its recent 50 bps rate cut, and economists forecast more easing ahead.",
      date: "2025-06-12",
      category: "Economy",
      image: "/news/1.png"
    },
    {
      id: 2,
      title: "RBI Unexpectedly Cuts Repo Rate by 50 bps",
      excerpt: "On June 6, 2025, the Reserve Bank of India slashed its repo rate by 50 bps to 5.50% and reduced CRR by 100 bps in a move to spur growth amid low inflation and economic slowdown.",
      date: "2025-06-06",
      category: "Policy",
      image: "/news/2.png"
    },
    {
      id: 3,
      title: "Bajaj Finance Executes Bonus & Stock Split",
      excerpt: "Bajaj Finance has announced a bonus issue and stock split effective June 16, 2025, prompting F&O contract adjustments on NSE to align with the new capital structure.",
      date: "2025-06-12",
      category: "Markets",
      image: "/news/3.png"
    },
    {
      id: 4,
      title: "RBI to Tighten Remittance Rules",
      excerpt: "The RBI plans to prohibit resident Indians from parking funds in foreign‑currency time deposits abroad under the Liberalised Remittance Scheme to curb passive wealth shifting.",
      date: "2025-06-12",
      category: "Regulation",
      image: "/news/4.png"
    },
    {
      id: 5,
      title: "India Nears $900 bn in Exports",
      excerpt: "Commerce Minister Piyush Goyal stated India is on track to surpass $900 billion in goods and services exports in FY 2025‑26, underscoring the country’s trade resilience.",
      date: "2025-06-12",
      category: "Trade",
      image: "/news/5.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNews((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [newsItems.length]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="finxpert-chip mx-auto mb-6">
            <span>Latest Updates</span>
          </div>
          <h2 className="section-title mb-4">India's Finance News</h2>
          <p className="section-subtitle mx-auto">
            Stay updated with the latest financial developments and market trends across India.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Featured News */}
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={newsItems[activeNews].image}
                    alt={newsItems[activeNews].title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-finxpert-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {newsItems[activeNews].category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{newsItems[activeNews].date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {newsItems[activeNews].title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {newsItems[activeNews].excerpt}
                  </p>
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(newsItems[activeNews].title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-finxpert-600 hover:text-finxpert-700 font-medium transition-colors duration-300"
                  >
                    Read More <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* News List */}
            <div className="order-1 md:order-2">
              <div className="space-y-4">
                {newsItems.map((news, index) => (
                  <div
                    key={news.id}
                    className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                      index === activeNews
                        ? 'bg-white shadow-lg transform scale-105'
                        : 'bg-white/70 hover:bg-white hover:shadow-md'
                    }`}
                    onClick={() => setActiveNews(index)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-finxpert-600 font-medium">
                            {news.category}
                          </span>
                          <span className="text-xs text-gray-500">{news.date}</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                          {news.title}
                        </h4>
                      </div>
                      {index === activeNews && (
                        <TrendingUp className="w-5 h-5 text-finxpert-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndiaFinanceNews;
