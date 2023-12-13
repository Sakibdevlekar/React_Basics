// import './App.css'
import Header from './components/hearder'
import Card from './components/card'
import { Footer } from './components/footer'
function App() {
  return (
    < >
<div className='h-full'>
<header>    <Header /></header>
<div className='flex justify-center items-center flex-col'>    
  <div className='mt-5 align-middle'>
    <h1 className='text-3xl bg-green-400 p-5 rounded-xl'>Hello</h1>
    <Card userName="Sakib" post='SDE1 at google'/>
    </div>
    <div className='mt-5'>
    <Card userName="Sakib" post='SDE1 at google'/>
    </div>
    <div className='mt-5'>
    <Card userName="Sakib" post='SDE1 at google'/>
    </div>
    <div className='mt-5'>
    <Card userName="Sakib" post='SDE1 at google'/>
    </div></div>
    <footer className='mt-5'><Footer/></footer>
</div>
    </>
  )
}

export default App
