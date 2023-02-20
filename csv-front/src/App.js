import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useForm } from "react-hook-form";
import Uploader from "./components/Uploader/Uploader";
import Table from "./components/Table/Table";

function App() {
  return (
    <>
      <Uploader />
      <Table />
    </>
  );
}

export default App;
