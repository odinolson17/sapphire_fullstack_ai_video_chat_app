import PageRoutes from './routes/PageRoutes';
import { RecoilRoot } from 'recoil';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <PageRoutes />
    </RecoilRoot>
  );
}

export default App;
