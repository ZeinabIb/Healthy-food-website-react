import minibowl2 from "./img/mini-bowl-2.jpg";
import minibowl1 from "./img/mini-bowl-1.jpg";
import minibowl3 from "./img/mini-bowl-3.jpg";
import c1 from "./img/chinese-1.jpg";
import c2 from "./img/chinese-2.jpg";
import minibowl4 from "./img/mini-bowl-4.jpg";

export default function ChineseFood() {
  return (
    <div className="big-container">
      <div className="left-side">
        <h1 className="c">Don't Miss The Chinese Food!!</h1>
        <img className="c-img" src={minibowl2} alt="" />
        <button className="c-btn">Explore chinese food Menu {">"} </button>
      </div>
      <div className="chinese">
        <div className="c-1">
          <img src={c1} alt="" />
        </div>
        <div className="c-2">
          <img src={minibowl1} alt="" />
        </div>
        <div className="c-3">
          <img src={minibowl2} alt="" />
        </div>
        <div className="c-4">
          <img src={minibowl3} alt="" />
        </div>
        <div className="c-5">
          <img src={c2} alt="" />
        </div>
        <div className="c-6">
          <img src={minibowl4} alt="" />
        </div>
      </div>
    </div>
  );
}
