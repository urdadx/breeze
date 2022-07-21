
const Solid = ({ color }) => {
    return ( 
        <>
            <div 
                style={{
                    background:`${color}`,
                    width:"90px",
                    height:"60px",
                    borderRadius:"10px",
                    cursor: "pointer",
                }} > 
            </div>
        </>
     );
}
 
export default Solid;