import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";

function App() {

  const [collaborators, setCollaborators] = useState([]);

  const newCollaborator = (collaborator) => {
    console.log(collaborator)
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div>

      <Banner />
      <Form onRegistered={collaborator => newCollaborator(collaborator)} />
    </div>
  );
}

export default App;
