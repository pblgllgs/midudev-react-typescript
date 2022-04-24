import { Sub } from '../interfaces/interfaces';

interface ListProps {
  subs: Sub[];
}

export const List = ({ subs }: ListProps) => {
  const renderList = (): JSX.Element[] => {
    return subs.map((sub) => {
      return (
        <li key={sub.nick}>
          <img src={sub.avatar} alt={`Avatar para: ${sub.nick}`} />
          <h4>{sub.nick}</h4>
          <p>{sub.description?.substring(0, 100)}</p>
        </li>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};
