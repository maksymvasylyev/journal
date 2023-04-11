// import logo from "./logo.svg";
import "./App.css";
import TabBar from "./componenets/TabBar/TabBar";
import Form from "./componenets/Form";
import { useState } from "react";

function App() {
  const [motto, setMotto] = useState("");
  const [notes, setNotes] = useState("");
  return (
    <>
      <header className="header">
        <strong>JOURNAL</strong>
      </header>

      <main>
        <Form
          notes={notes}
          motto={motto}
          setNotes={setNotes}
          setMotto={setMotto}
        />
        <section>
          <div className="tabBar">
            <TabBar />
          </div>
          <div className="entryList"></div>
        </section>

        <dl className="container">
          <dt>
            Name: <span className="output">{motto}</span>
          </dt>
          <dd>
            Email: <span className="output">{notes}</span>
          </dd>
        </dl>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
