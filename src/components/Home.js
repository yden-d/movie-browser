import Hero from "./Hero";

const Home = () => {
    return (
      <div>
        <Hero text="IMDBootleg: IMDb's Ghetto Cousin"/>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">
                Welcome to my bootleg movie website.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Home;