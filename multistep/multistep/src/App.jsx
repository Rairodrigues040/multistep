// Components
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import UserForm from './components/userForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'

// Hooks
import { useForm } from './hooks/useForm'

import './App.css'

const App = () => {

  const formComponents = [
    <UserForm />,
    <ReviewForm />,
    <Thanks />
  ]
  // currentStep paga o índice
  // currentComponent pega o valor
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents)


  return (
    <div>
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        {/* esse +1 vai para o próximo passo ao clicar no botão */}
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious /> {/* Do próprio components de icons -> seta de voltar*/}
                <span>voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext /> {/* Do próprio components de icons -> seta de avançar*/}
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend /> {/* Do próprio components de icons -> seta de avançar*/}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
