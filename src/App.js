import "./App.css";
import Layout from "./Components/Layout/Layout";
import Input from "./Components/InputForm/Input";

function App() {
  return (
    <>
      <Layout>
        <h1 className="heading">Weather App</h1>
        <main>
          <Input />
        </main>
      </Layout>
    </>
  );
}

export default App;
