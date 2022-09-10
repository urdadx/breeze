import { Rnd } from "react-rnd"; // rnd library
import { useState } from "react";
import { DndStyled } from "../../styles/DndStyled";
import { BiTrashAlt } from "react-icons/bi";


const Dnd = ({ children, width, x, y }) => {

    // checking is dragging or resizing
    const [isEditing, setIsEditing] = useState(false); 
    const [isHiddening, setIsHiddening] = useState(false);

    // adding border and effect when editing
    const onDragStart = () => {
        setIsEditing(true);
    };

    const onDragStop = () => {
        setIsEditing(false);
    };

    // default styles
    const style = {
        position: "absolute",
        top: 0,
        left: 0,
        display: isHiddening ? "none" : "block",
    };  

    return (  
        <>
        <DndStyled>
            <Rnd
                style={style}
                default={{
                    x: x || 0,
                    y: y || 0,
                    width: width || 120,
                }}
                onDragStart={onDragStart}
                onDragStop={onDragStop}
                onResizeStart={onDragStart}
                onResizeStop={onDragStop}
                className="resizerComp" 
            >
                {children}

                <div className={!isEditing ? "wrapper resizer" : "hidden" }>
                    <div className="point top-left"></div>
                    <div className="point top-right "></div>
                    <div className="point bottom-left"></div>
                    <div className="point bottom-right"></div>
                    <div onClick={() => setIsHiddening(true)}  className="delete-btn">
                        <BiTrashAlt />
                    </div>  
                </div>
            </Rnd>
        </DndStyled>
        </>
    );
}
 
export default Dnd;