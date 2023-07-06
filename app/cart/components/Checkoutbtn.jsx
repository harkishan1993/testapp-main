'use client'
import getStripePromise from "@/lib/stripe"
function Checkoutbtn() {
    const products = [{
        product: 1,
        name: "stripeproduct",
        price: 6000,
        quantity: 2

    }]
    const handleBtn = async () => {
        const stripe = await getStripePromise()
        const response = await fetch('http://localhost:3000/api/stripe-session/', {
            method: "POST", 
            cache: "no-cache", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(products),
        })
        const result = await response.json();
        if (result?.session) {
           stripe.redirectToCheckout({sessionId: result?.session?.id})
        }
    }
    return (
        <button type="button" className='capitalize btn tracking-wider text-center text-lg font-semibold' onClick={handleBtn}>
            proceed to checkout
        </button>
    )
}

export default Checkoutbtn