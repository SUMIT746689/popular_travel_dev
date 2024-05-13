type SegmentsType = [{
    departure: {
        iataCode: string,
        at: string
    },
    arrival: {
        iataCode: string,
        at: string
    },
    marketingCarrier: string,
    carrierCode: string,
    flightNumber: string,
    aircraft: string
}]

type ItinerariesType = [{
    segments: SegmentsType;
    duration: string;
}]



export type FlightDatasTypes = {
        code: string;
        message: string;
        flightOffer:
        [{
            itineraries: ItinerariesType;
            price: string,
            fareBasis: [[string]],
            class: [[string]],
            seat: [[string]]
        }]
    } | null