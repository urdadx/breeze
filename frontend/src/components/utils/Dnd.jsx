import { useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import { Rnd } from "react-rnd";
import { DndStyled } from "../../styles/DndStyled";

const Dnd = ({ children, width, x, y }) => {
	// State for UI behaviors
	const [isEditing, setIsEditing] = useState(false);
	const [isHidden, setIsHidden] = useState(false);

	// State for element dimensions and position
	const [dimensions, setDimensions] = useState({
		width: width || 120,
		height: "auto",
	});

	// Handle element deletion
	const handleDelete = (e) => {
		e.stopPropagation();
		setIsHidden(true);
	};

	if (isHidden) {
		return null;
	}

	return (
		<DndStyled>
			<Rnd
				default={{
					x: x || 0,
					y: y || 0,
					width: dimensions.width,
					height: dimensions.height,
				}}
				style={{
					boxShadow: isEditing ? "0 0 8px rgba(0, 0, 0, 0.2)" : "none",
					transition: isEditing ? "none" : "box-shadow 0.2s ease",
				}}
				size={{ width: dimensions.width, height: dimensions.height }}
				className={`resizerComp ${isEditing ? "is-editing" : ""}`}
				onDragStart={() => setIsEditing(true)}
				onDragStop={() => setIsEditing(false)}
				onResizeStart={() => setIsEditing(true)}
				onResize={(e, direction, ref) => {
					setDimensions({
						width: ref.style.width,
						height: ref.style.height,
					});
				}}
				onResizeStop={() => setIsEditing(false)}
				bounds="parent"
				enableResizing={{
					top: true,
					right: true,
					bottom: true,
					left: true,
					topRight: true,
					bottomRight: true,
					bottomLeft: true,
					topLeft: true,
				}}
				resizeHandleClasses={{
					top: "resize-handle top",
					right: "resize-handle right",
					bottom: "resize-handle bottom",
					left: "resize-handle left",
					topRight: "resize-handle top-right",
					bottomRight: "resize-handle bottom-right",
					bottomLeft: "resize-handle bottom-left",
					topLeft: "resize-handle top-left",
				}}
			>
				<div className="content-wrapper">{children}</div>

				<div
					className={isEditing ? "wrapper resizer active" : "wrapper resizer"}
				>
					<div className="point top-left"></div>
					<div className="point top-right"></div>
					<div className="point bottom-left"></div>
					<div className="point bottom-right"></div>
					<div onClick={handleDelete} className="delete-btn">
						<BiTrashAlt />
					</div>
				</div>
			</Rnd>
		</DndStyled>
	);
};

export default Dnd;
