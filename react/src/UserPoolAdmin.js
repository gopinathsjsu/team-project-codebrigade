import { CognitoUserPool} from "amazon-cognito-identity-js";

const AdminpoolData={
    UserPoolId: "us-east-1_UrLIk8f4m",
    ClientId: "14g6rq3n7q15spfrfljgbettn2" 
}

export default new CognitoUserPool(AdminpoolData);
