import Hero from "./Hero";

const NotFound = () => {
    return (
        <div>
            <Hero text="404: Page Not Found" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            The page you are looking for cannot be found/does not exist.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;