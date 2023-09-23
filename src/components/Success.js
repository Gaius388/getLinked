import React, { Fragment, useRef } from "react";
import Image from "next/image";
import successMark from "../../public/successMark.png";
import congrats from "../../public/congrats.png";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";

const Success = ({ success, setSuccess }) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={success} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setSuccess}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#150E28] bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-60 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#150E28] text-left shadow-xl transition-all sm:my-8 w-5/6 lg:w-[45%] ">
                <div className="text-center grid justify-items-center border rounded-lg border-[#D434FE] p-8 text-white font-montserrat">
                  <div className="flex items-center">
                    <Image src={successMark} alt="success" className="-mr-12" />
                    <Image src={congrats} alt="man congrats" className="-ml-12"/>
                  </div>
                  <p className="text-xl fon font-semibold text-center ">
                    Congratulations <br /> you have successfully Registered!
                  </p>
                  <p className="text-xs font-medium font-montserrat mt-4">
                    Yes, it was easy and you did it! <br /> check your mail box
                    for next step😉
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-white bg-[#D434FE] rounded-sm text-sm py-2.5 font-montserrat mt-8 w-5/6 mx-auto"
                  >
                    Back
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Success;
