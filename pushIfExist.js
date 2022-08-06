const Role = require("../src/models/Role");
require("dotenv").config();
require("../src/database")();
(async () => {
	try {
		const data = await Role.updateMany(
			{
				title: {
					$in: ["seller", "secondary seller"],
				},

				permissions: { $nin: ["update-invoice"] },
			},
			{ $push: { permissions: "update-invoice" } }
		);
		if (data) {
			// eslint-disable-next-line no-console
			console.log("----- Seller Permission Updated Successfully -----");
		}

		process.exit();
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log("Error ", error);
	}
})();
