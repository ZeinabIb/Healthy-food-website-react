import ig from "./img/instagram-logo.png";
import fb from "./img/facebook-logo.png";
import twitter from "./img/twitter-logo.png";
export default function () {
  return (
    <div>
      <div className="footer">
        <div className="container"></div>
        <h1>Follow us on social media</h1>
        <div className="social-icons">
          <img src={ig} alt="" />
          <img src={fb} alt="" />
          <img src={twitter} alt="" />
        </div>
        <p>
          Our mission is to encourage communities to eat real food while
          sourcing all ingredients from trusted partners and local farmers.
          SPREAD THE LOVE, UNLOCK EXTRA BENEFITS Invite your friends and get
          free Seeds! We’ll welcome your friend with 10 free Seeds and add 10
          bonus Seeds to your wallet for every friend who registers and makes a
          purchase.
        </p>
        <button>Donate</button>
      </div>
    </div>
  );
}
