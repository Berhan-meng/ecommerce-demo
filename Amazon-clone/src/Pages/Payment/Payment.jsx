import { useContext, useState } from "react";
import { DataContext } from "../../assets/Components/DataProvider/DataProvider.jsx";
import "./payment.css";
import ProductCard from "../../assets/Components/Product/ProductCard.jsx";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// import { BiCloudLightning } from "react-icons/bi";
import { formatMoney } from "../../Utility/Money.js";
import { Type } from "../../Utility/action.type.js";
import { instance } from "../../Api/axios.js";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase.js";
import { useNavigate } from "react-router-dom";
// import CheckoutForm from "../../assets/Components/stripe/CheckoutForm.jsx";

export default function Payment() {
  const [{ user, basket },dispatch] = useContext(DataContext);
  // console.log(user);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const total = basket.reduce((amount, cartItem) => {
    return amount + cartItem.product.price * cartItem.amount;
  }, 0);

  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const handleChange = (e) => {
    e?.error?.message ? setCardError(e?.error.message) : setCardError("");
  };
  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      setProcessing(true);
      // 1. Get clientSecret from backend (Firebase Function)
      const response = await instance({
        method: "POST",
        url: `payment/create?total=${total * 100}`,
      });

      const clientSecret = response.data?.clientSecret;
      console.log("Client Secret:", clientSecret);

      if (!clientSecret) {
        console.error("No client secret received");
        return;
      }

      // 2. Confirm payment using Stripe
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        }
      );

      if (error) {
        console.error("Payment failed:", error.message);
        return;
      }

      console.log("Payment success:", paymentIntent);

      // 3. Save order to Firestore
      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });

      // 4. Clear user basket
      dispatch({ type: Type.EMPTY_BASKET });
      setProcessing(false);
      navigate("/orders", { state: { msg: "You have placed new order" } });
    } catch (err) {
      console.error("Payment error:", err);
      setProcessing(false);
    }
    // 5. Navigate to order success page
    // navigate("/orders");
  };

  return (
    <Layout>
      {/* {Header} */}
      <div className="payment_header"> check out ({totalItem}) items</div>
      {/* {Payment Method} */}
      <section className="payment">
        {/* {Adress} */}
        <div className="flex">
          <h3>Delivery Adress</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane </div>
            <div>Chikago, IL</div>
          </div>
        </div>
        <hr />
        {/* {product} */}
        <div className="flex">
          <h3>Review Items and Delivery</h3>
          <div>
            {basket?.map((item, i) => (
              <ProductCard
                product={item.product}
                key={i}
                renderDesc={false}
                flex={true}
                renderAdd={false}
              />
            ))}
          </div>
        </div>
        <hr />
        {/* {card  form} */}
        <div className="flex">
          <h3>Payment Method</h3>
          <div className="payment_card_container">
            <div className="payment_details">
              <form action={handlePayment}></form>
              {/* {error} */}
              {cardError && <small>{cardError}</small>}
              {/* {Card Element} */}
              <CardElement onChange={handleChange} />
              <div className="payment_price">
                <div>
                  <span>Total Order | {formatMoney(total)}</span>
                </div>
                <button type="submit" onClick={handlePayment}>
                  {processing ? (
                    <div className="loading">
                      <ClipLoader color="grey" size={12} />
                      <p>Please wait...</p>
                    </div>
                  ) : (
                    "pay now"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
