import mainImage from "../../assets/cell-powered/LargeImage1.png";
import Dark1 from "../../assets/cell-powered/background-solo/Test1.png";
import Dark2 from "../../assets/cell-powered/background-solo/Dark2.png";
import Dark3 from "../../assets/cell-powered/background-solo/Dark3.png";
import Dark4 from "../../assets/cell-powered/background-solo/Dark4.png";
import Dark5 from "../../assets/cell-powered/background-solo/Dark5.png";
import Light1 from "../../assets/cell-powered/background-solo/Light1.png";
import Light2 from "../../assets/cell-powered/background-solo/Light2.png";
import Light3 from "../../assets/cell-powered/background-solo/Light3.png";
import Light4 from "../../assets/cell-powered/background-solo/Light4.png";
import Light5 from "../../assets/cell-powered/background-solo/Light5.png";

export default function Content() {
	return (
		<div className="gap-10 max-w-7xl mx-auto">
			<div className="grid grid-cols-1 gap-8 p-8">
				<div className="flex flex-col sm:flex-row items-center">
					<div className="flex flex-1 items-center justify-center p-8">
						<div className="p-4 sm:p-6 bg-gray-400/12 rounded-2xl">
							<h1 className="text-lg sm:text-xl text-dim-white font-bold">
								Easy monitoring from your menu bar.
							</h1>
						</div>
					</div>
					<img
						src={mainImage}
						alt="Hero Image"
						className="rounded-2xl min-w-0 flex-1"
					></img>
				</div>

				<div className="carousel rounded-2xl space-x-4 px-4 h-90 sm:h-120">
					<div className="carousel-item h-full">
						<img src={Dark1} alt="Dark 1" className="rounded-box h-full" />
					</div>

					<div className="carousel-item h-full">
						<img src={Dark2} alt="Dark 2" className="rounded-box h-full" />
					</div>

					<div className="carousel-item h-full">
						<img src={Dark3} alt="Dark 3" className="rounded-box h-full" />
					</div>
					<div className="carousel-item h-full">
						<img src={Dark4} alt="Dark 4" className="rounded-box h-full" />
					</div>
					<div className="carousel-item h-full">
						<img src={Dark5} alt="Dark 5" className="rounded-box h-full" />
					</div>
					<div className="carousel-item h-full">
						<img src={Light1} alt="Light 1" className="rounded-box h-full" />
					</div>
					<div className="carousel-item h-full">
						<img src={Light2} alt="Light 2" className="rounded-box h-full" />
					</div>
					<div className="carousel-item h-full">
						<img src={Light3} alt="Light 3" className="rounded-box h-full" />
					</div>
					<div className="carousel-item h-full">
						<img src={Light4} alt="Light 4" className="rounded-box h-full" />
					</div>
					<div className="carousel-item h-full">
						<img src={Light5} alt="Light 5" className="rounded-box h-full" />
					</div>
				</div>
			</div>
		</div>
	);
}
