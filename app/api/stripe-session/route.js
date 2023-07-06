import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const key = process.env.STRIPE_SECRET_KEY || ""

const stripe = new Stripe(key, {
    apiVersion: "2022-11-15"
})

export const POST = async (req) => {
    const body = await req.json();
    console.log(body)
    try {
        if (body.length > 0) {
            const session = await stripe.checkout.sessions.create({
                submit_type: "pay",
                payment_method_types: ['card'],
                billing_address_collection: "auto",
                shipping_options: [{ shipping_rate: "shr_1NQyO8SApofhLfBI37CX0Xri" }],
                line_items: [{
                    price_data: {
                      currency: 'inr',
                      product_data: {
                        name: 'T-shirt',
                      },
                      unit_amount: 2000,
                    },
                    quantity: 1,
                  }],
                line_items: body.map((item) => {
                    return {
                        price_data: {
                          currency: 'inr',
                          product_data: {
                            name: item.name,
                          },
                          unit_amount: item.price * 100,
                        },
                        quantity: item.quantity,
                      }
                }),
                mode: 'payment',
                success_url: `${req.headers.get('origin')}/?success=true`,
                cancel_url: `${req.headers.get('origin')}/?canceled=true`,
            });
            return NextResponse.json({ session });
        } else {
            return NextResponse.json("No data found");
        }

    } catch (err) {
        return NextResponse.json(err.message);
    }

}