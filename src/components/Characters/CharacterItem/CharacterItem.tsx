import './CharacterItem.css';

interface CharacterItemProp {
  item: any;
}

export default function CharacterItem(props: CharacterItemProp) {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={props.item.img} alt='char-img' />
        </div>
        <div className='card-back'>
          <h1>{props.item.name}</h1>
          <ul>
            <li>
              <strong>Nickname: </strong>
              <span>{props.item.nickname}</span>
            </li>
            <li>
              <strong>Occupation: </strong>
              <span>{props.item.occupation.join(', ')}</span>
            </li>
            <li>
              <strong>Status: </strong>
              <span>{props.item.status}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
