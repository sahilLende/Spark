import { useContext } from "react";
import Hero from "../UI/Home/Hero";
import { Info, Info2 } from "../UI/Home/Info";
import { AuthContext, authContextValue } from "../context/auth";
import { Navigate } from "react-router-dom";
const Home = () => {
  const { user } = useContext(AuthContext) as authContextValue;
  if (user) return <Navigate to="dashboard" replace />;
  return (
    <>
      <Hero />
      <Info />
      <Info2 />
    </>
  );
};

export default Home;
