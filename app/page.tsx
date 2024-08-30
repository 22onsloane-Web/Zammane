"use client"
import Image from "next/image";
import { useState } from "react";
import { ChatBubbleBottomCenterTextIcon, HomeIcon, PhoneIcon, RectangleGroupIcon, WalletIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import Page from "./Components/Page";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  return (

    <div className="text-[#666b6a] hover:text-[#8aa19d]' bg-[#000000] ">
      <div>
        <Page/>
      </div>
    </div>
    

    
  
  );
}
