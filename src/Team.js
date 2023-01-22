import team1 from "./img/team-1.png";
import team2 from "./img/team-2.png";
import team3 from "./img/team-3.png";
import team4 from "./img/team-4.png";

export default function () {
  return (
    <div>
      <h1 class="team-title">OUR TEAM</h1>
      <p class="team-p">
        Our mission is to inspire our community to eat real food and adopt an
        active lifestyle.
        <br />
        We are committed to offering our customers high-quality foods freshly
        made from seasonal vegetables, fruits, and grains, sourced from trusted
        partners and local farmers.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="team" id="team">
        <div class="team-1">
          <img src={team1} alt="" />
          <h2>JOHNATHAN TYLER</h2>
          <h4>Founder & Head Chef</h4>
        </div>
        <div class="team-2">
          <img src={team2} alt="" />
          <h2>WADE WARREN</h2>
          <h4>Sous Chef</h4>
        </div>
        <div class="team-3">
          <img src={team3} alt="" />
          <h2>JOHNATHAN TYLER</h2>
          <h4>Line Cooks</h4>
        </div>
        <div class="team-4">
          <img src={team4} alt="" />
          <h2>JOHNATHAN TYLER</h2>
          <h4>Prep Cooks</h4>
        </div>
      </div>
    </div>
  );
}
