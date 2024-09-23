"use client";

import CategoryBlock from "../CategoryBlock";

export default function CategoriesWidget({}) {
  return (
    <section className="py-12 bg-[#F8F8F8]">
      <div className="container">
        <h3 className=" text-black text-base lg:text-2xl font-semibold leading-normal mb-6">
          All Categories
        </h3>

        <div className="grid grid-cols-3 gap-5">
          {datas?.map((item, i) => {
            return (
              <div key={i}>
                <div className="w-full h-full p-8 bg-gradient-to-b from-gray-200 to-orange-400 rounded-md flex-col justify-between items-start gap-24 inline-flex">
                  {/* <img
                    className="w-72 h-96"
                    src="https://via.placeholder.com/275x675"
                  /> */}
                  <h3 className="self-stretch text-white text-6xl 2xl:text-8xl font-black  capitalize ">
                    {item?.title}
                  </h3>
                  <div className=" justify-start items-start gap-2 flex flex-wrap max-w-[74%]">
                    <button className="px-3 py-2 bg-white/70 rounded-3xl   text-stone-950 text-sm">
                        Casual
                    </button>
                    <button className="px-3 py-2 bg-white/70 rounded-3xl  text-stone-950 text-sm">
                        Casual
                    </button>
                    <button className="px-3 py-2 bg-white/70 rounded-3xl text-stone-950 text-sm">
                        Casual
                    </button>
                    <button className="px-3 py-2 bg-white/70 rounded-3xl  text-stone-950 text-sm">
                        Casual
                    </button>
                    <button className="px-3 py-2 bg-white/70 rounded-3xl  text-stone-950 text-sm">
                        Casual
                    </button>
                    <button className="px-3 py-2 bg-white/70 rounded-3xl  text-stone-950 text-sm">
                        Casual
                    </button>
                    <button className="px-3 py-2 bg-white/70 rounded-3xl  text-stone-950 text-sm">
                        Casual
                    </button>
                    <button className="px-3 py-2 bg-white/70 rounded-3xl  text-stone-950 text-sm">
                        Casual
                    </button>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-5">
          {datas?.map((item, i) => {
            return (
              <div key={i}>
                <CategoryBlock data={i} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
const datas = [
  {
    title: "Abayas",
    img: "",
    categories: [
      {
        title: "",
      },
    ],
  },
  {
    title: "Jalabiyas",
    img: "",
    categories: [
      {
        title: "",
      },
    ],
  },
  {
    title: "Dresses",
    img: "",
    categories: [
      {
        title: "",
      },
    ],
  },
  {
    title: "Newborn",
    img: "",
    categories: [
      {
        title: "",
      },
    ],
  },
  {
    title: "Party",
    img: "",
    categories: [
      {
        title: "",
      },
    ],
  },
  {
    title: "Lingerie",
    img: "",
    categories: [
      {
        title: "",
      },
    ],
  },
];
