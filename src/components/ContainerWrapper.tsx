import { FC, ReactNode } from "react"

type ContainerWrapperType = {
    children: ReactNode
}
export const ContainerWrapper: FC<ContainerWrapperType> = ({ children }) => {
    return (
        <div className=" px-[30vh]">
            {children}
        </div>

    )
}