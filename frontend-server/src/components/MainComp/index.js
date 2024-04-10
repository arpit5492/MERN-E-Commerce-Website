import "./_main-comp.scss";
import SideNav from "../SideNav";

const MainComp = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="col-lg-3 col-md-3 col-sm-4">
                    <SideNav />
                </div>
            </div>
        </div>
    )
}

export default MainComp;