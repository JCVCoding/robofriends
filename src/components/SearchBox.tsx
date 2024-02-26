import { StoreData } from './MainPage';

const SearchBox = ({
  searchChange,
}: {
  searchChange: StoreData['onSearchChange'];
}) => {
  return (
    <div className='pa2'>
      <input
        aria-label='Search Robots'
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
