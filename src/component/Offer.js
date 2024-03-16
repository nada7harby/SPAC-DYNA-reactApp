import "../CSS/offer.css";
import Navv from "../component/Navv";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import img_about from "../Imgs/about-left-image.png";
import img_bussines1 from "../Imgs/Business growth-amico.png";
import img_bussines2 from "../Imgs/Business inequality-cuate.png";
import img_bussines4 from "../Imgs/Business decisions-amico.png";

function Offer() {
  var arr = [
    {
      id: 1,
      img:img_about,
      t: "Web Analytics",
      p: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
    },
    {
      id: 2,
      img:img_bussines1,
      t: "Data Analysis",
      p: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
    },
    {
      id: 3,
      img:img_bussines2,
      t: "SEO Suggestions",
      p: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
    },
    {
      id: 3,
      img:img_bussines4,
      t: "SEO Suggestions",
      p: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
    },
  ];
  var arr2 = arr.map((ele) => {
    return (
      <div className="col-lg-2" key={ele.id}>
      <div className="img">
        <img src={ele.img} />
      </div>
      <div className="content">
        <h6>{ele.t}</h6>
        <p>{ele.p}</p>
      </div>
    </div>
    );
  });
  return (
    <>
      <Navv></Navv>
      <div className="container-fluid offer_content ">
        <h1>
          See What Our Agency <span className="span1">Offers</span> & What We{" "}
          <span className="span2">Provide</span>
        </h1>
        <div className="row justify-content-around">
          {arr2}
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Offer;
