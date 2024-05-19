"use client";
import Image from "next/image";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header1 = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const key = Cookies.get("user");
    if(key){
      setAuth(true);
      return;
    }
    setAuth(false);
  }, [auth]);
  
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("user");
    setAuth(false);
    router.push("/");
  };
  return (
    <div className=" flex justify-between border-b-2 border-gray-300 items-center h-24 px-10">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={60}
        height={100}
        className=" w-18 h-18 "
      />
      <div className=" h-full flex">
        
      <Link href={`/`}>
        <Block title={"Home Page"} para={""} /></Link>
         <Link  href={"/login"}> <Block title={"Become a member"}
          para={"Additional 0% off on stays."} />
          </Link>
        
          <Link href={`/hotels?city`}>
       
        <Block
         title={"Hotels to Stay"}
          para={"Trusted by millions."}
        />
        </Link>
        
        <Block title={"6209792987"} para={"Call us to book now."} />
        <div className="flex items-center px-3 ">
          <Image
            src={"/login.png"}
            alt="demo"
            width={200}
            height={200}
            className=" w-10 h-10 rounded-full mr-5"
          />
          {auth ? (
            <h3
              className=" font-bold cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </h3>
          ) : (
            <Link href={"/login"} className=" font-bold">
              Login / Signup
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;


// Here the username and password can be of  User.