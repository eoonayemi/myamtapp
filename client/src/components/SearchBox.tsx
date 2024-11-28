import { Search } from "../assets/icons";

const SearchBox = () => {
  return (
    <div className="flex items-center justify-center bg-white-shade001 gap-2 rounded-full overflow-hidden h-[50px] px-5">
      <Search className="text-[#a7bbd2] text-[18px] h-5" />
      <input
        type="text"
        placeholder="Search for something"
        className="placeholder:text-[#a7bbd2] placeholder:text-[14px] h-5 outline-none w-[80%] p-0 bg-transparent text-[14px]"
      />
    </div>
  );
};

export default SearchBox;
