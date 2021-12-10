import { useState } from "react";
import "./App.css";
import BlogList from "./BlogList";

// BlogList from video: https://www.youtube.com/watch?v=PHaECbrKgs0 (Not using this)
// from video: https://www.youtube.com/watch?v=m7OWXtbiXX8 (using this)

function App() {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "Mario", id: 1 },
    {
      title: "Title number 2",
      body: "lorem ipsumus maximus",
      author: "Ben Aflec",
      id: 2,
    },
    {
      title: "Title number 3",
      body: "Random text",
      author: "Bob Superflec",
      id: 2,
    },
  ]);

  return (
    <div className="App">
      <BlogList blogs={blogs} bigtitle="Big title!" />
    </div>
  );
}

export default App;
