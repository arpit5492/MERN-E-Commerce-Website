const NavBar = () => {
    return (
        <div className="navbar navbar-light bg-dark row">
            <div className="navFont col-lg-6">
                <h1 className="navbar-brand text-light mx-4 py-2">Market Verse</h1>
            </div>
            <div className="p-0 my-2 h-25 col-lg-6">
                <form className="search-form" action="">
                    <input type="search" className="form-control" placeholder="Search..."/>
                    <button className="bi bi-search"></button>
                </form>
            </div>
        </div>
    )
}

export default NavBar;