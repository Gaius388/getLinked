import Image from "next/image";
import Link from "next/link";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";
import menuOpen from "../../public/menuOpen.svg";
import menuClose from "../../public/menuClose.svg";

const navigation = [
  { name: "Timeline", to: "#timeline" },
  { name: "Overview", to: "#" },
  { name: "FAQs", to: "#faqs" },
  { name: "Contact", to: "/contact" },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const isPlanPage =
    router.pathname === "/plans" || router.pathname === "/signUpPay";
  return (
    <header
      className={`absolute inset-x-0 ${
        router.pathname === "/home" ? "top-[3.4em]" : "top-0"
      } z-50 font-axiforma bg-transparent text-white border border-b-white border-transparent border-opacity-20`}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-20"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <span className="sr-only">Your Company</span>
          <Link href={"/"} className="text-white font-bold text-3xl font-clash">
            get<span className="text-[#D434FE]">linked</span>
          </Link>
        </div>
        <div className="flex lg:hidden ml-auto">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Image src={menuOpen} alt="menu open" />
          </button>
        </div>
        {!isPlanPage && (
          <div className="hidden lg:flex lg:gap-x-12 font-montserrat">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.to}
                className={`text-sm leading-6  ${
                  router.pathname === item.to
                    ? "selection font-bold"
                    : "text-[#B7B7B7] font-semibold"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
        {/* </div> */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center font-semibold gap-6 text-md text-white font-montserrat">
          <Link
            href={"/register"}
            className="border text-white bg-gradient-to-r from-[#903AFF] to-[#FE34B9] border-none px-10 py-3 text-sm rounded-sm dropWhite"
          >
            Register
          </Link>{" "}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#150E28] px-6 pt-12 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end pb-6">
            <span className="sr-only">Your Company</span>
            {/* <Image className=" w-28" src={luraLogo} alt="lura logo" /> */}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              {/* <RiCloseLine className="text-4xl" aria-hidden="true" /> */}
              <Image src={menuClose} alt="menu close" />
            </button>
          </div>
          <div className="mt-6 flow-root font-montserrat">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className=" py-6 text-left">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.to}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-lg font-medium leading-7 ${
                      router.pathname === item.to
                        ? "text-white font-bold underline"
                        : "text-[#B7B7B7] font-semibold"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="">
                <div className="flex lg:flex-1 items-start mt-auto flex-col lg:flex-row font-semibold gap-3 text-lg text-white">
                  <Link
                    href={"/register"}
                    className="border text-white bg-[#D434FE] border-none px-10 py-3 text-sm rounded-sm dropWhite"
                  >
                    Register{" "}
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default NavBar;
