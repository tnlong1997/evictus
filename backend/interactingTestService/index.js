import AWS from "aws-sdk";
import {success, failure} from "./libs/response-lib";

export async function main(event, context, callback) {
	return success({"status": "success"});
};
