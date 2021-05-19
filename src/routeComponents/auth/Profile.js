import { useState, useEffect } from "react";
import background from '../../components/images/backgroundanis/background-signup-01.png'
import './Profile.css'


import api from "../../apis/index";

function Profile() {
  const [state, setState] = useState({
    AddressStreet: "",
    AddressNum: "",
    AddressCity: "",
    AddressPostalCode: "",
    AddressState: "",
    AddressCountry: "",
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
       <img src={background} alt="background" class="bg" />
      <h2 className="Big">Personal Info</h2>
      <hr />
      <ul>
        <li>
          <strong className="minor">Name: </strong>
          {state.name}
        </li>
        <li>
          <strong className="minor">E-mail: </strong>
          {state.email}
        </li>
        <li>
          <strong className="minor">Phone Number: </strong>
          {state.phoneNumber}
        </li>
      </ul>

      <h2 className="Big">Address Info</h2>
      <hr />

      <ul>
        <li>
          <strong className="minor">Post Code: </strong>
          {state.AddressPostalCode}
        </li>
        <li>
          <strong className="minor">Street: </strong>
          {state.AddressStreet}
        </li>
        <li>
          <strong className="minor">Number: </strong>
          {state.AddressNum}
        </li>
        <li>
          <strong className="minor">City: </strong>
          {state.AddressCity}
        </li>
        <li>
          <strong className="minor">Neighbourhood: </strong>
          {state.neighbourhood}
        </li>
        <li>
          <strong className="minor">State or Province: </strong>
          {state.AddressState}
        </li>
        <li>
          <strong className="minor">Country: </strong>
          {state.AddressCountry}
        </li>
      </ul>
    </div>
  );
}

export default Profile;
