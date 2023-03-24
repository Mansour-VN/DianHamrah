import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import DeskTopMenu from "./DeskTopMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {

  return (

<>
     <div className="hidden md:flex">
          <DeskTopMenu/>
     </div>
     <div className="flex  md:hidden">
          <MobileMenu/>
      </div>
</>
  );
};

export default Header;
