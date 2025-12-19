import { useContext, useEffect, useState } from "react";
import Layout from "../../assets/Components/Layout/Layout";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../assets/Components/DataProvider/DataProvider";
import ProductCard from "../../assets/Components/Product/ProductCard";
import styles from "./orders.module.css";
export default function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);
  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.orders_container}>
          <h2>Your Orders</h2>
          {orders.length == 0 && (
            <div style={{ padding: "20px" }}>You don't have Orders yet</div>
          )}

          <div>
            {orders?.map((eachOrder) => (
              <div key={eachOrder.id}>
                <hr />
                <p>Order ID: {eachOrder.id}</p>

                {eachOrder?.data?.basket?.map((order) => (
                  <ProductCard
                    key={order.id}
                    product={order.product}
                    flex={true}
                    renderAdd={false}
                    renderDesc={false}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
