import "../Home/home.css";
import Footer from "../../Components/Footer/index.js";
import { Button, Card } from 'react-bootstrap';
const bgImage = "https://static.hollywoodreporter.com/sites/default/files/2020/04/modern_family_finale_-publicity_-_h_2020_-928x523.jpg";

function App() {

  var divStyle = {
    background: "linearGradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url("+bgImage+")",
    backgroundSize : "cover",
    width: "60%",
    minWidth: "300px",
    height: "200px",
    margin: "10px 0 0 10px",
    position: "relative",
    float: "left"
    
  }
   

  return (
    <div>
     {/* <Card className="bg-dark text-white" style={{width: "50rem"}}>
      <Card.Img src={bgImage} alt="Card image"/>
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
        <Card.Footer>
          <Footer />
        </Card.Footer>
      </Card.ImgOverlay>
    </Card> */}

<div className="lr" style={divStyle}>
  <p>Skyscrapers sometimes have nicknames like jim or shim.</p>
</div>
     
    </div>
  );
}

export default App;
