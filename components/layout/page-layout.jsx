import React from "react";
import Navbar from "./navbar";
import Playground from "../core/playground/playground";
import Editor from "../core/editor/editor";

const PageLayout = () => {
	return (
		<React.Fragment>
			<Navbar />
			<section className="w-full mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-start relative">
				<div className="flex flex-none flex-col items-center justify-center pr-0 lg:pr-2 max-w-full lg:max-w-[calc(100%-400px)] lg:mx-0 lg:top-[60px] lg:sticky w-full mb-2 md:mb-0 mt-4 ">
					<Playground />
				</div>
				<div className="w-full lg:w-[400px] flex flex-none flex-col pb-5">
					<Editor />
				</div>
			</section>
		</React.Fragment>
	);
};

export default PageLayout;
