import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";

import { FaHome, FaPhone, FaRocket, FaUser } from "react-icons/fa";

import { Menu, MenuItem, MenuDivider } from "@/components/edithspace-ui/Menu";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="flex justify-between px-5 py-4 w-full bg-zinc-950 items-center">
        <div>
          <Image src="/edithspace-logo.png" alt="edithspaceUI" width={35} height={35} />
        </div>
        <div className="flex items-center">
          <div className="relative">
            <button
              className="p-[4px] hover:bg-white hover:bg-opacity-10 items-center justify-center transition-all opacity-80 hover:opacity-100 rounded-md hidden  max-[650px]:flex"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75M2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8m6 4.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <Menu
              className="max-[650px]:flex hidden w-fit"
              onOpen={toggleMenu}
              onClose={toggleMenu}
              isOpen={menuOpen}
            >
              <MenuItem>
                <Link
                  href="#"
                  className="flex items-center gap-3 h-full w-full"
                >
                  <FaHome /> Home
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="#"
                  className="flex items-center gap-3 h-full w-full"
                >
                  <FaUser /> About
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="#"
                  className="flex items-center gap-3 h-full w-full"
                >
                  <FaRocket /> Projects
                </Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Link
                  href="#"
                  className="flex items-center gap-3 h-full w-full"
                >
                  <FaPhone /> Contact
                </Link>
              </MenuItem>
            </Menu>
          </div>
          <ul className="flex items-center justify-center text-[14px] gap-7 max-[650px]:hidden">
            <li>
              <Link
                href="#"
                className="opacity-80 hover:opacity-100 hover:underline transition-all"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="opacity-80 hover:opacity-100 hover:underline transition-all"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="opacity-80 hover:opacity-100 hover:underline transition-all"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="opacity-80 hover:opacity-100 hover:underline transition-all"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

const navbar = () => {
  return (
    <>
      <DocsSEO
        title="Navbar - edithspace/ui"
        description="A navbar component for navigation through website."
        image="https://i.imgur.com/PepLjQG.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Navbar"
            description="A navbar component for navigation through website."
          />
          <DocsPreview className="flex items-start justify-start h-[30rem]">
            <Navbar />
          </DocsPreview>
          <InstallationSteps
            title="Complete Code"
            component={["Menu"]}
            imports={["Menu, MenuItem, MenuDivider"]}
          />
          <CodeBlock
            free
            filename="Navbar.tsx"
            lang="tsx"
            code={`import { useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";

import { FaHome, FaPhone, FaRocket, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="flex justify-between px-5 py-4 w-full bg-zinc-950 items-center">
        <div>
          <Image src="/edithspace-logo.png" alt="edithspaceUI" width={35} height={35} />
        </div>
        <div className="flex items-center">
          <div className="relative">
            <button
              className="p-[4px] hover:bg-white hover:bg-opacity-10 items-center justify-center transition-all opacity-80 hover:opacity-100 rounded-md hidden  max-[650px]:flex"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75M2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8m6 4.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <Menu
              className="max-[650px]:flex hidden w-fit"
              onOpen={toggleMenu}
              onClose={toggleMenu}
              isOpen={menuOpen}
            >
              <MenuItem>
                <Link
                  href="#"
                  className="flex items-center gap-3 h-full w-full"
                >
                  <FaHome /> Home
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="#"
                  className="flex items-center gap-3 h-full w-full"
                >
                  <FaUser /> About
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="#"
                  className="flex items-center gap-3 h-full w-full"
                >
                  <FaRocket /> Projects
                </Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Link
                  href="#"
                  className="flex items-center gap-3 h-full w-full"
                >
                  <FaPhone /> Contact
                </Link>
              </MenuItem>
            </Menu>
          </div>
          <ul className="flex items-center justify-center text-[14px] gap-7 max-[650px]:hidden">
            <li>
              <Link
                href="#"
                className="opacity-80 hover:opacity-100 hover:underline transition-all"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="opacity-80 hover:opacity-100 hover:underline transition-all"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="opacity-80 hover:opacity-100 hover:underline transition-all"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="opacity-80 hover:opacity-100 hover:underline transition-all"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};`}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default navbar;
