// import logo from "./logo.svg";
import "./App.css";
import TabBar from "./componenets/TabBar/TabBar";

function App() {
  return (
    <>
      <header className="header">
        <strong>JOURNAL</strong>
      </header>

      <main>
        <form className="form">
          <p className="entryP">NEW ENTRY</p>
          <label for="mottoInput" className="label">
            Motto
          </label>
          <textarea
            type="text"
            name="mottoInput"
            className="input"
            cols="30"
            rows="3"
          />

          <label for="notesInput" className="label">
            Notes
          </label>
          <textarea
            type="text"
            name="notesInput"
            className="input"
            cols="30"
            rows="10"
          />
          <button className="createBotton">Create</button>
        </form>
        <section>
          <div className="tabBar">
            <TabBar />
          </div>
          <div className="entryList"></div>
        </section>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
