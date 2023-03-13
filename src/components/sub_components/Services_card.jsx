import React from "react";
import servicesImg from "../../assets/illustration/illustration2.svg";
import webImg from "../../assets/illustration/illustration3.svg";
import designImg from "../../assets/illustration/illustration4.svg";
import PhotographImg from "../../assets/illustration/illustration5.svg";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card card_services">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="services__img d-flex justify-content-center mb-3">
                      <img src={webImg} alt="" />
                    </div>
                    <div className="service__tex text-center">
                      <h4 className="f_CarterOne">Web Development</h4>
                      <p>
                        Company website, E-commerce website, Portfolio website,
                        Blog, Local business website, Single page website, etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card_services">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="services__img d-flex justify-content-center mb-3">
                      <img src={designImg} alt="" />
                    </div>
                    <div className="service__tex text-center">
                      <h4 className="f_CarterOne">Graphic Design</h4>
                      <p>
                        Logo, Corporate Identity, Brochures, Banner, Packaging
                        Design, Illustrations, Web Design, Vector art, Photo
                        editing, etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card_services">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="services__img d-flex justify-content-center mb-3">
                      <img src={PhotographImg} alt="" />
                    </div>
                    <div className="service__tex text-center">
                      <h4 className="f_CarterOne">Photo & Video</h4>
                      <p>
                        Storyboard, location scouting, casting, styling, choice
                        of the photographer or videographer, location managemen.
                        (Coming Soon)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
