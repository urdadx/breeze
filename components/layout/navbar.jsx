import Link from "next/link";
import { Button } from "../ui/button";
import { Github } from "lucide-react";

const Navbar = () => {
	return (
		<>
			<header className="sticky shaodw-md top-0 w-[100vw] border-b border-b-slate-200 bg-white">
				<div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
					<div className="flex items-center">
						<h3 className="text-lg text-pink-600 text-primary font-bold">
							breeze
						</h3>
					</div>
					<div className="">
						<Button asChild variant="outline" className="">
							<div className="flex items-center gap-2">
								<Github size={17} />
								<Link href="https://github.com/urdadx/breeze">
									Star on Github
								</Link>
							</div>
						</Button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
