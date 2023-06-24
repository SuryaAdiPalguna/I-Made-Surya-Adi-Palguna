import Photo from "../../assets/Photo.png";

export default function Home() {
  return(
    <section className="bg-dark" id="home">
      <div className="container p-md-5">
        <div className="row p-md-5 justify-content-between">
          <div className="col-md-6 p-md-5 text-light">
            <h5 className="p-md-2">Hello, I'm <span className="text-warning">Fullstack Developer</span></h5>
            <h1 className="p-md-2">I Made Surya Adi Palguna</h1>
            <p className="text-secondary p-md-2">I'm interested in Fullstack Developer and Web Developer. Beside that, I also explore new things that are used in solving problems</p>
          </div>
          <div className="col-md-5 p-md-5">
            <img src={Photo} alt="Photo" height="280" width="280" className="bg-warning rounded-circle" />
          </div>
        </div>
      </div>
    </section>
  );
};