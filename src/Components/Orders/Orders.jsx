import { useState } from "react";
import "./Orders.css";

function Orders() {
  const [username, setUsername] = useState("");
  const [usertext, setUsertext] = useState("");
  const [usernumber, setUsernumber] = useState("");
  const [userdate, setUserdate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "Enviando os dados:" +
        username +
        " " +
        usertext +
        " " +
        userdate +
        " " +
        usernumber
    );
  };

  const handleClear = () => {
    setUsername("");
    setUsertext("");
    setUsernumber("");
  };

  return (
    <div className="container">
      <h1>SLG</h1>
      <h2>NOVO PEDIDO DE VENDA</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <label>
            Nome:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className="input-box">
          <label>
            Produto:
            <input
              type="text"
              value={usertext}
              onChange={(e) => setUsertext(e.target.value)}
            />
          </label>
        </div>
        <div className="input-box">
          <label>
            Quantidade:
            <input
              type="number"
              value={usernumber}
              onChange={(e) => setUsernumber(e.target.value)}
            />
          </label>
        </div>
        <div className="input-box">
          <label>
            Prazo para entrega:
            <input
              type="date"
              value={userdate}
              onChange={(e) => setUserdate(e.target.value)}
            />
          </label>
        </div>
        
        <button type="submit" className="btn btn-incluir">Incluir Item</button>
                <button type="button" className="btn btn-excluir" onClick={handleClear}>Excluir Iten</button>
            </form>
        </div>
    );
}

export default Orders;
