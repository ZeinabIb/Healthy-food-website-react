import contact from "./img/contact.png";
import en from "./img/envelope.png";
import cc from "./img/credit-card.png";
import user from "./img/user.png";

export default function Form() {
  return (
    <div>
      <div class="form" id="review">
        <div class="phone">
          <img src={contact} alt="" />
        </div>
        <div class="form-section">
          <h4>Account</h4>
          <div class="input-content">
            <img src={user} alt="" />
            <input class="acc" type="text" id="name" placeholder="Full Name" />
          </div>
          <div class="input-content">
            <img src={en} alt="" />
            <input type="text" id="email" placeholder="Email Address" />
          </div>
          <input type="text" id="pass" placeholder="Password" />
          <div class="birth-and-gender">
            <div class="birth">
              <h4>Date Of Birth</h4>
              <input type="date" name="" id="date" />
            </div>
            <div class="gender">
              <h4>Gender</h4>
              <div class="gender-btn">
                <div class="male-btn">
                  <button>Male</button>
                </div>
                <div class="female-btn">
                  <button>Female</button>
                </div>
              </div>
            </div>
          </div>
          <div class="payment">
            <h4>Payment Details</h4>
            <div class="payment-btn">
              <div class="credit">
                <button>Creddit card</button>
              </div>
              <div class="paypal">
                <button>PayPal</button>
              </div>
            </div>

            <img src={cc} alt="" />
            <input type="text" name="" id="card-name" placeholder="Card Name" />
            <div class="card-mm-yy">
              <div class="card">
                <img src={user} alt="" />
                <input type="text" name="" id="card" placeholder="Card CVC" />
              </div>
              <div class="mm">
                <input type="datetime-local" name="january" id="mm" />
              </div>
            </div>
          </div>

          <h4 id="term">Term and Conditions</h4>
          <div class="term">
            <div class="term-c">
              <input type="checkbox" name="" id="" />
            </div>
            <div class="term-p">
              <p>
                I accept the terms and conditions for signing up to this
                service, and herby confirm I have read the privacy policy?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="space-1"></div>
      <div class="space-1"></div>
    </div>
  );
}
