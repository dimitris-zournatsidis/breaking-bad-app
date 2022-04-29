import React, { useState } from 'react';

interface SearchProps {
    getQuery: (query: string) => void;
}

export default function Search(props:SearchProps) {
  const [text, setText] = useState('');  

  function onChange(q: string) {
    setText(q);
    props.getQuery(q);
  }

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
}
