import "./App.css";

const articles = [
  { title: 'Basics of HTML and CSS', content: 'HTML and CSS are foundational technologies for creating web pages.' },
  { title: 'Using CSS for Layouts', content: 'CSS offers various tools for layouts, including Flexbox and Grid.' },
  { title: 'Getting Started with JavaScript', content: 'JavaScript is a versatile programming language for the web.' },
  { title: 'Understanding CSS Grid', content: 'CSS Grid is a powerful tool for creating layouts in web development.' },
  { title: 'Difference between Flexbox and Grid', content: 'Flexbox is great for 1-dimensional layouts, while Grid excels at 2-dimensional layouts.' },
  { title: 'Introduction to React', content: 'React is a JavaScript library for building user interfaces.' },
];


function App() {
  return (
    <div className="main-container">
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Search"
        className="search-input"
      />
    </div>
  );
}

export default App;
