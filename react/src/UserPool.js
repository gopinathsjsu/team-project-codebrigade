import { CognitoUserPool} from "amazon-cognito-identity-js";

const poolData={
    UserPoolId: "us-east-1_g6Qg9colI",
    ClientId: "1lmlpi7t88fos1rrkemfb73qgu" 
}

export default new CognitoUserPool(poolData);