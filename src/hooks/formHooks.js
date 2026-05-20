import { useState } from "react";

const useForm = (callback, initState) => {
  const [inputs, setInputs] = useState(initState);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setInputs((currentInputs) => ({
      ...currentInputs,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setInputs(initState);
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    setInputs,
    resetForm,
  };
};

export default useForm;
