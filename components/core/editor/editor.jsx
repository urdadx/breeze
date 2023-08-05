import { BgEditor } from "./background-editor/bg-editor";
import { ImageEditor } from "./image-editor/image-editor";
import { TextEditor } from "./text-editor/text-editor";

const Editor = () => {
	return (
		<>
			<div className="w-full h-screen max-h-screen border-l ">
				{/* <BgEditor /> */}
				{/* <TextEditor /> */}
				<ImageEditor />
			</div>
		</>
	);
};

export default Editor;
