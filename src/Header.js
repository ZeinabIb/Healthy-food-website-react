import logo2 from "./img/logo2.png";
import t1 from "./img/t1r.png";
export default function Testing() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="navbar">
          <li>
            <img src={logo2} alt="" />
          </li>
          <a href="#">
            <li class="nav-item">Home</li>
          </a>
          <a href="#about-us" class="link">
            <li class="nav-item">About-us</li>
          </a>
          <a href="#services">
            <li class="nav-item">Services</li>
          </a>
          <a href="#team">
            <li class="nav-item">Team</li>
          </a>
          <a href="#reservation">
            {" "}
            <li className="nav-item">Reservation</li>
          </a>
          <a href="#review">
            <li className="nav-item">Review</li>
          </a>
          <a href="menu.html" target="__blank">
            <button>Our Menu</button>
          </a>
        </ul>
      </nav>
      <div className="head">
        <div className="head-txt">
          <h1>Start Eating Well</h1>
          <h1 className="eat">Eat</h1>
          <h1>Healthy, Natural Food</h1>
          <p className="head-p">
            We are committed to offering our customers high-quality foods
            freshly made from seasonal vegetables, fruits, and grains, sourced
            from trusted partners and local farmers.{" "}
          </p>
        </div>
        <div className="hero-img">
          <img src={t1} alt="" />
        </div>
      </div>
    </header>
  );
}
