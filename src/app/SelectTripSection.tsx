import { useState } from "react"

const SelectTrip = () => {
    const [selectTripType, setSelectTripType] = useState<string>('one_way')

    return (
        <div className="flex justify-center py-2 border-b border-sky-500 rounded-sm text-xs font-medium font-sans ">
            <button className={`${selectTripType === 'round_trip' && 'bg-indigo-900 text-white'} px-4 py-[3px] border cursor-pointer border-indigo-900`} onClick={() => setSelectTripType('round_trip')}>Round Trip</button>
            <button className={`${selectTripType === 'one_way' && 'bg-indigo-900 text-white'} px-4 py-[3px] border cursor-pointer border-indigo-900`} onClick={() => setSelectTripType('one_way')}>One Way   </button>
            <button className={`${selectTripType === 'multi_city' && 'bg-indigo-900 text-white'} px-4 py-[3px] border cursor-pointer border-indigo-900`} onClick={() => setSelectTripType('multi_city')}>Multi City</button>
        </div>
    )
}

export default SelectTrip