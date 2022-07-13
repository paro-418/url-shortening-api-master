import React from "react";
import BottomPart from "../BottomPart/BottomPart";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";
import SingleButton from "../SingleButton/SingleButton";
import TopPart from "../TopPart/TopPart";
import classes from "./UI.module.css";

const UI = () => {
  return <main>
    <Header/>
    <TopPart/>
    <Form/>
    <BottomPart/>
    <SingleButton/>
    <Footer/>
  </main>;
};

export default UI;
