import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import axios from 'axios';
import CharacterGrid from './components/Characters/CharacterGrid/CharacterGrid';
import Header from './components/ui/Header/Header';
import Search from './components/ui/Search/Search';
import Pagination from './components/ui/Pagination/Pagination';

const URL = `https://www.breakingbadapi.com/api/characters`;

function App() {
  const [items, setItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Get current items for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filteredData = useMemo(() => getFilteredData(), [searchTerm, items]);

  useEffect(() => {
    async function fetchItems() {
      const result = await axios(URL);
      console.log('data!!!', result.data);
      setItems(result.data);
      setIsLoading(false);
    }
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

  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
    // pageNumber is the 'number' from Pagination.tsx -> props.paginate(number)
  }

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setSearchTerm(q)} />
      {/* TODO: Comment in in order the search to work  */}
      {/* <CharacterGrid items={filteredData} isLoading={isLoading} /> */}
      <CharacterGrid items={currentItems} isLoading={isLoading} />

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
        currentIndex={currentPage - 1}
      />
    </div>
  );
}

export default App;
