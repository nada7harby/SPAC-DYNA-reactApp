import Navv from "../component/Navv";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Img_service from "../Imgs/services-left-image.png";
import "../CSS/Services.css";
function Services() {
  return (
    <>
      <Navv></Navv>
      <div className="container content2 ">
        <div className="row justify-content-around m-0">
          <div className="col-lg-5">
            <img src={Img_service} className="img_serv"/>
          </div>
          <div className="col-lg-5">
            <h2>
              Grow Your Website With Our <span className="span1">SEO</span>{" "}
              Service & <span className="span2">Project</span> Ideas
            </h2>
            <p>
              Space Dynamic HTML5 template is free to use for your website
              projects. However, you are not permitted to redistribute the
              template ZIP file on any CSS template collection websites. Please
              contact us for more information. Thank you for your kind
              cooperation.
            </p>
            <div className="progresss">
              <h4>Website Analysis</h4>
              <div>
                <span className="num1">72%</span>
                <progress id="file" value="72" max="100">
                  {" "}
                  72%{" "}
                </progress>
              </div>
            </div>
            <div className="progresss">
              <h4>SEO Reports</h4>
              <div>
                <span className="num2">84%</span>
                <progress id="file" value="84" max="100">
                  {" "}
                  86%{" "}
                </progress>
              </div>
            </div>
            <div className="progresss">
              <h4>Website Analysis</h4>
              <div>
                <span className="num3">96%</span>
                <progress id="file" value="96" max="100">
                  {" "}
                  96%{" "}
                </progress>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Services;
