import "./App.css";
import Layout from "./Components/Layout/Layout";
import Input from "./Components/InputForm/Input";
import Detail from "./Components/Details/Detail";

function App() {
  return (
    <>
      <Layout weather="dark">
        <h1 className="heading">TempFactor</h1>
        <main>
          <Input />
          <Detail />
        </main>
      </Layout>
    </>
  );
}

export default App;
