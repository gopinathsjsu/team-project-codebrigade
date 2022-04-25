import { CognitoUserPool } from "amazon-cognito-identity-js";

const AdminPoolData = {
    UserPoolId: "us-east-1_mVutZVfG9",
    ClientId: "6112kpha4f5rmj7f2sn65efpat"
}

export default new CognitoUserPool(AdminPoolData);