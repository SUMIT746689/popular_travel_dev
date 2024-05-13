import { FC } from "react";
import { SlArrowDown } from "react-icons/sl";
type SelectFieldWrapperType = {
    placeholder: string
}
export const SelectFieldWrapper: FC<SelectFieldWrapperType> = ({ placeholder }) => {
    return (
        <>
            <div className="relative max-w-sm">
                <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                    <SlArrowDown className=" text-xs font-bold" />
                </div>

                <select id="countries" className=" appearance-none bg-white border border-gray-900 text-gray-900 text-sm  block w-full p-2.5">
                    <option selected>{placeholder || 'Choose a country'}</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
            </div>
        </>
    )
}