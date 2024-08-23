import './App.css'

type appType = any | {props : string | any};

//@typescript-eslint/no-unused-vars 
const App: React.FC<appType> = ({props}) => {
  return (
    <>
      <p style={{margin: '0 auto'}}>
        Test
      </p>
    </>
  )
}

export default App
