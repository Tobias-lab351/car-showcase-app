

import Image from "next/image";

import { CustomFilter, Hero, SearchBar, CarCard, ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string};
}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer ?? "",
    year: Number(searchParams.year) || 2022,
    fuel: searchParams.fuel ?? "",
    limit: Number(searchParams.limit) || 10,
    model: searchParams.model ?? "",
  });

  const isDataEmpty = !allCars || !Array.isArray(allCars) || allCars.length < 1;


  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width " id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold ">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container z-10">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wraper">
              {allCars?.map((car) => (
                <CarCard car={car} key={car.id} />
              ))}
            </div>
         <ShowMore
  pageNumber={(Number(searchParams.page) || 1)}
  isNext={(Number(searchParams.limit) || 10) > allCars.length}
/>

          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-red-700 text-xl font-bold">
              Oops , no results
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
