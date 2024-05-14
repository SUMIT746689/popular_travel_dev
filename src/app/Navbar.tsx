import Image from "next/image";
import { IoNotificationsOutline } from "react-icons/io5";
import { ContainerWrapper } from "../components/ContainerWrapper";

const Navbar = () => {
    return (
        <div className="bg-slate-800 ">
            <ContainerWrapper>
                <div className=" text-slate-200 flex justify-between">
                    <div className=" flex gap-x-4 text-sm ">
                        <div className=" px-4 py-4 hover:bg-slate-700 cursor-pointer">Dashboard   </div>
                        <div className=" px-4 py-4 hover:bg-slate-700 cursor-pointer">Master Price</div>
                        <div className=" px-4 py-4 hover:bg-slate-700 cursor-pointer">Custom Price</div>
                        <div className=" px-4 py-4 hover:bg-slate-700 cursor-pointer">Calendar    </div>
                        <div className=" px-4 py-4 hover:bg-slate-700 cursor-pointer">Reports     </div>
                    </div>
                    <div className=" my-auto flex gap-x-4">
                        <IoNotificationsOutline size="20px" className="my-auto h-6 w-6 text-gray-200" />
                        <div className=" flex justify-center rounded-full bg-white w-8 h-8 overflow-hidden my-auto">
                            <Image src="/mehedi.png" alt="profile" width="28" height="28" className=" border w-8 h-8 object-cover" />
                        </div>
                    </div>
                </div>
            </ContainerWrapper>
        </div>
    );

}

export default Navbar