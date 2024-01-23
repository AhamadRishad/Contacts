
import './App.css';
import StyledCard from './components/StyledCard';
import contacts from './data/contacts';
function App() {
  return (
   <>
   
  <StyledCard
  name={contacts[0].name}
  imgURL={contacts[0].imgURL}
  phone={contacts[0].phone}
  email={contacts[0].email}
  />

<StyledCard
  name={contacts[1].name}
  imgURL={contacts[1].imgURL}
  phone={contacts[1].phone}
  email={contacts[1].email}
  />

<StyledCard
  name={contacts[2].name}
  imgURL={contacts[2].imgURL}
  phone={contacts[2].phone}
  email={contacts[2].email}
  />
   </>
  );
}

export default App;
