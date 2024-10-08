"use client";
import FilterCheckBox from "../FilterCheckBox";
import FilterPriceRange from "../FilterPriceRange";

export default function FilterSideBar({ data, catId, handleFilterChange,handleAttributeChange, filters, handlePriceChange }) {
  return (
    <div className="">
      <h2 className="text-md font-semibold">FILTERS</h2>
      
      <FilterPriceRange filter={filters}  handleFilterChange={handleFilterChange} handlePriceChange={handlePriceChange} />
      {data?.results?.attributes?.map((item, i) => {
        return <FilterCheckBox key={i} data={item} handleAttributeChange={handleAttributeChange}/>;
      })}
    </div>
  );
}
