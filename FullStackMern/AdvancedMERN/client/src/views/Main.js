import axios from "axios";
import React, { useEffect, useState } from "react";
import PersonForms from "../components/PersonForrms";
import PersonList from "../components/PersonList";

const Main = () => {
  const [people, setPeople] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8000/api/people").then((res) => {
      setPeople(res.data);
      setLoaded(true);
    });
  }, []);

  const removeFromDom = (personId) => {
    setPeople(people.filter((person) => person._id !== personId));
  };

  const createPerson = (person) => {
    setLoaded(false);  
    axios.post("http://localhost:8000/api/people", person)
        .then((res) => {
            console.log(res.data);
            setPeople([...people, res.data]);
            setLoaded(true)
        });
  };

  return (
    <div>
      <PersonForms
        onSubmitProp={createPerson}
        initialFirstName=""
        initialLastName=""
      />
      <hr />
      {loaded && <PersonList people={people} removeFromDom={removeFromDom} />}
    </div>
  );
};

export default Main;
