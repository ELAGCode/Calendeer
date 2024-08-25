import './App.css'
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';

type appType = any | 
{
    props : string | any
};

//@typescript-eslint/no-unused-vars 
const App: React.FC<appType> = ({props}) => {
  return (
    <>
      <div style={{margin: '0 auto'}}>
        <Navigation/>
        <Dashboard/>
      </div>
      
    </>
  )
}

export default App
