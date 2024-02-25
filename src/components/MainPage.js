import React, { useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import './MainPage.css';

const MainPage = (store) => {
  const { searchField, onSearchChange, onRequestRobots, robots, isPending } =
    store;

  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return isPending ? (
    <h1>Loading</h1>
  ) : (
    <div className='tc'>
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />;
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

export default MainPage;
