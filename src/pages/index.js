import Head from "next/head";
import { useSession, signOut } from "next-auth/react";

const HomePage = () => {
  const { data: session } = useSession()
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop:"10%" }}>Welcome <span style={{color: "red"}}>{session?.user?.name}</span> , To Next Auth Home Page</h1>
    </div>
  );
};

export default HomePage;
