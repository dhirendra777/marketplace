import { Route, Routes } from 'react-router';
import Layout from './component/Layout';
import { GlobalStateProvider } from './context/GlobalState/GlobalStateProvider';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Settings from './pages/Settings';

function App() {
  return (
    <GlobalStateProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </GlobalStateProvider>
  );
}

export default App;
