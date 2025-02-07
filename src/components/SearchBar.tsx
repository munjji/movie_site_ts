import React from "react";

interface SearchBarProps {
  searchValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchValue,
  onChange,
  onClick,
  onKeyDown,
}) => {
  return (
    <div className="flex">
      <input
        type="text"
        value={searchValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="검색어를 입력해주세요!"
        className="flex-1 h-[50px] p-3 rounded-l-lg outline-none"
      />
      <button
        type="submit"
        onClick={onClick}
        className="w-[85px] h-[50px] rounded-r-lg bg-red-500 text-white px-3 py-3"
      >
        검색
      </button>
    </div>
  );
};

export default SearchBar;
