import { Card, CardDescription } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import CircularSlider from "@fseehawer/react-circular-slider";
import { gradientColors } from "./bg-utils";
import { Watermark } from "../watermark";

export const GradientsPicker = () => {

	return (
		<>
			<TabsContent value="gradient">
				<Card className="p-3 my-6">
					<CardDescription className="my-1">Select a gradient</CardDescription>
					<div className="space-y-4">
						<div className="grid gap-2 w-full items-center grid-cols-4 my-2">
							{gradientColors?.map(({ name, colors }) => {
								return (
									<div
										style={{
											background: `linear-gradient(140deg, ${colors[0]}, ${colors[1]})`,
										}}
										key={name}
										className="w-20 h-14 rounded-md cursor-pointer"
									/>
								);
							})}
						</div>
						<div className="">
							<CardDescription className="">
								Change direction
							</CardDescription>
							<div className="flex justify-center w-full place-items-center z-0 my-6">
								<CircularSlider
									dataIndex={140}
									initialValue={140}
									width={90}
									valueFontSize="20px"
									labelFontSize="9px"
									verticalOffset="0em"
									onChange={(value) => {
										console.log(value);
									}}
								/>
							</div>
						</div>
					</div>
					<Watermark />
				</Card>
			</TabsContent>
		</>
	);
};
