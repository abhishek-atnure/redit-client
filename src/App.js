import React, { useState, useEffect } from 'react'

import Navigation from '../src/components/naviagtion/naviagation';
import Posts from "./components/posts/posts";
import Subreddits from './components/subreddits/subreddits';

function App() {
  //useState values
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [querys, setQuerys] = useState('/best');
  const [subs, setSubs] = useState([]);

  //handles querys change on click
  const handleQuery = querys => setQuerys(prevQuery => querys)

  //sets querys value to /best on home click
  const handleHome = () => setQuerys('/best');

  //useEffect which fetches main posts
  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetch(`https://www.reddit.com${querys}.json?limit=50`);
      const response = await result.json();
      const data = response.data;
      setItems(data);
      setIsLoading(false)
    }
    fetchItems();
  }, [querys])

  //useEffect which fetches subreddits
  useEffect(() => {
    const fetchSubreddits = async () => {
      const fetchSub = await fetch(`https://www.reddit.com/subreddits.json`);
      const rawData = await fetchSub.json();
      const jsonData = rawData.data.children;
      setSubs(jsonData);
    }
    fetchSubreddits();
  }, []);

  //jsx to render
  return (
    <div className="App">
      <Navigation onClick={handleHome} />
      <Subreddits subs={subs} onChange={handleQuery} />
      <Posts isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
