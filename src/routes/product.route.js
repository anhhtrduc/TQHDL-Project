const express = require('express');
const Product = require('../models/Product');
const Bill = require('../models/Bill');

const router = express.Router();
const restrict = require('../middlewares/auth.mdw');

router.get('/product', restrict, async (req, res) => {
    const user = req.session.authUser;
    const temp = await Product.find({ store: user._id }).lean();
    let temp_product = [];
    for (const item of temp) {
        if (item.quantity > 0) {
            temp_product.push(item);
        }
    }
    const product = [
        ...new Map(
            temp_product.map((item) => [JSON.stringify(item), item])
        ).values(),
    ];
    res.render('product', { product });
});

router.get('/sold', restrict, async (req, res) => {
    const user = req.session.authUser;
    let temp = [];
    const bills = await Bill.find({}).lean();
    for (const bill of bills) {
        for (const item of bill.product) {
            const product = await Product.findById(item.id).lean();
            if (product.store === user._id) {
                delete product.quantity;
                temp.push(product);
            }
        }
    }
    const product = [
        ...new Map(temp.map((item) => [JSON.stringify(item), item])).values(),
    ];
    res.render('product', { product });
});

router.get('/top_sold_2020', restrict, async (req, res) => {
    const user = req.session.authUser;
    const bills = await Bill.find({}).lean();
    let temp_2020 = [];
    for (const bill of bills) {
        if (bill.date.includes(2020)) {
            for (const item of bill.product) {
                const product = await Product.findById(item.id).lean();
                if (product.store === user._id) {
                    temp_2020.push({
                        name: product.name,
                        quantity: item.quantity,
                    });
                }
            }
        }
    }
	let holder = {};
	temp_2020.forEach((d) => {
		if (holder.hasOwnProperty(d.name)) {
		  holder[d.name] = holder[d.name] + parseInt(d.quantity);
		} else {
		  holder[d.name] = parseInt(d.quantity);
		}
	  });
	  
	  let obj2 = [];
	  
	  for (let prop in holder) {
		obj2.push({ name: prop, quantity: holder[prop] });
	  }

    res.status(200).json(obj2);
});

router.get('/top_sold_2021', restrict, async (req, res) => {
    const user = req.session.authUser;
    const bills = await Bill.find({}).lean();
    let temp_2021 = [];
    for (const bill of bills) {
        if (bill.date.includes(2021)) {
            for (const item of bill.product) {
                const product = await Product.findById(item.id).lean();
                if (product.store === user._id) {
                    temp_2021.push({
                        name: product.name,
                        quantity: item.quantity,
                    });
                }
            }
        }
    }
    let holder = {};
	temp_2021.forEach((d) => {
		if (holder.hasOwnProperty(d.name)) {
		  holder[d.name] = holder[d.name] + parseInt(d.quantity);
		} else {
		  holder[d.name] = parseInt(d.quantity);
		}
	  });
	  
	  let obj2 = [];
	  
	  for (let prop in holder) {
		obj2.push({ name: prop, quantity: holder[prop] });
	  }

    res.status(200).json(obj2);
});

router.get('/top_sold_visualize', restrict, async (req, res) => {
    res.render('visualize');
});

module.exports = router;
