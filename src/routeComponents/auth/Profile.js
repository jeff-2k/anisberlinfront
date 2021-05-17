import { useState, useEffect } from "react";

import api from "../../apis/index";

function Profile() {
  const [state, setState] = useState({
    AddressStreet: "",
    AddressNum: "",
    AddressCity: "",
    AddressPostalCode: "",
    AdressNeighbourhood: "",  
    stateOrProvince: "",
    country: "",
    _id: "",
    name: "",
    email: "",
    phoneNumber: "",
  });

  // O useEffect é um Hook que executa a sua callback (primeiro parâmetro) toda vez que qualquer coisa na sua array de dependências (segundo parâmetro) sofre qualquer tipo de alteração. Caso a array de dependências esteja vazia, o useEffect roda a callback uma vez assim que o componente renderiza na tela (mesmo efeito do componentDidMount)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/profile");

        console.log(response);

        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Personal Info</h2>
      <hr />
      <ul>
        <li>
          <strong>Name: </strong>
          {state.name}
        </li>
        <li>
          <strong>E-mail: </strong>
          {state.email}
        </li>
        <li>
          <strong>Phone Number: </strong>
          {state.phoneNumber}
        </li>
      </ul>

      <h2>Address Info</h2>
      <hr />

      <ul>
        <li>
          <strong>Post Code: </strong>
          {state.AddressPostalCode}
        </li>
        <li>
          <strong>Street: </strong>
          {state.AddressStreet}
        </li>
        <li>
          <strong>Number: </strong>
          {state.AddressNum}
        </li>
        <li>
          <strong>City: </strong>
          {state.AddressCity}
        </li>
        <li>
          <strong>Neighbourhood: </strong>
          {state.neighbourhood}
        </li>
        <li>
          <strong>State or Province: </strong>
          {state.AddressState}
        </li>
        <li>
          <strong>Country: </strong>
          {state.AddressCountry}
        </li>
      </ul>
    </div>
  );
}

export default Profile;
