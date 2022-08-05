import { LoaderStyled } from "../../styles/LoaderStyled";
import { LOGO_IMG_ } from "../../assets/images/imageURL";
import { TailSpin } from "react-loader-spinner"

const Loader = () => {
    return ( 
        <>
        <LoaderStyled>
            <div className="cs-loader">
                <div className="cs-loader-inner">
                    <img src={LOGO_IMG_} alt="loading-logo" />
                    <h2>breeze</h2>
                </div>

                <div className="loading-alert">
                    <h3>
                        <TailSpin color="grey" height={80} width={80} />
                    </h3>
                </div>
            </div>
        </LoaderStyled>
        </>
     );
}
 
export default Loader;