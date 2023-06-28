import { useEffect } from "react";
import { signIn } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { TOKEN, USER_TYPES, userTypes } from "../utils/constants";
export const useAuth = () => {
  const initialStatus = { userId: "", password: "" };

  const navigate = useNavigate();
  const redirect = () => {
    const usertype = localStorage.getItem(USER_TYPES);
    const token = localStorage.getItem(TOKEN);
    console.log(usertype)
    console.log(token)
    if (!usertype || !token) {
      return;
    }
    if (usertype === userTypes.ADMIN) {
      navigate("/admin");
    } else if (usertype === userTypes.CUSTOMER) {
      navigate("/customer");
    } else if (usertype === userTypes.CLINT) {
      navigate("/clint");
    }
  };

  useEffect(() => {
    redirect();
  }, []);

  const onlogin = (values, { setSubmitting }) => {
    const userDetails = {userId: values.userId,password: values.password};
    // console.log(userDetails);
    const loginResponse = signIn(userDetails);
    // console.log(loginResponse)
    setSubmitting(false);
    redirect();
  };

  return { initialStatus, onlogin };
};
