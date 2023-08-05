import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GradientsPicker } from "./gradients-picker";
import { SolidPicker } from "./solid-picker";
export const BgEditor = () => {
	return (
		<>
			<div className="p-4 ">
				<h3 className="font-semibold">Background</h3>
				<div className="w-full my-4">
					<Tabs defaultValue="gradient" className="w-[390px]">
						<TabsList className="grid w-full grid-cols-2">
							<TabsTrigger value="gradient">Gradient</TabsTrigger>
							<TabsTrigger value="solid">Solid</TabsTrigger>
						</TabsList>
						<div className="my-2 overflow-y-auto max-h-full min-h-[500px] overscroll-none md:max-h-[calc(100vh-215px)] ">
							<GradientsPicker />
							<SolidPicker />
						</div>
					</Tabs>
				</div>
			</div>
		</>
	);
};
