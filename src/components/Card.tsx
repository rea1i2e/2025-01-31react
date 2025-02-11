import './Card.css'

type CardProps = {
  thumbnail: string;
  alt: string;
  title: string;
  description: string;
  category?: string; // なくてもOK
};

const Card: React.FC<CardProps> = ({ thumbnail, alt, title, description, category }) => {
  return (
    <li className="p-cards__item">
      <figure className="p-cards__image">
        <img src={thumbnail} alt={alt} />   
      </figure>
      <div className="p-cards__content">
        <h3 className="p-cards__title">{title}</h3>
        <p className="p-cards__description">{description}</p>
        <p className="p-cards__category">{category}</p>
      </div>
    </li>
  );
};

export default Card;