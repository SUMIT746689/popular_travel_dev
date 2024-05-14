import { SearchButtonWrapper } from "@/components/ButtonWrapper"


const SearchSection = () => {
    return (
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
                <SearchButtonWrapper handleClick={() => { }}>Search</SearchButtonWrapper>
            </div>
        </div>
    )
}
export default SearchSection