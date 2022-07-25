import { LoaderStyled } from "../../styles/LoaderStyled";
import { LOGO_IMG_ } from "../../assets/images/imageURL";

const Loader = () => {
    return ( 
        <>
        <LoaderStyled>
            <div className="cs-loader">
                <div className="cs-loader-inner">
                    <label>
                        <img src={LOGO_IMG_} alt="imagee" />
                    </label>
                    <label>
                        <img src={LOGO_IMG_} alt="imagee" />
                    </label>
                    <label>
                        <img src={LOGO_IMG_} alt="imagee" />
                    </label>
                    <label>
                        <img src={LOGO_IMG_} alt="imagee" />
                    </label>
           
             
                </div>

                <div className="loading-alert">
                    <h3>Loading the editor...</h3>
                </div>
            </div>
        </LoaderStyled>
        </>
     );
}
 
export default Loader;