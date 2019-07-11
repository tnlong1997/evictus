import AWS from "aws-sdk";
import {PythonShell} from 'python-shell';
import {success, failure} from "./libs/response-lib";
import {inputParser} from "./libs/parser-lib";

export async function main(event, context, callback) {
	let body = JSON.parse(event.body);
	const fs = require("fs");
	const s3 = new AWS.S3({
		accessKeyId: "AKIAUSPIXSL35C5NGLMV",
		secretAccessKey: "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",
	});

	let solutionFileName = event.pathParameters.id + '.py';

	let params = {
		Bucket: 'evictus-code-storage',
		Key: solutionFileName
	};

	let response = await s3.getObject(params).promise();

	let promise = new Promise(function(resolve, reject) {

		fs.writeFile("/tmp/tmp.py", response.Body.toString(), function(err) {
		    if (err) {
		        reject(err);
		    }
			try {
				let pythonShell = new PythonShell("/tmp/tmp.py", {mode: "text"});
				let output;

				for (let input of inputParser(body.input)) {
					pythonShell.send(input);
				}

				pythonShell.on("message", function(result) {
					output = result;
				});

				pythonShell.end(err => {
					if (err) {
						reject(err);
					} else {
						try {
							fs.unlinkSync("/tmp/tmp.py");
						} catch(err) {
							reject(err)
						}
						resolve(output);
					}
				});
			} catch (err) {
				reject(err);
			}
		});
	});

	return promise.then(
		output => {
			return success({output: output});
		},
		err => {
			console.log(err);
			return failure({err: err});
		}
	);


}
