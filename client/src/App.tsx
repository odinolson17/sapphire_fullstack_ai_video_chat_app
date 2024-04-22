import PageRoutes from './routes/PageRoutes';
import { RecoilRoot } from 'recoil';
import './global.css';

function App() {

  return (
    <RecoilRoot>
      <PageRoutes />
    </RecoilRoot>
  );
}

export default App;
