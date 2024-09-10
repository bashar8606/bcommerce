"use client";

import CategoryBlock from "../CategoryBlock";

export default function CategoriesWidget({}) {
  return (
    <section className="py-12 bg-[#F8F8F8]">
      <div className="container">
        <h3 className=" text-black text-2xl font-semibold leading-normal mb-6">
          All Categories
        </h3>

        <div className="grid grid-cols-3 gap-5">
          {datas?.map((item, i)=>{
            return(
              <div key={i}>
                <CategoryBlock data={i}/>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
const datas=[
  {
    title:"Abayas",
    img:"",
    categories:[
      {
        title:""
      },
    ]
  },
  {
    title:"Jalabiyas",
    img:"",
    categories:[
      {
        title:""
      },
    ]
  },
  {
    title:"Dresses",
    img:"",
    categories:[
      {
        title:""
      },
    ]
  },
  {
    title:"Newborn",
    img:"",
    categories:[
      {
        title:""
      },
    ]
  },
  {
    title:"Party",
    img:"",
    categories:[
      {
        title:""
      },
    ]
  },
  {
    title:"Lingerie",
    img:"",
    categories:[
      {
        title:""
      },
    ]
  },
]