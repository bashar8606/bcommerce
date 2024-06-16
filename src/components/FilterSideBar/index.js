import FilterCheckBox from "../FilterCheckBox";
import FilterPriceRange from "../FilterPriceRange";

export default function FilterSideBar() {
    return (
        <div className="">
                <h2 className="text-lg font-semibold">FILTERS</h2>
                <FilterPriceRange/>
                <FilterCheckBox/>
        </div>
    )
}