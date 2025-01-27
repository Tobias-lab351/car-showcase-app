"use client";

import { useState } from "react";
import Image from "next/image";

import { calculateCarRent } from "@/utils";
import { CarProps } from "@/types";
import CustomButton from "./CustomButton";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  return;
  <div className="car-card group">
    <div className="car-card__content">
      <h2 className="car-card__content-title">
        {make} {model}
      </h2>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px]">$</span>
        {carRent}
        <span className="self-end text-[14px]">/Day</span>
      </p>
    </div>
  </div>;
};
export default CarCard;
