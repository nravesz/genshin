import Home from './components/Home';
import Inventory from './components/inventory/Inventory';
import MenuModal from './components/menuModal/MenuModal';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { Provider } from 'react-redux';
import store from './redux/store';

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Home />
          <MenuModal />
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default App;
