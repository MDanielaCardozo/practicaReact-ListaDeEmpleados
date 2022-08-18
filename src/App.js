import React from "react";
import EmpleadoList from "./components/EmpleadoList";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {


  return (
    <div>
      <h1 className="display-3 text-center container my-5 text-primary">
        Lista de empleados
      </h1>
      <hr />
      <EmpleadoList>
      </EmpleadoList>
    </div>
  );
};

export default App;
