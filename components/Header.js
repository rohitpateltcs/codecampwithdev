"use client";
import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";

import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Link from "next/link";

const Header = () => {
  return (
    <div className="">
      <div className="p-4 flex justify-between items-center border-b-[2px] shadow-lg ">
        {/* Logo in mobile view */}
        {/* <div>
        <h1 className="bg-gray-300 text-blue-400">
          <span className="text-red-400">Luci</span>pher
        </h1>
      </div> */}

        {/* profile icons */}
        <div className="">
          <Image
            width={100}
            height={100}
            src="https://images.unsplash.com/photo-1674574124473-e91fdcabaefc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="h-12 w-12 rounded-full"
          />
        </div>

        {/* Menu Items for desktop version */}

        <div className={`lg:flex hidden  space-x-2 items-center`}>
          <Link href="/">
            <Tooltip title="Home">
              <IconButton>
                <img
                  src="https://img.icons8.com/ios/1x/home-page.png"
                  alt=""
                  className="menuIcons"
                />
                {/* <HomeOutlinedIcon  /> */}
              </IconButton>
            </Tooltip>
          </Link>

          <Link href="/blog">
            <Tooltip title="BLOG">
              <IconButton>
                <img
                  src="https://img.icons8.com/ios/1x/google-blog-search.png"
                  alt=""
                  className="menuIcons"
                />

                {/* <DeleteIcon /> */}
              </IconButton>
            </Tooltip>
          </Link>

          <Link href="/premiumcourses">
            <Tooltip title="PREMIUM COURSES">
              <IconButton>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2436/2436874.png"
                  alt=""
                  className="menuIcons"
                />
                {/* <DeleteIcon className="menuIcons" /> */}
              </IconButton>
            </Tooltip>
          </Link>

          <Link href="/courses">
            <Tooltip title="FREE COURSES">
              <IconButton>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9257/9257394.png"
                  alt=""
                  className="menuIcons"
                />
                {/* <DeleteIcon className="menuIcons" /> */}
              </IconButton>
            </Tooltip>
          </Link>

          <Link href="/about">
            <Tooltip title="ABOUT">
              <IconButton>
                <img
                  src="https://img.icons8.com/ios/1x/about.png"
                  alt=""
                  className="menuIcons"
                />
                {/* <DeleteIcon className="menuIcons" /> */}
              </IconButton>
            </Tooltip>
          </Link>

          <Link href="/contact">
            <Tooltip title="CONTACT">
              <IconButton>
                <img
                  src="https://img.icons8.com/ios/1x/apple-contacts.png"
                  alt=""
                  className="menuIcons"
                />

                {/* <DeleteIcon className="menuIcons" /> */}
              </IconButton>
            </Tooltip>
          </Link>
        </div>

        {/* SearchBar in phone*/}
        <div className="flex items-center relative lg:w-96 border-[1px] shadow-md">
          <div className="absolute p-2">
            <BsSearch />
          </div>
          <input
            type="text"
            placeholder="enter your search"
            className="pl-8  py-2 outline-none focus:ring-black focus:ring-2 text-gray-500 flex-1"
          />
        </div>

        {/* MenuIcons */}
        <div className="lg:hidden inline">
          <IconButton>
            <MdOutlineMenu className="text-2xl " />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
