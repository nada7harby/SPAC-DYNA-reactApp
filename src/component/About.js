import Navv from "../component/Navv";
import "bootstrap/dist/css/bootstrap.min.css";
import About_img from "../Imgs/about-left-image.png";
import "../CSS/About.css";
import sev_img from "../Imgs/service-icon-01.png";
import sev_img2 from "../Imgs/service-icon-02.png";
import sev_img3 from "../Imgs/service-icon-03.png";

function About() {
  const arr = [
    {
      id: 1,
      img: sev_img,
      h: "Data Analysis",
      p: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter",
    },
    {
      id: 2,
      img: sev_img2,
      h: "Data Reporting",
      p: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter",
    },
    {
      id: 3,
      img: sev_img3,
      h: "Web Analytics",
      p: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter",
    },
    {
      id: 3,
      img: sev_img,
      h: "SEO Suggestions",
      p: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter",
    },
  ];
 const arr2 = arr.map((ele) => {
    return (
      <div className="col-lg-6 col-sm-5 about_data">
        <div>
          <img src={ele.img} />
        </div>
        <div>
          <h3>{ele.h}</h3>
          <p>{ele.p}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <Navv></Navv>
      <div className="row About m-0 justify-content-evenly">
        <div className="col-lg-5 col-sm-5">
          <img src={About_img} className="About_img" />
        </div>
        <div className="col-lg-6 col-sm-5 Data">
          <div className="row m-0 Data2">
          {arr2}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
