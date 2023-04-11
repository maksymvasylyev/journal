import React from "react";
import { useState } from "react";

export default function Form({ notes, setNotes, motto, setMotto }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newMottoInput = data.mottoInput;
    setMotto(newMottoInput);
    const newNote = data.notesInput;
    setNotes(newNote);
  }
  return (
    <>
      <form
        className="form"
        aria-labelledby="user-details"
        onSubmit={handleSubmit}
      >
        <p className="entryP">NEW ENTRY</p>
        <label htmlFor="mottoInput" className="label">
          Motto
        </label>
        <input
          type="text"
          id="mottoInput"
          name="mottoInput"
          className="input"
          cols="30"
          rows="3"
        />

        <label for="notesInput" className="label">
          Notes
        </label>
        <input
          type="text"
          id="notesInput"
          name="notesInput"
          className="input"
          cols="30"
          rows="10"
        />
        <button className="createBotton" type="submit">
          Create
        </button>
      </form>
    </>
  );
}
