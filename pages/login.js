import styles from "~/styles/Auth.module.sass";

import { useStorage } from "~/lib/hooks/useStorage";
import { useAuth } from "~/contexts/auth/Context";
import { useMutation } from "react-query";
import { Meta } from "~/components";
import { useState } from "react";

import AuthLayout from "~/layouts/auth/Layout";

function Login() {
	const { 
    login, 
    dispatch, 
    loginInputs, 
    LoginStatuses 
  } = useAuth();
	const storage = useStorage();
	const [alerts, setAlerts] = useState();
	const status = new LoginStatuses(storage, dispatch, setAlerts);

	const mutation = useMutation(login, {
		onSuccess: status.onSuccess,
		onError: status.onError,
	});

	return (
		<main className={styles.main}>
      <Meta title="Login" />
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
