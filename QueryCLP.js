//script to query CLP
/*
* Query CLP ,
* Store in to the s3
* return back the s3 file location.
* */
import {S3Client} from '@aws-sdk/client-s3';
import CREDS from "./creds.js"


const CLP_ENDPOINT = ""

const getS3LogSearchResult = (service_name,text_to_search)=>{
    //query CLP endpoint, response will be a...

    //put to an s3 bucket

    //return the s3 url.
    return "https://logging-solution-hackathon.s3.us-west-2.amazonaws.com/test.log";
}

export default getS3LogSearchResult