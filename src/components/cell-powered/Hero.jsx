import DarkIcon from "../../assets/cell-powered/iconDark.png"
import { AppleIcon } from "../../Reusable/svgs";
import { titleCN } from "../../Reusable/typography";


export default function Hero() {
   return (
      <div className="flex flex-col items-center justify-center h-[60vh] min-h-150 gap-6 sm:gap-10">
         <img src={DarkIcon}
         alt="Cell Powered Icon (dark)"
         className="h-24 rotate-6 drop-shadow-apple-green/50 drop-shadow-sm mb-8" />

         <h1 className={`${titleCN} text-5xl sm:text-7xl`}>
            Cell Powered
         </h1>
         <h3 className="text-xl opacity-70 text-center">
            Keep an eye on your MacBook's battery.
         </h3>

         <a
         className="btn rounded-4xl btn-soft btn-xl bg-apple-green hover:bg-apple-green/80"
         href="https://github.com/noahgree/cellpowered-updates/releases/latest/download/Cell.Powered.dmg"
         >
            <AppleIcon size={22}/>
            Download Now
         </a>
      </div>
   );
}
