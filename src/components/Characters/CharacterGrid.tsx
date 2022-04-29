import React from 'react';
import Spinner from '../ui/Spinner';
import CharacterItem from './CharacterItem';

interface CharacterGridProps {
  isLoading: boolean;
  items: any[];
}

export default function CharacterGrid(props: CharacterGridProps) {
  return props.isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {props.items.map((item) => {
        return <CharacterItem key={item.char_id} item={item} />;
      })}
    </section>
  );
}
