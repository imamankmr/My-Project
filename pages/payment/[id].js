import axios from "axios";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Payment = () => {
  const router = useRouter();
  
  const makePayment = async () => {
    const val = {
      id: router.query?.id,
    };
    const { data } = await axios.post(`/api/razorpay`, val);

    const options = {
      key: process.env.RAZORPAY_KEY,
      name: "Aman",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thank You !",
      handler: function (response) {},
      prefill: {
        name: "Aman",
        email: "amankr@gmail.com",
        contact: 6209792987,
      },
    };

    const paymentObj = new window.Razorpay(options);
    paymentObj.open();
  };

  useEffect(() => {
    makePayment();
  }, []);

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
};

export default Payment;
