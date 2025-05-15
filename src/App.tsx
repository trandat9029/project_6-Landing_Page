import './App.css'
import { Layout } from './components/Layout'
import { Brands } from './components/sections/Brands'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'

function App() {

  return (
    <Layout title="EdgeAI">
      <Hero/>
      <Brands/>
      <Services/>
    </Layout>
  )
}

export default App
