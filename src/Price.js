import check from "./img/check.png";
export default function Price() {
  return (
    <div className="price" id="reservation">
      <div className="price-1">
        <h1 className="title">Basic</h1>
        <ul className="price-item">
          <li>
            <img src={check} alt="" />6 Months
          </li>
          <li>
            <img src={check} alt="" />
            100 unique meals
          </li>
          <li>
            <img src={check} alt="" />
            20 costumised meals
          </li>
          <li>
            <img src={check} alt="" />5 gifts
          </li>

          <li>
            <img src={check} alt="" />
            20 Drinks
          </li>
        </ul>
        <div className={check}>
          <h3>
            <strong>$ 500</strong>
          </h3>
          <button className="c-btn">Register</button>
        </div>
      </div>
      <div className="price-2">
        <h1 className="title">Premium</h1>
        <ul className="price-item">
          <li>
            <img src={check} alt="" />
            12 Months
          </li>
          <li>
            <img src={check} alt="" />
            200 unique meals
          </li>
          <li>
            <img src={check} alt="" />
            30 costumised meals
          </li>
          <li>
            <img src={check} alt="" />
            15 gifts
          </li>
          <li>
            <img src={check} alt="" />
            45 Drinks
          </li>
        </ul>
        <div classNameName="price-btn">
          <h3>
            <strong>$ 890</strong>
          </h3>
          <button className="c-btn">Register</button>
        </div>
      </div>
    </div>
  );
}
