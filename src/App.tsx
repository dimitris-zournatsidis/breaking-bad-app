import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import axios from 'axios';
import CharacterGrid from './components/Characters/CharacterGrid/CharacterGrid';
import Header from './components/ui/Header/Header';
import Search from './components/ui/Search/Search';

const URL = `https://www.breakingbadapi.com/api/characters`;

function App() {
  const [items, setItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filteredData = useMemo(() => getFilteredData(), [searchTerm, items]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(URL);
      console.log('data!!!', result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  function getFilteredData() {
    const filteredData = items.filter((item) => {
      if (searchTerm === '') {
        return item;
      } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return item;
      } else {
        return '';
      }
    });
    return filteredData;
  }

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setSearchTerm(q)} />
      <CharacterGrid items={filteredData} isLoading={isLoading} />
    </div>
  );
}

export default App;
