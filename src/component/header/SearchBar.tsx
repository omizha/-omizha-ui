import React, { CSSProperties } from 'react';

interface SearchBarProps {
  backgroundColor: CSSProperties['backgroundColor'];
  onEnter: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({}) => {
  return <input type={'search'} />;
};

export default SearchBar;
