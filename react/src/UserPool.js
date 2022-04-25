import { CognitoUserPool} from "amazon-cognito-identity-js";

const poolData={
    UserPoolId: "us-east-1_gRaTrSrVk",
    ClientId: "36quru15nbho9vomp3g39o9a4r" 
}

export default new CognitoUserPool(poolData);