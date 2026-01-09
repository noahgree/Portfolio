import { titleCN } from "../../Reusable/typography";
import { AppleIcon, DownloadIcon } from "../../Reusable/svgs";

export default function Navbar() {
   return (
      <div className="flex fixed top-0 left-0 right-0 z-50 justify-center max-w-4xl mx-auto">
         <div className="navbar backdrop-blur-2xl flex-nowrap bg-green-400/10 rounded-4xl overflow-hidden w-[80vw] min-w-60 my-8 grain-bg [--grain-opacity:0.2] border-[0.5px] border-white/20">
            <div className="navbar-start z-1">
               <a
               href="#top"
               className={`${titleCN} btn btn-link hover:text-white/70 no-underline`}
               >
                  Cell Powered
               </a>
            </div>
            <div className="navbar-end mx-1">
               <a className="btn rounded-4xl btn-soft glass hover:bg-green-400/10 hidden sm:inline-flex">
                  <AppleIcon size={18}/>
                  Download Now
               </a>
               <a className="btn btn-circle btn-soft glass hover:bg-green-400/10 sm:hidden">
                  <DownloadIcon size={18}/>
               </a>
            </div>
         </div>
      </div>
   );
}
