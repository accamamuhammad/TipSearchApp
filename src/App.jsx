import "./App.css";
import Form from "./components/Form";
/** 
import Label from "./components/label";
<Label language={"javascript"} />
*/

function App() {
  return (
    <main className="w-screen h-screen bg-mainBG flex items-center justify-center">
      <div className="w-screen md:w-[700px] h-[500px] mx-5 md:mx-0 rounded-xl bg-white flex items-center justify-center">
        <Form />
      </div>
    </main>
  );
}

export default App;
