import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../components/Navbar";
const WebLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      <main className="container">
        {navigation.state === "loading" && (
          <div className="alert alert-info my-5">Loading...</div>
        )}

        <Outlet />
      </main>
    </>
  );
};

export default WebLayout;
