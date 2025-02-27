import '../css/search.css'
const SearchFilters = () => {
  
  return (
    <div  className="search-filters">
      <input type="text" placeholder="Search events..." className="border p-2 w-full" />
      <select>
        <option>Category</option>
        <option>Music</option>
        <option>Sports</option>
        <option>Workshops</option>
      </select>
      <button>Search</button>
    </div>
  );
};

export default SearchFilters