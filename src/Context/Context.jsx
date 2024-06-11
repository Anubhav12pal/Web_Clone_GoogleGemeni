import { createContext, useState } from "react";
import run from "../Config/gemeni";
export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recent, setRecent] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSent = async (prompt) => {
    setResult("");
    setLoading(true);
    setShowResult(true);
    // const response =
    const response = await run(input);
    setResult(response);
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecent,
    recent,
    showResult,
    loading,
    input,
    setInput,
    result,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
