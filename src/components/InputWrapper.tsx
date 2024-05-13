import { FC } from "react";
import { FaRegCalendarMinus } from "react-icons/fa";

type InputWrapperType = {
    name: string;
    placeholder: string;
    value: string;
    handleChange: (arg: React.FormEvent<HTMLInputElement>) => void;
}
export const InputWrapper: FC<InputWrapperType> = ({ name, placeholder, value, handleChange }) => {
    return (
        <>
            <input className=" p-2 border border-gray-500 text-sm" name={name} placeholder={placeholder} value={value} onChange={handleChange} />
        </>
    )
}

export const DateInputWrapper = () => {
    return (
        <>
            <div className="relative max-w-sm">
                <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                    <FaRegCalendarMinus className=" text-xl font-medium" />
                </div>
                <input datepicker-autohide type="text" className="bg-gray-50 border rounded-none border-gray-700 text-gray-900 text-sm block w-full pe-10 p-2.5 " placeholder="Select date" />
            </div>
        </>
    )
}