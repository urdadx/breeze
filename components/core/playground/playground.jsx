import { CommandBar } from "./commandbar/commandbar";
import { UploadArea } from "./upload-area";

const Playground = () => {
	return (
		<>
			<div className="h-full w-full lg:w-[90.5%] xl:w-[90.5%] relative flex items-center justify-center flex-col">
				<CommandBar />
				<div className="relative w-full">
					<div className="absolute top-0 left-0 z-10 w-full h-full bg-transparent" />
					<div className="canvas duration-300 relative flex transform-gpu max-w-full mt-0 md:mt-2 md:min-h-[400px] md:max-h-[650px] md:h-[calc(100vh-200px)] overflow-hidden flex-col items-center justify-center p-5 w-full bg-gradient-to-br from-[#fff2a4] via-[#d3acee] to-[#82f5ff]">
						<UploadArea />
					</div>
				</div>
			</div>
		</>
	);
};

export default Playground;
