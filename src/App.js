import { useState, useEffect } from "react";
import axios from "axios";

import ArticleList from "./components/ArticleList";

export default function App() {
  const [data, setData] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=6e944d8bf1d5468dacdf007e00822847`
        );
        setData(response.data);
        setArticles(response.data.articles);        
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
        setArticles(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>      
      {loading && 
        <div>A moment please...</div>
      }
      {error && (
        <div>{`There is a problem fetching the articles - ${error}`}</div>
      )}
      <ul>
        <ArticleList articles={articles}/>                  
      </ul>
    </>
  );
}
