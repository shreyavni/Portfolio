"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BriefcaseBusiness,
  FolderKanban,
  House,
  Mail,
  Search,
  UserRound,
} from "lucide-react";

const navItems = [
  ["Home", "/", House],
  ["Projects", "/projects", FolderKanban],
  ["Experience", "/experience", BriefcaseBusiness],
  ["Tools", "/tools", Search],
  ["About", "/about", UserRound],
  ["Contact", "/contact", Mail],
] as const;

const socials = [
  ["Email", "mailto:avnireeta@gmail.com", "@"],
  ["Github", "https://github.com/shreyavni", "GH"],
] as const;

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r border-zinc-800 bg-zinc-950 px-6 py-8 text-zinc-100 max-md:static max-md:w-full max-md:border-r-0 max-md:border-b max-md:px-4 max-md:py-4">
      <div className="border-b border-zinc-800 px-2 pb-6 text-center">
        <strong className="mt-4 block text-2xl font-semibold tracking-[-0.03em] text-zinc-100">
          Avni Shukla
        </strong>
        <span className="mx-auto my-3 block h-px w-10 bg-emerald-300/70" />
        <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
          AI / ML Engineer
        </span>
      </div>
      <nav
        className="mt-8 grid gap-2 max-md:mt-4 max-md:flex max-md:flex-wrap"
        aria-label="Primary navigation"
      >
        {navItems.map(([label, href, Icon]) => {
          const active =
            pathname === href ||
            (href !== "/" && pathname.startsWith(`${href}/`));
          return (
            <Link
              className={`flex items-center gap-3 rounded-lg px-3 py-3 text-base transition-colors hover:bg-zinc-800 ${active ? "bg-zinc-800 text-white" : "text-zinc-300"}`}
              href={href}
              key={label}
            >
              <span aria-hidden="true" className="flex w-5 justify-center">
                <Icon size={18} strokeWidth={1.8} />
              </span>
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto grid gap-3 max-md:hidden">
        <span className="text-sm text-zinc-500">Connect</span>
        {socials.map(([label, href, icon]) => (
          <a
            className="flex items-center gap-3 text-base text-zinc-300 hover:text-white"
            href={href}
            key={label}
            target="_blank"
            rel="noreferrer"
          >
            <b className="flex w-5 justify-center text-xs font-semibold">
              {icon}
            </b>
            {label}
          </a>
        ))}
      </div>
      <p className="mt-8 text-xs text-zinc-500 max-md:hidden">
        Made by Avni | © 2026
      </p>
    </aside>
  );
}
