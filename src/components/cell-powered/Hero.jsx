import DarkIcon from "../../assets/cell-powered/iconDark.png"
import { titleCN } from "../../Reusable/typography";


export default function Hero() {
   return (
      <div className="flex flex-col items-center justify-center h-[60vh] min-h-150 gap-6">
         <img src={DarkIcon}
         alt="Cell Powered Icon (dark)"
         className="h-24 rotate-6 drop-shadow-green-400/50 drop-shadow-sm mb-8" />

         <h1 className={`${titleCN} text-5xl sm:text-7xl`}>
            Cell Powered
         </h1>
         <h3 className="text-2xl opacity-70 text-center">
            Keep an eye on your MacBook's battery.
         </h3>
      </div>
   );
}
