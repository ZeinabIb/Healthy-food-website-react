import check from "./img/check-circle.png";
import burgericon from "./img/hamburger.png";
import truckicon from "./img//truck.png";

export default function Validation() {
  return (
    <div className="validation" id="services">
      <div className="val-1">
        <img src={check} alt="" />
        <h3>QUALITY FOOD</h3>
        <p>
          lifestyle movement around healthy culture, created by fitness and food
          enthusiasts.
        </p>
      </div>
      <div className="val-1">
        <img src={burgericon} alt="" />
        <h3>SUPER TASTE</h3>
        <p>
          lifestyle movement around healthy culture, created by fitness and food
          enthusiasts.
        </p>
      </div>
      <div className="val-1">
        <img src={truckicon} alt="" />
        <h3>FAST DELIVARY</h3>
        <p>
          lifestyle movement around healthy culture, created by fitness and food
          enthusiasts.
        </p>
      </div>
    </div>
  );
}
