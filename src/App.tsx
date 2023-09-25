import './App.css'
import { Card } from './components/Card'
import { CardBody } from './components/CardBody'

const img = "";
// const img = "https://damion.club/uploads/posts/2022-01/1643123739_7-damion-club-p-ochen-krasivie-kotiki-7.jpg";
const title = "Card title";
const text = "Some quick example text to build on the card title and make up the bulk of the card's content.";
const btn = "Go somewhere";

function App() {
  return (
    <div className="card">
      <Card img={img}>
        <CardBody title={title} text={text} btn={btn} />
      </Card>
    </div>
  )
}

export default App
