import { useSelector } from "react-redux";
import LoginPage from "../presentation/pages/loginPage";

function App() {
  const user = useSelector((state) => state.user);

  console.log("Utilisateur enregistré :", user);

  return <LoginPage />;
}

export default App;
