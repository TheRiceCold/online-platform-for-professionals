import styles from "@/styles/Auth.module.sass";

import Head from "next/head";
import AuthLayout from "@/layouts/auth/Layout";

import {useState} from "react";
import {useAuth} from "@/auth_context";
import {useHelpers} from "@/helpers_context";
import {useMutation, useQueries} from "react-query";

function SignUp() {
  const [alerts, setAlerts] = useState([]);
  const {getCities, getRegions} = useHelpers();

  const {
    signup, 
    signupInputs,
    SignupStatuses
  } = useAuth();

  const [
    {data: cities}, 
    {data: regions}
  ] = useQueries([
    { 
      queryKey: "cities", 
      queryFn: getCities 
    }, 
    { 
      queryKey: "regions", 
      queryFn: getRegions
    }
  ]);

  const inputs = signupInputs(regions, cities);

  const status = new SignupStatuses(setAlerts);
  
  const mutation = useMutation(signup, { 
    onSuccess: status.onSuccess,
    onError: status.onError
  });

  return (
    <main className={styles.main}>
      <Head>
        <title>Create an Account</title>
      </Head>
      <AuthLayout 
        alerts={alerts}
        inputs={inputs}
        mutation={mutation}
      />
    </main>
  );
}

export default SignUp;
