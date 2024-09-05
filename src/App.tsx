import './App.css'
import Dashboard from './components/Dashboard';

type appType = any | 
{
    props : string | any
};

//@typescript-eslint/no-unused-vars 
const App: React.FC<appType> = ({props}) => {
  return (
    <>
      <div style={{margin: '0 auto'}}>
        <Dashboard/>
      </div>
      
    </>
  )
}

export default App
