import TBO from "../../assets/Theory-of-Language-and-Automata.jpg";
import PKB from "../../assets/Introduction-to-Artificial-Intelligence.jpg";
import PBW from "../../assets/Web-Based-Programming.jpg";
import "./Projects.css";

export default function Projects() {
  return(
    <section className="bg-warning-subtle p-md-5" id="projects">
      <div className="container p-md-5">
        <div className="row">
          <div className="col text-center">
            <h2>My Projects</h2>
          </div>
        </div>
        <div className="row justify-content-center p-md-5">
          <div className="col-md-4">
            <div class="card card-width">
              <img src={TBO} class="card-img-top card-style" alt="Card" />
              <div class="card-body">
                <h5 class="card-title">Final Project Theory of Language and Automata</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://github.com/SuryaAdiPalguna/C-4-TugasFinalProject_TBO2022" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card card-width">
              <img src={PKB} class="card-img-top card-style" alt="Card" />
              <div class="card-body">
                <h5 class="card-title">Final Project Introduction to Artificial Intelligence</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://github.com/SuryaAdiPalguna/PemrogramanBerbasisWeb/tree/main/UAS" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card card-width">
              <img src={PBW} class="card-img-top card-style" alt="Card" />
              <div class="card-body">
                <h5 class="card-title">Web Based Programming Final Project</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://github.com/SuryaAdiPalguna/PemrogramanBerbasisWeb" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};