import { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/kanban/logo.svg";
import {
  ClipboardIcon,
  UsersIcon,
  DocumentTextIcon,
  CogIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";

interface Menu {
  icon: ReactNode;
  legend: any;
}

const menu: Array<Menu> = [
  {
    icon: <ClipboardIcon className="h-8 w-8" />,
    legend: <span className="max-md:hidden">Boards</span>,
  },
  {
    icon: <UsersIcon className="h-8 w-8" />,
    legend: <span className="max-md:hidden">Equipes</span>,
  },
  {
    icon: <DocumentTextIcon className="h-8 w-8" />,
    legend: <span className="max-md:hidden">Relatórios</span>,
  },
  {
    icon: <CogIcon className="h-8 w-8" />,
    legend: <span className="max-md:hidden">Ajustes</span>,
  },
];

export function Navbar() {
  return (
    <nav className="min-w-[11.5rem] px-12 pb-0 pt-12 max-md:min-w-[8rem]">
      <Image src={Logo} alt="Logo" />

      <ul className="mt-24 grid gap-14 ">
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <a
                href="#"
                className={clsx(
                  "flex items-center gap-6 rounded font-medium text-[#cab3ff] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#9f67ff] [&.active]:text-white",
                  {
                    active: index === 0,
                  }
                )}
              >
                {item.icon}
                {item.legend}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
