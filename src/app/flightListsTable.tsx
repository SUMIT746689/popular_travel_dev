import { SelectButtonWrapper } from "@/components/ButtonWrapper"
import { FlightDatasTypes } from "@/types/homePageTypes"
import { FC } from "react"

type FlightListTableType = {
    flightDatas: FlightDatasTypes
}

export const FlightListTable: FC<FlightListTableType> = ({ flightDatas }) => {

    return (
        <div>
            <div className=" text-xs">{flightDatas?.message}</div>
            <div className=" py-4">
                <table className=" text-xs text-gray-600 border w-full">
                    <thead className=" px-4 bg-gray-200">
                        <tr className=" uppercase border">
                            <td className="p-2">flight</td>
                            <td className="p-2">aircraft</td>
                            <td className="p-2">class</td>
                            <td className="p-2">fare</td>
                            <td className="p-2">route</td>
                            <td className="p-2">departure</td>
                            <td className="p-2">arrival</td>
                            <td></td>
                            <td className="p-2">duration</td>
                            <td className="p-2 text-center">price</td>
                        </tr>
                    </thead>

                    <tbody className=" text-gray-500">
                        {
                            flightDatas?.flightOffer?.map((flight, index) => (
                                <tr key={index} className=" text-start border-b border-red-300 even:bg-gray-200 py-2" style={{ paddingBottom: "2em" }}>
                                    <td className="px-2 border-b-red-100 ">
                                        {
                                            flight.itineraries[0].segments.map((segment, index) => <div key={index}> {segment.carrierCode} {segment.flightNumber}</div>)
                                        }
                                    </td>
                                    <td className="px-2">
                                        {
                                            flight.itineraries[0].segments.map((segment, index) => <div key={index}> {segment.aircraft}</div>)
                                        }
                                    </td>
                                    <td className="px-2">
                                        {flight.class[0].map((fare, index) => <div key={index}>{fare}</div>)}
                                    </td>
                                    <td className="px-2">
                                        {flight.fareBasis[0].map((fare, index) => <div key={index}>{fare}</div>)}
                                    </td>
                                    <td className="px-2">
                                        {
                                            flight.itineraries[0].segments.map((segment, index) => <div key={index}> {segment.arrival.iataCode} - {segment.departure.iataCode}</div>)
                                        }
                                    </td>
                                    <td className="px-2">
                                        {
                                            flight.itineraries[0].segments.map((segment, index) => <div key={index}>{segment.departure.at}</div>)
                                        }
                                    </td>
                                    <td className="px-2">
                                        {
                                            flight.itineraries[0].segments.map((segment, index) => <div key={index}> {segment.arrival.at}</div>)
                                        }
                                    </td>
                                    <td className="px-4">
                                        {
                                            flight.itineraries[0].segments.map((segment, index) => <div key={index}> ---- </div>)
                                        }
                                    </td>
                                    <td className=" px-2 flex">{flight.itineraries[0].duration}</td>
                                    <td className="px-2">
                                        <div className="flex justify-center flex-col items-center">
                                            <div className=" text-center">{flight.price}</div>
                                            <SelectButtonWrapper handleClick={() => { }}> Select </SelectButtonWrapper>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}