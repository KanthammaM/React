import logo from './logo.svg';
import './App.css';
import Place from './components/Place';


function App() {
  return (
    <>
    <div className="container">
    <Place name="Goa" desc="The state of Goa, in India, is famous for its beaches and places of worship. Tourism is its primary industry, and is generally focused on the coastal areas of Goa,
       with decreased tourist activity inland." img="goabeach" ratings="3.9" />
    <Place name="Bali" desc="Bali Indonesia. Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude 
      peace and serenity. " img="bali" ratings="4.9" />
    <Place name="Pattaya" desc="The Pattaya Bay area is one of Asia's largest beach resorts and the second most visited city in Thailand, after Bangkok. " img="pattaya-floating-market" ratings="4.6"/>
    <Place name="Sri Lanka" desc="This is an island of magical proportions, once known as Serendib, Taprobane, the Pearl of the Indian Ocean, and Ceylon." img="srilanka-temple" ratings="4.4" />
    
    </div>
    
    </>
  );
}

export default App;
