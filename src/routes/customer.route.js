const express = require('express');
const Customer = require('../models/Customer');
const Bill = require('../models/Bill');
const Product = require('../models/Product');

const router = express.Router();
const restrict = require('../middlewares/auth.mdw');

router.get('/customer', restrict, async (req, res) => {
    const user = req.session.authUser;
    let temp = [];
    const bills = await Bill.find({}).lean();
    for (const bill of bills) {
        for (const item of bill.product) {
            const product = await Product.findById(item.id).lean();
            if (product.store === user._id) {
                const customer = await Customer.findById(bill.customer).lean();
                temp.push(customer);
            }
        }
    }
    const customers = [
        ...new Map(temp.map((item) => [JSON.stringify(item), item])).values(),
    ];
    res.render('customer', { customers });
});

module.exports = router;
