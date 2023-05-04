const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route");
const authRouter = require("./app/routes/auth.route");
const ApiError = require("./app/api-error");

const fs = require("fs");
const path = require("path");

const app = express();

const PRODUCT_DATA_FILE = path.join(__dirname, "server-product-data.json");
const CART_DATA_FILE = path.join(__dirname, "server-cart-data.json");


app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
	res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
	res.setHeader("Pragma", "no-cache");
	res.setHeader("Expires", "0");
	next();
});

app.get("/api/products", (req, res) => {
	fs.readFile(PRODUCT_DATA_FILE, (err, data) => {
		console.log();
		res.setHeader("Cache-Control", "no-cache");
		res.json(JSON.parse(data));
	});
});
app.get("/api/products/title", (req, res) => {
	fs.readFile(PRODUCT_DATA_FILE, (err, data) => {
		console.log();
		res.setHeader("Cache-Control", "no-cache");
		res.json(JSON.parse(data));
	});
});
app.get("/api/cart", (req, res) => {
	fs.readFile(CART_DATA_FILE, (err, data) => {
		res.setHeader("Cache-Control", "no-cache");
		res.json(JSON.parse(data));
	});
});

app.post("/api/cart", (req, res) => {
	fs.readFile(CART_DATA_FILE, (err, data) => {
		const cartProducts = JSON.parse(data);
		const newCartProduct = {
			id: req.body.id,
			title: req.body.title,
			picture: req.body.picture,
			description: req.body.description,
			price: req.body.price,
			quantity: 1,
		};
		let cartProductExists = false;
		cartProducts.map((cartProduct) => {
			if (cartProduct.id === newCartProduct.id) {
				cartProduct.quantity++;
				cartProductExists = true;
			}
		});
		if (!cartProductExists) cartProducts.push(newCartProduct);
		fs.writeFile(
			CART_DATA_FILE,
			JSON.stringify(cartProducts, null, 5),
			() => {
				res.setHeader("Cache-Control", "no-cache");
				res.json(cartProducts);
			}
		);
	});
});

app.post("/api/cart/delete", (req, res) => {
	fs.readFile(CART_DATA_FILE, (err, data) => {
		let cartProducts = JSON.parse(data);
		cartProducts.map((cartProduct) => {
			if (cartProduct.id === req.body.id && cartProduct.quantity > 1) {
				cartProduct.quantity--;
			} else if (
				cartProduct.id === req.body.id &&
				cartProduct.quantity === 1
			) {
				const cartIndexToRemove = cartProducts.findIndex(
					(cartProduct) => cartProduct.id === req.body.id
				);
				cartProducts.splice(cartIndexToRemove, 1);
			}
		});
		fs.writeFile(
			CART_DATA_FILE,
			JSON.stringify(cartProducts, null, 5),
			() => {
				res.setHeader("Cache-Control", "no-cache");
				res.json(cartProducts);
			}
		);
	});
});


app.post("/api/cart/delete/all", (req, res) => {
	fs.readFile(CART_DATA_FILE, () => {
		let emptyCart = [];
		fs.writeFile(CART_DATA_FILE, JSON.stringify(emptyCart, null, 5), () => {
			res.json(emptyCart);
		});
	});
});


app.get("/", (req, res) => {
	res.json({ message: "Welcome to contact book application." });
});

app.use("/api/contacts", contactsRouter);
app.use("/api/auth", authRouter);

// handle 404 response
app.use((req, res, next) => {
	return next(new ApiError(404, "Resource not found"));
});

// define error-handling middleware last, after other app.use() and routes calls
app.use((error, req, res, next) => {
	return res.status(error.statusCode || 500).json({
		message: error.message || "Internal Server Error",
	});
});

module.exports = app;
