import { FaAngleDown } from "react-icons/fa6";
import {
  MdLockOutline,
  MdOutlineAccountCircle,
  MdOutlineMessage,
} from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { CiCreditCard1 } from "react-icons/ci";

export default async function Loading() {
  return (
    <section className="w-full h-full text-lg relative">
      <h2 className="text-5xl mb-4">Personal info</h2>
      <div>
        <div className="flex justify-between items-center h-[60px] border border-gray-300 border-t-transparent border-l-transparent border-r-transparent px-4">
          <div className="flex items-center">
            <MdOutlineAccountCircle className="mr-4" />
            <h3>Personal info</h3>
          </div>
          <FaAngleDown className="text-sm" />
        </div>
        <div className="flex justify-between items-center h-[60px] border border-gray-300 border-t-transparent border-l-transparent border-r-transparent px-4">
          <div className="flex items-center">
            <BsBoxSeam className="mr-4" />
            <h3>My order recipient</h3>
          </div>
          <FaAngleDown className="text-sm" />
        </div>
        <div className="flex justify-between items-center h-[60px] border border-gray-300 border-t-transparent border-l-transparent border-r-transparent px-4">
          <div className="flex items-center">
            <MdOutlineMessage className="mr-4" />
            <h3>Contacts</h3>
          </div>
          <FaAngleDown className="text-sm" />
        </div>
        <div className="flex justify-between items-center h-[60px] border border-gray-300 border-t-transparent border-l-transparent border-r-transparent px-4">
          <div className="flex items-center">
            <TbTruckDelivery className="mr-4" />
            <h3>Delivery address</h3>
          </div>
          <FaAngleDown className="text-sm" />
        </div>
        <div className="flex justify-between items-center h-[60px] border border-gray-300 border-t-transparent border-l-transparent border-r-transparent px-4">
          <div className="flex items-center">
            <CiCreditCard1 className="mr-4" />
            <h3>Link a card</h3>
          </div>
          <FaAngleDown className="text-sm" />
        </div>
        <div className="flex justify-between items-center h-[60px] border border-gray-300 border-t-transparent border-l-transparent border-r-transparent px-4">
          <div className="flex items-center">
            <MdLockOutline className="mr-4" />
            <h3>Login</h3>
          </div>
          <FaAngleDown className="text-sm" />
        </div>
      </div>
      <button className="absolute right-0 -bottom-16 py-2 px-8 bg-rose-600 rounded-full text-white font-sans">
        Logout
      </button>
    </section>
  );
}
