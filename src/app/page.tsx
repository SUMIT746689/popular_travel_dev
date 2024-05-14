"use client"
import { ContainerWrapper } from "@/components/ContainerWrapper";
import { DateInputWrapper, InputWrapper } from "@/components/InputWrapper";
import React, { useState } from "react";
import { SearchButtonWrapper } from "@/components/ButtonWrapper";
import { FlightListTable } from "./FlightListsTable";
import { FlightDatasTypes } from "@/types/homePageTypes";
import { SelectFieldWrapper } from "@/components/SelectFieldWrapper";

export default function Home() {
  const [values, setValues] = useState<any>({});
  const [flightDatas, setFlightDatas] = useState<FlightDatasTypes>(null)
  const [selectTripType, setSelectTripType] = useState<string>('one_way')
  const getData = () => {
    fetch('data/LHR_CDG_ADT1_TYPE_1.txt')
      .then((response) => response.json())
      .then((myJson) => {
        setFlightDatas(myJson)
        console.log({ myJson });
      });
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    const name = event.target.name
    // @ts-ignore
    const value = event.target.value;
    setValues((values: any) => ({ ...values, [name]: value }))
  }
  const handleClick = () => {
    getData()
  }

  return (
    <>
      <div className=" border-b">
        <ContainerWrapper>
          <h6 className=" text-2xl font-semibold">Master Price</h6>
        </ContainerWrapper>
      </div>
      <ContainerWrapper>

        <div className="flex justify-center py-2 border-b border-sky-500 rounded-sm text-xs font-medium font-sans ">
          <button className={`${selectTripType === 'round_trip' && 'bg-indigo-900 text-white'} px-4 py-[3px] border cursor-pointer border-indigo-900`} onClick={() => setSelectTripType('round_trip')}>Round Trip</button>
          <button className={`${selectTripType === 'one_way' && 'bg-indigo-900 text-white'} px-4 py-[3px] border cursor-pointer border-indigo-900`} onClick={() => setSelectTripType('one_way')}>One Way   </button>
          <button className={`${selectTripType === 'multi_city' && 'bg-indigo-900 text-white'} px-4 py-[3px] border cursor-pointer border-indigo-900`} onClick={() => setSelectTripType('multi_city')}>Multi City</button>
        </div>

        <div className=" py-2 grid border-b border-sky-500 gap-x-2" style={{ display: "grid", gridTemplateColumns: "12.5% 12.5% 12.5% 7.5% 7.5% 12.5% 5% 10% 10% 5%" }}>
          <InputWrapper name={'lhr'} value={values.lhr} placeholder="LHR" handleChange={handleChange} />
          <InputWrapper name={'cdg'} value={values.cdg} placeholder="CDG" handleChange={handleChange} />
          <DateInputWrapper />
          <SelectFieldWrapper placeholder="Day -" />
          <SelectFieldWrapper placeholder="Day +" />
          <SelectFieldWrapper placeholder="Any Time" />
          <h1 className=" text-xl m-auto">+</h1>
          <SelectFieldWrapper placeholder="ADT" />
          <SelectFieldWrapper placeholder="1" />
          <h1 className=" text-xl m-auto">+</h1>
        </div>

{/*  */}
        <div className=" text-md font-medium text-black flex justify-between py-2 text-center border-b border-sky-500">
          <div className="flex gap-2 justify-center my-auto">
            <input type="checkbox" className=" my-auto rounded-none" />Extra Options
          </div>
          <div className="flex justify-center gap-x-2 my-auto">
            Environment
            <input type="radio" className="px-2 my-auto" /> Dummy
            <input type="radio" className="px-2 my-auto" /> PDT
          </div>
          <div>
            <SearchButtonWrapper handleClick={handleClick}>Search</SearchButtonWrapper>
          </div>
        </div>

        {/*flight datas list table  */}
        <FlightListTable flightDatas={flightDatas} />
      </ContainerWrapper>
    </>
  );
}
