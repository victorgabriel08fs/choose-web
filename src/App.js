import './App.css';

import Routes from './routes';
import { AuthProvider } from './contexts/auth';

function App() {

  return (
    <div className='h-[100vh] bg-white dark:bg-gray-800'>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>

  );
}

export default App;
