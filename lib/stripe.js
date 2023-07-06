import { loadStripe } from '@stripe/stripe-js';
let stripePromise;
const getStripePromise = async() => {
    const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
    if (!stripePromise && !!key) {
        stripePromise = await loadStripe(key);
    }
    return stripePromise;
}

export default getStripePromise;