import CircularSlider from "@fseehawer/react-circular-slider";
import { Box, Switch, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { colorGradients } from "../../data/gradients";
import { ShotEditorStyled } from "../../styles/ShotEditorStyled";

const GradientsPicker = ({ data, setData }) => {
	const [gradients, setGradients] = useState([]);

	const [colors, setColors] = useState({
		color1: data.background.color1 ? data.background.color1 : "#ec008c",
		color2: data.background.color2 ? data.background.color2 : "#fc6767",
	});

	const [editDirection, setEditDirection] = useState(false);

	const handleChange = (event) => {
		setEditDirection(event.target.checked);
	};

	const [direction, setDirection] = useState(
		data.background.direction ? data.background.direction : 105,
	);

	useEffect(() => {
		setGradients(colorGradients);
	}, []);

	return (
		<>
			<Box className="gradients-div">
				{gradients?.map((gradient, key) => {
					return (
						<ShotEditorStyled
							key={`gradient-${gradient.colors[0]}-${gradient.colors[1]}`}
						>
							<div
								onClick={() => {
									setColors({
										color1: gradient.colors[0],
										color2: gradient.colors[1],
									});
									setData({
										...data,
										background: {
											type: "Gradient",
											color1: gradient.colors[0],
											color2: gradient.colors[1],
											direction: direction,
										},
									});
								}}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										setColors({
											color1: gradient.colors[0],
											color2: gradient.colors[1],
										});
										setData({
											...data,
											background: {
												type: "Gradient",
												color1: gradient.colors[0],
												color2: gradient.colors[1],
												direction: direction,
											},
										});
									}
								}}
								key={`gradient-${gradient.colors[0]}-${gradient.colors[1]}`}
								className="single-div"
								style={{
									background: `linear-gradient(to left, ${gradient.colors[0]}, ${gradient.colors[1]})`,
								}}
							/>
						</ShotEditorStyled>
					);
				})}
			</Box>

			{/* <Box className="shadow-wrapper" width={300}>
            <Typography className="typo-bold">Gradients direction</Typography>
            <Switch
                onChange={handleChange}
                color="success" checked={editDirection} />
        </Box> */}
			{editDirection && (
				<Box className="circular-slider">
					<CircularSlider
						width={90}
						valueFontSize="20px"
						labelFontSize="9px"
						verticalOffset="0em"
						onChange={(angle) => {
							setDirection(angle);
							setData({
								...data,
								background: {
									type: "Gradient",
									color1: colors.color1,
									color2: colors.color2,
									direction: direction,
								},
							});
						}}
					/>
				</Box>
			)}
		</>
	);
};

export default GradientsPicker;
