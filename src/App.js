import "./App.css";
import Layout from "./Components/Layout/Layout";
import Input from "./Components/InputForm/Input";
import Detail from "./Components/Details/Detail";

function App() {
  return (
    <>
      <Layout weather="">
        <h1 className="heading">Weather App</h1>
        <main>
          <Input />
          <Detail />
        </main>
      </Layout>
    </>
  );
}

export default App;
