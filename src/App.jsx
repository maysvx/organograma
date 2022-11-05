import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {

  const equipes = [
    {
      nome: 'Recursos Humanos',
      corPrimaria: '#6500B0',
      corSecundaria: '#D396FF',
    },
    {
      nome: 'Administração',
      corPrimaria: '#D1D100',
      corSecundaria: '#FFFF8A',
    },
    {
      nome: 'TI',
      corPrimaria: '#FF007F',
      corSecundaria: '#FF8AC4',
    },
    {
      nome: 'Gerência',
      corPrimaria: '#39FF14',
      corSecundaria: '#ADFF9E',
    },
    {
      nome: 'Operacional',
      corPrimaria: '#2A2ABB',
      corSecundaria: '#AFAFED',
    },
    {
      nome: 'Marketing',
      corPrimaria: '#DC143C',
      corSecundaria: '#F4869C',
    },
    {
      nome: 'Serviços Gerais',
      corPrimaria: '#0476D0',
      corSecundaria: '#62B8FC',
    }
  ]

  const [collaborators, setCollaborators] = useState([]);

  const newCollaborator = (collaborator) => {
    console.log(collaborator)
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div>

      <Banner />
      <Form onRegistered={collaborator => newCollaborator(collaborator)} />

      {equipes.map(equipe =>
        <Team
          nome={equipe.nome}
          key={equipe.nome}
          corPrimaria={equipe.corPrimaria}
          corSecundaria={equipe.corSecundaria}
        />
      )}

    </div>
  );
}

export default App;
