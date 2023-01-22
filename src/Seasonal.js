import bowl2 from "./img/bowl-2.jpg";
import nb2 from "./img/number-two.png";
import bowl3 from "./img/bowl-3.jpg";
import nb1 from "./img/number-one.png";
import bowl4 from "./img/bowl-4.jpg";
import nb3 from "./img/number-three.png";
export default function () {
  return (
    <div>
      <h1 className="seasenal">Special Seasenal Bowl</h1>
      <br />
      <br />
      <div className="menu">
        <div className="bowl-2">
          <img src={bowl2} alt="" />
        </div>
        <div className="menu-info">
          <h1>
            <img src={nb2} alt="" />
          </h1>
          <h2>Order your bowl online</h2>
        </div>
        <div className="bowl-3">
          <img src={bowl3} alt="" />
        </div>
        <div className="menu-info">
          <h1>
            <img src={nb1} alt="" />
          </h1>
          <h2>Costumise your unique season bowl</h2>
        </div>
        <div className="bowl-4">
          <img src={bowl4} alt="" />
        </div>
        <div className="menu-info">
          <h1>
            <img src={nb3} alt="" />
          </h1>
          <h2>Enjoy your Healthy Meal :)</h2>
        </div>
      </div>
    </div>
  );
}
