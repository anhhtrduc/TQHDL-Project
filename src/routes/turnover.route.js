const express = require('express');
const Bill = require('../models/Bill');

const router = express.Router();
const restrict = require('../middlewares/auth.mdw');

router.get('/turnover_2020', restrict, async (req, res) => {
    const bills = await Bill.find({}).lean();
    let temp = [];
    for (const bill of bills) {
        if (bill.date.includes(2020)) {
            temp.push({
                month: new Date(bill.date).getMonth() + 1,
                price: bill.total,
            });
        }
    }
    temp.sort((a, b) => a.month - b.month);
    let holder = {};
    temp.forEach((d) => {
        if (holder.hasOwnProperty(d.month)) {
            holder[d.month] = holder[d.month] + parseInt(d.price);
        } else {
            holder[d.month] = parseInt(d.price);
        }
    });

    let obj2 = [];

    for (let prop in holder) {
        obj2.push({ month: prop, price: holder[prop] });
    }
    res.status(200).json(obj2);
});

router.get('/turnover_2021', restrict, async (req, res) => {
    const bills = await Bill.find({}).lean();
    let temp = [];
    for (const bill of bills) {
        if (bill.date.includes(2021)) {
            temp.push({
                month: new Date(bill.date).getMonth() + 1,
                price: bill.total,
            });
        }
    }
    temp.sort((a, b) => a.month - b.month);
    let holder = {};
    temp.forEach((d) => {
        if (holder.hasOwnProperty(d.month)) {
            holder[d.month] = holder[d.month] + parseInt(d.price);
        } else {
            holder[d.month] = parseInt(d.price);
        }
    });

    let obj2 = [];

    for (let prop in holder) {
        obj2.push({ month: prop, price: holder[prop] });
    }
    res.status(200).json(obj2);
});

router.get('/turnover_year',restrict, async (req, res)=>{
	const bills = await Bill.find({}).lean();
    let temp = [];
    for (const bill of bills) {
            temp.push({
                year: new Date(bill.date).getFullYear(),
                price: bill.total,
            });
        
    }
	temp.sort((a, b) => a.year - b.year);
    let holder = {};
    temp.forEach((d) => {
        if (holder.hasOwnProperty(d.year)) {
            holder[d.year] = holder[d.year] + parseInt(d.price);
        } else {
            holder[d.year] = parseInt(d.price);
        }
    });

    let obj2 = [];

    for (let prop in holder) {
        obj2.push({ year: prop, price: holder[prop] });
    }
    res.status(200).json(obj2);

})

router.get('/turnover', restrict, async (req, res) => {
    res.render('turnover');
});
router.get('/turnover_month', restrict, async (req, res) => {
    res.render('turnover_month');
});

module.exports = router;
