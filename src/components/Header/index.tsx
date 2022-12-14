import React from "react";
import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="bg-stone-800 text-white">
      <Popover className="relative bg-stone-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <LockClosedIcon className="h-8 w-auto sm:h-10 text-white" />
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-stone-800 p-2 text-gray-400 hover:bg-gray-100 hover:text-stone-800 focus:outline-none focus:ring-2 focus:ring-inset">
                <span className="sr-only">Abrir menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Link
                href="/"
                className="text-base font-medium text-gray-500 hover:text-white"
              >
                Inicio
              </Link>
              <Link
                href="/generate_keys"
                className="text-base font-medium text-gray-500 hover:text-white"
              >
                Gerar chave
              </Link>
              <Link
                href="/encrypt"
                className="text-base font-medium text-gray-500 hover:text-white"
              >
                Criptografar
              </Link>
              <Link
                href="/decrypt"
                className="text-base font-medium text-gray-500 hover:text-white"
              >
                Descriptografar
              </Link>
            </Popover.Group>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform transition md:hidden"
          >
            <div className="divide-gray-50 rounded-lg bg-stone-800 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <LockClosedIcon
                      width={50}
                      height={50}
                      className="h-8 w-auto sm:h-10"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-stone-800 p-2 text-gray-400 hover:bg-gray-100 hover:text-stone-800 focus:outline-none focus:ring-2 focus:ring-inset">
                      <span className="sr-only">Fechar menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                  <Link
                    href="/"
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50 hover:text-black"
                  >
                    Inicio
                  </Link>

                  <Link
                    href="/generate_keys"
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50 hover:text-black"
                  >
                    Gerar chave
                  </Link>

                  <Link
                    href="/encrypt"
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50 hover:text-black"
                  >
                    Criptografar
                  </Link>

                  <Link
                    href="/decrypt"
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50 hover:text-black"
                  >
                    Descriptografar
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}
