import Logo from "../../assets/Logo.png";

export default function Navbar() {
  return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#home">
          <img src={Logo} alt="I Made Surya Adi Palguna" width="48" height="48" class="rounded-circle" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <a class="nav-link active ps-3 pe-3" aria-current="page" href="#home">Home</a>
            <a class="nav-link ps-3 pe-3" href="#about">About</a>
            <a class="nav-link ps-3 pe-3" href="#skills">Skills</a>
            <a class="nav-link ps-3 pe-3" href="#projects">My Projects</a>
            <a class="btn btn-warning rounded-pill ps-3 pe-3 text-light" href="#contact" role="button">Contact Me</a>
          </div>
        </div>
      </div>
    </nav>
  );
};