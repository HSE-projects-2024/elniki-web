import { Layout } from "./components/Layout.jsx"
import { Routes, Route } from 'react-router-dom'
import { MainPage } from "./pages/MainPage.jsx";
import { OrderPage } from "./pages/OrderPage.jsx";
import { BuyingPage } from "./pages/BuyingPage.jsx";


function App() {
  return <Layout>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/buy' element={<BuyingPage />} />
      </Routes>
    </Layout>
}

export default App;
