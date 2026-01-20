import { useContext, useEffect, useState } from "react";
import Layout from "../../assets/Components/Layout/Layout";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../assets/Components/DataProvider/DataProvider";
import ProductCard from "../../assets/Components/Product/ProductCard";
import { useNavigate } from "react-router-dom";
import styles from "./orders.module.css";

export default function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setOrders([]);
      setLoading(false);
      return;
    }

    const unsubscribe = db
      .collection("users")
      .doc(user.uid)
      .collection("orders")
      .orderBy("created", "desc")
      .onSnapshot(
        (snapshot) => {
          const ordersData = snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }));

          console.log("Orders loaded:", ordersData);
          setOrders(ordersData);
          setLoading(false);
        },
        (error) => {
          console.error("Error loading orders:", error);
          setLoading(false);
        }
      );

    return () => unsubscribe();
  }, [user]);

  // Function to fetch basket from main orders collection if missing
  const fetchBasketFromMainOrder = async (orderId) => {
    try {
      const mainOrderDoc = await db.collection("orders").doc(orderId).get();
      if (mainOrderDoc.exists) {
        return mainOrderDoc.data().basket || [];
      }
    } catch (error) {
      console.error("Error fetching basket from main order:", error);
    }
    return [];
  };

  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.orders_container}>
          <h2>Your Orders</h2>

          {loading ? (
            <div style={{ padding: "20px" }}>Loading orders...</div>
          ) : orders.length === 0 ? (
            <div style={{ padding: "20px" }}>You don't have any orders yet</div>
          ) : (
            <div>
              {orders.map((eachOrder) => {
                // Get basket from user order data or fetch from main orders
                const basket = eachOrder.data.basket || [];

                return (
                  <div key={eachOrder.id} className={styles.order_item}>
                    <hr />
                    <div className={styles.order_header}>
                      <p>
                        <strong>Order ID:</strong> {eachOrder.id}
                      </p>
                      <p>
                        <strong>Date:</strong>{" "}
                        {new Date(eachOrder.data.created).toLocaleDateString()}
                      </p>
                      <p>
                        <strong>Total:</strong>{" "}
                        {eachOrder.data.amountFormatted ||
                          `$${(eachOrder.data.amount / 100).toFixed(2)}`}
                      </p>
                      <p>
                        <strong>Status:</strong>{" "}
                        {eachOrder.data.status || "pending"}
                      </p>
                      <p>
                        <strong>Items:</strong> {basket.length || 0}
                      </p>
                    </div>

                    {basket.length > 0 ? (
                      <div className={styles.order_products}>
                        <h4>Products:</h4>
                        {basket.map((item, index) => {
                          // Handle different possible item structures
                          const product = item?.product || item || {};
                          const amount = item?.amount || 1;

                          return (
                            <div
                              key={`${product?.id || eachOrder.id}_${index}`}
                              className={styles.order_product_item}
                            >
                              <ProductCard
                                product={product}
                                flex={true}
                                renderAdd={false}
                                renderDesc={false}
                              />
                              <div className={styles.product_quantity}>
                                Quantity: {amount}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className={styles.no_products}>
                        <p>No product details available for this order.</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
