import './App.css'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

function App() {
  return (
    <>
      <div className="principal">
        <h1 id='title'>Tela inicial</h1>
      </div>
      <div className="center-subtext">
        <p className='subtext'>Vamos começar?</p>
      </div>
      <div className="box-button-center">
        <Link to='/cadastro'>
          <Button
            color="primary"
            size='lg'
            outline
          >
            Cadastrar-se
          </Button>
        </Link>
      </div>
    </>
  )
}

export default App
