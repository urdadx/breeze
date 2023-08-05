import { UploadCloud } from "lucide-react";
import Link from "next/link";

export const UploadArea = () => {
	return (
		<>
			<div className="z-20 relative bg-white backdrop-xl rounded-lg w-full flex item-center justify-center flex-col shadow-[0_10px_30px_rgba(0,0,0,0.35)] max-w-[500px] backdrop-blur-md">
				<div className="p-6 border-b">
					<h3 className="text-center">
						Use Cmd + V or Ctrl + V to paste from clipboard
					</h3>
				</div>
				<div className="my-4 py-6 px-10">
					<div className="border-2 border-dashed rounded-lg p-6 h-[150px]">
						<div className="flex flex-col items-center justify-center gap-4 mx-auto">
							<div className="p-4 w-14 h-14 rounded-full bg-blue-200">
								<UploadCloud className="text-blue-600" />
							</div>

							<Link
								href="#"
								className="text-center cursor-pointer text-blue-500">
								<b className="text-blue-600">Pick an image</b> or
								drag & drop
							</Link>
						</div>
					</div>
				</div>

				<div className="p-6 border-t">
					<Link className="cursor-pointer" href="#">
						<h3 className="text-center text-slate-600 hover:underline">
							Use a demo image
						</h3>
					</Link>
				</div>
			</div>
		</>
	);
};
