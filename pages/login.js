import styles from "@/styles/Auth.module.sass";

import AuthLayout from "../src/layouts/auth/Layout";
import Meta from "@/components/Meta";

import { useStorage } from "@/hooks/useStorage";
import { useMutation } from "react-query";
import { useAuth } from "@/auth_context";
import { useState } from "react";

function Login() {
	const { 
    login, 
    dispatch, 
    loginInputs, 
    LoginStatuses 
  } = useAuth()
	const storage = useStorage();
	const [alerts, setAlerts] = useState();
	const status = new LoginStatuses(storage, dispatch, setAlerts);

	const mutation = useMutation(login, {
		onSuccess: status.onSuccess,
		onError: status.onError,
	});

	return (
		<main className={styles.main}>
      <Meta title="Login"/>
			<AuthLayout
				isLoginPage
				alerts={alerts}
				mutation={mutation}
				inputs={loginInputs}
			/>
		</main>
	);
};

export default Login;
