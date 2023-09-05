// sk_test_51NkGTzIEa4vt5WF9yhhbh3LfRowuXSm9PwjVxA3QKICFrxGJh4zXo7LHLPFWnYfZY3A6H8xhZV9YtvmRFNDFl8Tx00tadJfVpR

// laundry id: price_1Nmj3UIEa4vt5WF93wVKeToB
//dry cleaning id: price_1NmjBgIEa4vt5WF9LGwdtDVk

const express = require('express');
const cors = require('cors')
//initialize stripe client for our acc
const stripe = require('stripe')('sk_test_51NkGTzIEa4vt5WF9yhhbh3LfRowuXSm9PwjVxA3QKICFrxGJh4zXo7LHLPFWnYfZY3A6H8xhZV9YtvmRFNDFl8Tx00tadJfVpR');

//express server
const app = express();
//cors middleware on server
app.use(cors());
app.use(express.static("public"));
app.use(express.json())

//post request path to stripe
app.post("/checkout", async (req, res) => {
    //stripe wants price and quantity
    const items = req.body.items;
    let lineItems = []
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });
    //sends to frontend for user to checkout with stripe
    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log('listening on port 4000'))


