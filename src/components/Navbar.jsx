import { useState } from "react";
import Link from "./Link/Link";

import { RiMenu2Fill,RiAuctionFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {

    const [open,setOpen] = useState(false)



const routes = [
    { id: 1, path: "/", name: "Home"},
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile", name: "Profile" }
  ];
  

    return (
       
        <nav className="p-6 bg-white">
            <div className="md:hidden " onClick={()=>setOpen(!open)}>
                {
                    open===true? <RxCross2 className="text-3xl"></RxCross2>:<RiMenu2Fill className="text-3xl "></RiMenu2Fill>
                }
            
        
            </div>
              <ul className={`md:flex absolute duration-700 md:static p-3 rounded-md
             ${open?'left-8': '-left-60'} 
              bg-orange-400 md:bg-white text-black gap-3`}>
            {
                routes.map(route=><Link route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;