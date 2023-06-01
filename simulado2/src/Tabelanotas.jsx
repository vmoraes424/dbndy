import React, { useEffect, useState } from "react";
import "./style.css";
import { dados } from "./notas";

export default function Tabelanotas() {
  const [notas, setNotas] = useState([]);
  const [adicionadas, setAdicionadas] = useState([]);

  useEffect(() => {
    setNotas(dados);
  }, []);

  function adicionaNota(nota) {
    const adc2 = [...adicionadas, nota];
    setAdicionadas(adc2);
  }

  const listaNotas = notas.map((nota) => (
    <tr>
      <td className="w-25">
        <img
          src={nota.foto}
          className="img-fluid img-thumbnail"
          alt="nota"
          width={300}
        />
      </td>
      <td>
        <p>{nota.descricao}</p>
        <p>R$: {nota.valor}.00</p>
        <button
          className="btn btn-success"
          onClick={() => adicionaNota(nota.valor)}
        >
          Adicionar
        </button>
      </td>
    </tr>
  ));

  let total = 0;
  const todo = adicionadas.reduce((acc, valor) => acc + valor, total)

    function validarSaque() {
        if(todo > 500) {
            alert("Ei ei ei, não pode")
        } else {
            alert("Saque ok!")
            setAdicionadas([])
        }
    }

  return (
    <>
      <nav className="nav nav-pills nav-justified mt-2 mx-5">
        <p className="nav-link fs-5" href="#">
          Adicionadas: [{adicionadas.join(", ")}]
        </p>
        <p className="nav-link fs-5" href="#">
          Total: [R$: {todo.toLocaleString("pt-br", { minimumFractionDigits: 2})}]
        </p>
        <button className="btn btn-success" href="#" onClick={validarSaque}>
          Concluir Saque
        </button>{" "}
        &nbsp; &nbsp;
        <button className="btn btn-danger" onClick={() => setAdicionadas([])}>Limpar</button>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-image">
              <thead>
                <tr>
                  <th scope="col">Notas Disponiveis</th>
                </tr>
              </thead>
              <tbody>{listaNotas}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
