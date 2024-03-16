import Navv from "../component/Navv";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import send_img from "../Imgs/Mail sent.gif";
import "../CSS/Contact.css"
function Contact() {
  return (
    <>
      <Navv></Navv>
      <div className="container contenet">
        <div className="row m-0">
          <div className="col-lg-5">
            <img src={send_img}></img>
          </div>
          <div className="col-lg-5 contact_content">
           <div>
           <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
           </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Contact;