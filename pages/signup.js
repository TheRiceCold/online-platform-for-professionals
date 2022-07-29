import styles from "@/styles/Auth.module.sass";

import AuthLayout from "@/layouts/auth/Layout";
import Meta from "@/components/Meta";
import Axios from "@/axios";
import axios from "axios";

import { useMutation, useQueries } from "react-query";
import { useAuth } from "@/auth_context";
import { useState } from "react";

function SignUp({ cities, regions }) {
  const [alerts, setAlerts] = useState([]);

  const {
    signup, 
    signupInputs,
    SignupStatuses
  } = useAuth();

  const status = new SignupStatuses(setAlerts);
  const inputs = signupInputs(regions, cities);
  
  const mutation = useMutation(signup, { 
    onSuccess: status.onSuccess,
    onError: status.onError
  });

  return (
    <main className={styles.main}>
      <Meta title="Create an Account"/>
      <AuthLayout 
        alerts={alerts}
        inputs={inputs}
        mutation={mutation}
      />
    </main>
  );
}

export async function getServerSideProps(ctx) {
  const baseURL = "http://localhost:3000/api/locations/";
  const { data: cities }= await axios(`${baseURL}cities`);
  const { data: regions }= await axios(`${baseURL}regions`);
  
  return {
    props: {
      cities, 
      regions,
    }
  }
}

export default SignUp;
