import { titleCN } from "../../Reusable/typography";
import { AppleIcon } from "../../Reusable/svgs";
import App from "../../App";

export default function Navbar() {
   return (
      <div className="flex fixed top-0 left-0 right-0 z-50 justify-center max-w-4xl mx-auto">
         <div className="navbar backdrop-blur-lg flex-nowrap bg-green-400/10 rounded-4xl overflow-hidden w-[80vw] min-w-60 my-8 grain-bg [--grain-opacity:0.2] border-[0.5px] border-white/20">
            <div className="navbar-start z-1">
               <a
               href="#top"
               className={`${titleCN} btn btn-link hover:text-white/70 no-underline`}
               >
                  Cell Powered
               </a>
            </div>
            <div className="navbar-end mx-1">
               <a className="btn rounded-4xl btn-soft glass hover:bg-green-400/10">
                  <AppleIcon size={18} className="" />
                  Download Now
               </a>
            </div>
         </div>
      </div>
   );
}
