import DarkIcon from "../../assets/cell-powered/iconDark.png";
import { AppleIcon } from "../../Reusable/svgs";
import { titleCN } from "../../Reusable/typography";

export default function Hero() {
	return (
		<div className="flex flex-col max-w-3xl mx-auto items-center justify-center h-[60vh] sm:h-[75vh] min-h-150 gap-6 sm:gap-10">
			<img
				src={DarkIcon}
				alt="Cell Powered Icon (dark)"
				className="h-32 sm:h-48 drop-shadow-white/10 drop-shadow-sm"
			/>

			<h1 className={`${titleCN} text-5xl sm:text-7xl`}>Cell Powered</h1>
			<h3 className="text-xl opacity-70 text-center">
				Track your battery health, charge history, source details, and more...
				all right from your menu bar.
			</h3>

			<a
				className="btn rounded-4xl bg-white btn-xl text-black hover:bg-white/80"
				href="https://github.com/noahgree/cellpowered-updates/releases/latest/download/Cell.Powered.dmg"
			>
				<div className="-translate-y-0.5">
					<AppleIcon size={18} />
				</div>
				<h1 className="text-lg pl-1">Download Now</h1>
			</a>
		</div>
	);
}
