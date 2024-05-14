import { DateInputWrapper, InputWrapper } from "@/components/InputWrapper"
import { SelectFieldWrapper } from "@/components/SelectFieldWrapper"
import { useState } from "react";

const FilterSection = () => {
    const [values, setValues] = useState<any>({});
  
    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        // @ts-ignore
        const name = event.target.name
        // @ts-ignore
        const value = event.target.value;
        setValues((values: any) => ({ ...values, [name]: value }))
    }
    return (
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
    )
}

export default FilterSection