import "./App.css";
import React, { useState } from "react";

const articles = [
  {
    title: "Basics of HTML and CSS",
    content:
      "HTML and CSS are foundational technologies for creating web pages.",
  },
  {
    title: "Using CSS for Layouts",
    content:
      "CSS offers various tools for layouts, including Flexbox and Grid.",
  },
  {
    title: "Getting Started with JavaScript",
    content: "JavaScript is a versatile programming language for the web.",
  },
  {
    title: "Understanding CSS Grid",
    content:
      "CSS Grid is a powerful tool for creating layouts in web development.",
  },
  {
    title: "Difference between Flexbox and Grid",
    content:
      "Flexbox is great for 1-dimensional layouts, while Grid excels at 2-dimensional layouts.",
  },
  {
    title: "Introduction to React",
    content: "React is a JavaScript library for building user interfaces.",
  },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const highlightText = (text, highlight) => {
    if (!highlight) {
      return text;
    }

    const regex = new RegExp(`(${highlight})`, "gi");
    return text.split(regex).map((part, index) => {
      if (part.toLowerCase() === highlight.toLowerCase()) {
        return (
          <span key={index} className="highlight">
            {part}
          </span>
        );
      } else {
        return part;
      }
    });
  };

  const filteredArticles= articles.filter(
    (article)=> 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="main-container">
      <h1>Search Articles</h1>
      <input type="text" placeholder="Search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} className="search-input"  />

      <div className="articles">
        {filteredArticles.map((article, index) => (
          <div key={index} className="article">
            <h2>{highlightText(article.title, searchTerm)}</h2>
            <p>{highlightText(article.content, searchTerm)}</p>
          </div>
        ))}
        {filteredArticles.length === 0 && (
          <p className="no-result">No articles found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
