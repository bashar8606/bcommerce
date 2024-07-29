"use client"
import FilterCheckBox from "../FilterCheckBox";
import FilterPriceRange from "../FilterPriceRange";

export default function FilterSideBar({data}) {
    console.log(data,"asdasdad");
    return (
        <div className="">
            <h2 className="text-md font-semibold">FILTERS</h2>
            <FilterPriceRange />
            <FilterCheckBox />
            <FilterCheckBox />
            <FilterCheckBox />
            <FilterCheckBox />
        </div>
    )
}