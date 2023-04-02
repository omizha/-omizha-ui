import React from 'react';
import { Default, DefaultProps } from '.';

interface SearchProps {
  onSearch?: () => void;
  className?: string;
}

const Search: React.FC<SearchProps & DefaultProps> = ({ onSearch, ...props }) => {
  return (
    <Default
      onKeyUp={(event) => {
        if (event.code === 'Enter' && event.currentTarget.value) {
          if (onSearch) onSearch();
        }
      }}
      {...props}
    />
  );
};

export default Search;
