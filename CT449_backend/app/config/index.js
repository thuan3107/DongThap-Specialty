const config = {
	app: {
		port: process.env.PORT || 3000,
	},
	db: {
		uri: process.env.MONGODB_URI || "mongodb+srv://nhthuan336:12345@cluster0.vylulw3.mongodb.net/CT449_specialtyStore?retryWrites=true&w=majority",
	},
	jwt: {
		secret: process.env.JWT_SECRET || "contactbook-secret-key",
	},
};

module.exports = config;
