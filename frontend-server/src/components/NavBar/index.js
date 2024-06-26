import { useDispatch, useSelector } from "react-redux";
import "./_nav-bar.scss";
import { useEffect } from "react";
import { getCategories } from "../../Redux/Category/actions";
import { Link } from "react-router-dom";

const NavBar = () => {
    const selData = useSelector(state => state.categoryReducer.categories);
    const totItems = useSelector(state => state.cr.totalItems);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);
    
    return (
        <div className='header bg-dark'>
            <div className='row navBar-row'>
                <div className='brand'>
                    <h3><Link to="/">Market Verse</Link></h3>
                </div>
                <div className='inp-container p-0 my-4 w-50 h-25 bg-white'>
                    <div className='dropdown m-0 p-0'>
                        <select className='select-btn w-100 p-0 m-0'>
                            {selData.map((data, index) => {
                                if(data.par_cat_id === null){
                                    return (
                                        <option key={index}>{data.category}</option>
                                    )
                                }
                                return null;
                            })}
                        </select>
                    </div>
                    <input placeholder='Search...'/>
                    <button> <i className='bi bi-search'/> </button>
                </div>
                <div className="login-container">
                    <i className="bi bi-person-circle user-icon my-1"></i>
                    <h5 className="login"><a href="#">Login</a></h5> / <h5 className="register"><a href="#">Register</a></h5>
                </div>
                <div className="cart-wishlist">
                    <ul className="p-0">
                        <li className="list-icon heart"><a href=""><i className="bi bi-suit-heart-fill"></i></a></li>
                        <Link to="/cart">
                            <li className="list-icon cart"><a href=""><i className="bi bi-cart-fill"/></a>
                                {
                                    (totItems!==0) ?
                                        <div id="cart-item-count">
                                            <p>{totItems}</p>
                                        </div>
                                    :
                                        <></>
                                }
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;