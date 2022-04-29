import Spinner from '../../ui/Spinner/Spinner';
import CharacterItem from '../CharacterItem/CharacterItem';
import './CharacterGrid.css';

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
