import Card from './Card';
import { Robot } from './MainPage';

const CardList = ({ robots }: { robots: Robot[] }) => {
  return robots.map(({ name, email, id }) => (
    <Card name={name} email={email} id={id} key={`${name}_${id}`} />
  ));
};

export default CardList;
