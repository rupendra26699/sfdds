import Overlay from "../Overlay";
import loadingImage from "../../../Assets/images/loading.svg";
import "./index.css"

function LoadingIndicator() {
    return <Overlay><img className="loading-image" src={loadingImage}></img></Overlay>
}


export default LoadingIndicator;