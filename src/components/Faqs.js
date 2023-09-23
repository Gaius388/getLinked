/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Disclosure } from "@headlessui/react";
import { FiPlus, FiMinus } from "react-icons/fi";

const Faqs = () => {
  return (
    <div className="font-montserrat ">
      <Disclosure>
        {({ open }) => (
          <div className="relative">
            <Disclosure.Button className="flex justify-between gap-4 w-full rounded-lg p-4 text-left text-[16px] font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span className="capitalize text-sm">
                Can I work on a project I started before the hackathon?
              </span>
              {open ? (
                <FiMinus className="h-4 w-4 text-[#D434FE]" />
              ) : (
                <FiPlus className="h-4 w-4 text-[#D434FE]" />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
              test2
            </Disclosure.Panel>
            <div className="h-[1px] bottom-0 bg-gradient-to-r from-transparent via-purple-600 to-transparent w-full absolute"></div>
          </div>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <div className="relative">
            <Disclosure.Button className="flex justify-between gap-4 w-full rounded-lg p-4 pt-6 text-left text-[16px] font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span className="capitalize text-sm">
                What happens if I need help during the hackathon?
              </span>
              {open ? (
                <FiMinus className="h-4 w-4 text-[#D434FE]" />
              ) : (
                <FiPlus className="h-4 w-4 text-[#D434FE]" />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
              test2
            </Disclosure.Panel>
            <div className="h-[1px] bottom-0 bg-gradient-to-r from-transparent via-purple-600 to-transparent w-full absolute"></div>
          </div>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <div className="relative">
            <Disclosure.Button className="flex justify-between gap-4 w-full rounded-lg p-4 pt-6 text-left text-[16px] font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span className="capitalize text-sm">
                What happens if I don't have an idea for a project?
              </span>
              {open ? (
                <FiMinus className="h-4 w-4 text-[#D434FE]" />
              ) : (
                <FiPlus className="h-4 w-4 text-[#D434FE]" />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
              test2
            </Disclosure.Panel>
            <div className="h-[1px] bottom-0 bg-gradient-to-r from-transparent via-purple-600 to-transparent w-full absolute"></div>
          </div>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <div className="relative">
            <Disclosure.Button className="flex justify-between gap-4 w-full rounded-lg p-4 pt-6 text-left text-[16px] font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span className="capitalize text-sm">
                Can I join a team or do I have to come with one?
              </span>
              {open ? (
                <FiMinus className="h-4 w-4 text-[#D434FE]" />
              ) : (
                <FiPlus className="h-4 w-4 text-[#D434FE]" />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
              test2
            </Disclosure.Panel>
            <div className="h-[1px] bottom-0 bg-gradient-to-r from-transparent via-purple-600 to-transparent w-full absolute"></div>
          </div>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <div className="relative">
            <Disclosure.Button className="flex justify-between gap-4 w-full rounded-lg p-4 pt-6 text-left text-[16px] font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span className="capitalize text-sm">
                What happens after the hackathon ends
              </span>
              {open ? (
                <FiMinus className="h-4 w-4 text-[#D434FE]" />
              ) : (
                <FiPlus className="h-4 w-4 text-[#D434FE]" />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
              test2
            </Disclosure.Panel>
            <div className="h-[1px] bottom-0 bg-gradient-to-r from-transparent via-purple-600 to-transparent w-full absolute"></div>
          </div>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <div className="relative">
            <Disclosure.Button className="flex justify-between gap-4 w-full rounded-lg p-4 pt-6 text-left text-[16px] font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span className="capitalize text-sm">
                Can I work on a project I started before the hackathon?
              </span>
              {open ? (
                <FiMinus className="h-4 w-4 text-[#D434FE]" />
              ) : (
                <FiPlus className="h-4 w-4 text-[#D434FE]" />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-white">
              test2
            </Disclosure.Panel>
            <div className="h-[1px] bottom-0 bg-gradient-to-r from-transparent via-purple-600 to-transparent w-full absolute"></div>
          </div>
        )}
      </Disclosure>
    </div>
  );
}

export default Faqs