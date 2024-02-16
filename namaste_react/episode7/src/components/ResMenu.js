import { useParams } from "react-router-dom";

const ResMenu = ({restaurantID}) => {
    const {resId} = useParams();
    console.log(resId);
    return (
        <div className="resMenu">
            <h1>Name of the Restaurant</h1>
            <h2>
                <ol>
                    <li>Roti</li>
                    <li>Daal</li>
                    <li>Sabzi</li>
                </ol>
            </h2>
        </div>
    )
};
export default ResMenu;