import "./_cat-nav.scss";
import catSlice from "../../store/slices/catSlice";
import { useSelector } from "react-redux";

const CatNav = () => {
    const data = useSelector(catSlice.getInitialState);
    return (
        <>
            <div>
                <ul className="cat-nav-container container">
                    {data.map((singData, index) => {
                        return (
                            <li key={index} className="list-items"><a href="#">{singData}</a></li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default CatNav;