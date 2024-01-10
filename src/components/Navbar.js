import { useHistory, Link } from "react-router-dom";

const Navbar = ({ searchText, setSearchText }) => {
  const history = useHistory();
  const updateSearchText = (e) => {
    history.push("/search");
    setSearchText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText !== "") {
      history.push("/search");
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-3" to="/">
            IMDbootleg
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="/" aria-disabled="true">
                  Coming Soon
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchText}
                onChange={updateSearchText}
              />
              <button className="btn btn-outline-success" type="submit" >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
