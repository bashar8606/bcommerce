"use client";
import FilterCheckBox from "../FilterCheckBox";
import FilterPriceRange from "../FilterPriceRange";

export default function FilterSideBar({ data, catId }) {
  console.log(data, "asdasdad");
  return (
    <div className="">
      <h2 className="text-md font-semibold">FILTERS {catId}</h2>
      <FilterPriceRange />
      {data?.attributes?.map((item, i) => {
        return <FilterCheckBox key={i} data={item} />;
      })}
    </div>
  );
}
