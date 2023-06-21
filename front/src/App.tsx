import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import CharacterSelector from './components/CharacterSelector';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Home />
        <CharacterSelector />
      </QueryClientProvider>
    </div>
  );
}

export default App;
