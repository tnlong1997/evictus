const dev = {
	s3: {
		REGION: "ap-southeast-1",
		BUCKET: "notes-app-2-api-dev-attachmentsbucket-lll96pp8i4j4"
	},
	apiGateway: {
		REGION: "ap-southeast-1",
		URL: "https://peeacpwzg1.execute-api.ap-southeast-1.amazonaws.com/dev"
	},
	cognito: {
		REGION: "ap-southeast-1",
		USER_POOL_ID: "ap-southeast-1_NgxskqLZT",
		APP_CLIENT_ID: "3aictk0gee4tonoq274l0qvnil",
		IDENTITY_POOL_ID: "ap-southeast-1:ab430ee0-dd9e-47f2-b208-6d846a676aaf"
	},
	STRIPE_KEY: "pk_test_UZG3GQTosQEDeoeDi0UkX6VY",
};

const prod = {
	s3: {
		REGION: "YOUR_PROD_S3_UPLOADS_BUCKET_REGION",
		BUCKET: "YOUR_PROD_S3_UPLOADS_BUCKET_NAME"
	},
	apiGateway: {
		REGION: "ap-southeast-1",
		URL: "https://rhn7lwzo06.execute-api.ap-southeast-1.amazonaws.com/prod"
	},
	cognito: {
		REGION: "YOUR_PROD_COGNITO_REGION",
		USER_POOL_ID: "YOUR_PROD_COGNITO_USER_POOL_ID",
		APP_CLIENT_ID: "YOUR_PROD_COGNITO_APP_CLIENT_ID",
		IDENTITY_POOL_ID: "YOUR_PROD_IDENTITY_POOL_ID"
	},
	STRIPE_KEY: "pk_test_UZG3GQTosQEDeoeDi0UkX6VY",
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'dev'
	? dev
	: prod;

export default {
	// Add common config values here
	MAX_ATTACHMENT_SIZE: 5000000,
	...config
};
