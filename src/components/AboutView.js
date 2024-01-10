import Hero from "./Hero";

const AboutView = () => {
    return (
        <div>
            <Hero text="About Us" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, laudantium quas! Quo ex perspiciatis ab cumque. Blanditiis inventore sequi, quae ex rerum cupiditate esse suscipit cum, repudiandae recusandae provident saepe ipsum dolore eius doloribus totam id ipsa eum dignissimos? Temporibus sint corrupti incidunt error vitae doloribus suscipit consectetur, voluptate aliquam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutView;