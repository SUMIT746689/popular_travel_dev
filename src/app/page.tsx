"use client"
import { ContainerWrapper } from "@/components/ContainerWrapper";
import React, { useEffect, useState } from "react";
import { FlightListTable } from "./FlightListsTable";
import { FlightDatasTypes } from "@/types/homePageTypes";
import SelectTripSection from "./SelectTripSection";
import FilterSection from "./FilterSection";
import SearchSection from "./SearchSection";

export default function Home() {
  const [flightDatas, setFlightDatas] = useState<FlightDatasTypes>(null)
  const getData = () => {
    fetch('data/LHR_CDG_ADT1_TYPE_1.txt')
      .then((response) => response.json())
      .then((myJson) => {
        setFlightDatas(myJson)
      });
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      {/* heading */}
      <div className=" border-b">
        <ContainerWrapper>
          <h6 className=" text-2xl font-semibold">Master Price</h6>
        </ContainerWrapper>
      </div>

      <ContainerWrapper>
        {/* select trip section */}
        <SelectTripSection />

        {/* flight filter section  */}
        <FilterSection />

        {/* search flights */}
        <SearchSection />

        {/*flight datas list table  */}
        <FlightListTable flightDatas={flightDatas} />
      </ContainerWrapper>
    </>
  );
}
