"use client";
import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./slider.css";

export default function FilterPriceRange({
  filter,
  handleFilterChange,
  handlePriceChange,
}) {
  return (
    <div className="border-b  py-3 pr-4">
      <h2 className="text-base font-semibold mb-4">Price</h2>
      <div className="">
        {console.log(filter, "filtersfilters")}
        {filter !== undefined && (
          <RangeSlider
            id="range-slider"
            className="range-slider"
            thumbClassName="range-slider-thumb"
            trackClassName="range-slider-track"
            activeTrackClassName="range-slider-track"
            min={0}
            max={799}
            onInput={handlePriceChange}
            value={[filter?.minPrice, filter?.maxPrice]}
            defaultValue={[0, 799]}
          />
        )}
        <div className="flex justify-between mt-4">
          <input
            type="number"
            name="minPrice"
            className="px-2.5 py-1.5 border border-neutral-300  text-neutral-700 text-xs font-medium w-[70px] text-center"
            value={filter?.minPrice}
            onChange={handlePriceChange}
            placeholder="Min Price"
          />
          <input
            type="number"
            name="maxPrice"
             className="px-2.5 py-1.5 border border-neutral-300  text-neutral-700 text-xs font-medium w-[70px] text-center"
            value={filter?.maxPrice}
            onChange={handlePriceChange}
            placeholder="Max Price"
          />
        </div>
  
      </div>
    </div>
  );
}
