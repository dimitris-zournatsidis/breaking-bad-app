import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';
import axios from 'axios';
import CharacterGrid from './components/Characters/CharacterGrid';
import Search from './components/ui/Search';

function App() {
  const [items, setItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [query, setQuery] = useState('');

  const [searchTerm, setSearchTerm] = useState('');

  // const URL = `https://www.breakingbadapi.com/api/characters?name=${query}`;
  const URL = `https://www.breakingbadapi.com/api/characters`;

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(URL);
      // console.log('data!!!', result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  const filteredData = items.filter((item) => {
    if (searchTerm === '') {
      return item;
    } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return '';
    }
  });

  return (
    <div className='container'>
      <Header />

      {/* <input
        type='text'
        // className='form-control'
        placeholder='Search...'
        onChange={(e) => setSearchTerm(e.target.value)}
      /> */}

      <Search getQuery={(q) => setSearchTerm(q)} />
      <CharacterGrid items={filteredData} isLoading={isLoading} />
    </div>
  );
}

export default App;
