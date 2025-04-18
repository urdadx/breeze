import { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../components/atoms/Loader";
import Editor from "../components/core/Editor";
import LeftBar from "../components/core/LeftBar";
import PlayGround from "../components/core/PlayGround";
import Dnd from "../components/utils/Dnd";
import { codeTemplate } from "../helpers/CodeTemplate";
import { getTemplate } from "../helpers/templateCover";
import { textTemplate } from "../helpers/textTemplate";
import { HomeStyled } from "../styles/HomeStyled";

const EnableScroll = styled.section`
    overflow-y: auto;
    height:100vh;
`;

const Home = ({ currentState, changeState }, props) => {
	const [data, setData] = useState();
	const [children, setChildren] = useState([]);
	const [code, setCode] = useState();
	const [header, setHeader] = useState();
	const [currentArea, setCurrentArea] = useState(
		localStorage.getItem("current-area") === "true",
	);

	useEffect(() => {
		// Update localStorage when currentState changes
		if (currentState === "codesnap") {
			localStorage.setItem("current-area", "true");
			setCurrentArea(true);
		}

		if (currentState === "home") {
			localStorage.setItem("current-area", "false");
			setCurrentArea(false);
		}
	}, [currentState]);

	useEffect(() => {
		setData(getTemplate());
		setCode(codeTemplate());
		setHeader(textTemplate());
	}, []);

	const Code = () => {
		return (
			<>
				<Dnd width="auto" x={900} y={400}>
					<i
						className={`devicon-${data?.icon?.name}-plain`}
						style={{
							fontSize: `${data?.icon?.fontSize}px`,
							color: data?.icon?.color,
						}}
					/>
				</Dnd>
			</>
		);
	};

	return (
		<>
			<HomeStyled>
				{data ? (
					<>
						<div className="left-bar">
							<LeftBar
								code={code}
								setCode={setCode}
								{...props}
								data={data}
								value={currentState}
								changeValue={changeState}
								setData={setData}
								children={children}
								setChildren={setChildren}
								header={header}
								setHeader={setHeader}
							/>
						</div>
						<div className="editor">
							{!currentArea && (
								<Editor
									{...props}
									data={data}
									setData={setData}
									children={children}
									setChildren={setChildren}
									header={header}
									setHeader={setHeader}
									Code={Code}
								/>
							)}
							{currentArea && code && (
								<EnableScroll>
									<PlayGround
										code={code}
										setData={setCode}
										header={header}
										setHeader={setHeader}
									/>
								</EnableScroll>
							)}
						</div>
					</>
				) : (
					<div className="loader-wrapper">
						<Loader />
					</div>
				)}
			</HomeStyled>
		</>
	);
};

export default Home;
