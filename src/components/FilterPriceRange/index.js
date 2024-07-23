import { RangeSlider } from "../component/range-slider";

export default function FilterPriceRange() {
    return (
        <div className="border-b  py-3">
            <h2 className="text-sm font-semibold">Price</h2>
            <div className="flex items-center justify-center w-full">
                <RangeSlider />
            </div>
        </div>
    )
}