import "./_cat-nav.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../Redux/Category/actions";

const CatNav = () => {
    const data = useSelector(state => state.categoryReducer.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    // console.log(data);
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