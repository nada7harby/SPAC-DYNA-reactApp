import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../Imgs/banner-right-image.png";
import Container from "react-bootstrap/Container";
import "../CSS/Main.css";
function Main() {
  return (
    <>
      <div className="container Content-container">
        <div className="row p-5 justify-content-between m-0">
          <div className="col-lg-4 contenet_main">
            <h4>Welcome to our Website</h4>
            <h1>
            
              We make <span>digital idea</span> & <span className="Span2">Seo</span> marketing
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente iure similique sunt consequuntur! Et in molestiae cupiditate ex id, earum eligendi accusantium doloribus blanditiis dolorem facilis, alias ipsum corrupti.</p>

          </div>
          <div className="col-lg-6">
            <img src={Banner} alt="Bannar image" className="Bannar_image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
