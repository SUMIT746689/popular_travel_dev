import { FC, ReactNode } from "react"

type SearchButtonWrapperType = {
    children: ReactNode
    handleClick: () => void
}

export const SearchButtonWrapper: FC<SearchButtonWrapperType> = ({ children, handleClick }) => {
    return (
        <>
            <button onClick={handleClick} className=" rounded-[2.5px] text-white bg-indigo-900 px-4 py-2 uppercase text-[11px] font-semibold ">
                {children}
            </button>
        </>
    )
}


type SelectButtonWrapper = {
    children: ReactNode
}

export const SelectButtonWrapper: FC<SearchButtonWrapperType> = ({ children, handleClick }) => {
    return (
        <>
            <button onClick={handleClick} className=" w-fit rounded-[2.5px] text-white bg-indigo-900 px-3 py-1 uppercase text-[10px]">
                {children}
            </button>
        </>
    )
}