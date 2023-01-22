import bowl from "./img/bowl-1.png";

export default function About() {
  return (
    <div className="about" id="about-us">
      <div className="about-info">
        <h1>ABOUT US</h1>
        <h4>The only thing we're serious about is food</h4>
        <p>
          Welcome to SALATA, your local healthy eatery, where we believe that
          the choices we make about what we eat have a powerful impact on our
          lifestyle. Our mission is to encourage communities to eat real food
          while sourcing all ingredients from trusted partners and local
          farmers.
          <br />
          <button className="btn-1">Explore Menu</button>
        </p>
      </div>
      <img className="bowl-1" src={bowl} alt="" />
    </div>
  );
}
