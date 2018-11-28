import { Query } from "react-apollo";
import { CURRENT_USER_QUERY } from "./User";
import Signin from "./Signin";

const PleaseSignIn = props => (
  // <div>{props.children}</div>; // returns whatever is between PleaseSignin component in sell.js
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      console.log(data);
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        return (
          <div>
            <p>Please Sign In before Continueing</p>
            <Signin />
          </div>
        );
      }
      return props.children;
    }}
  </Query>
);

export default PleaseSignIn;
