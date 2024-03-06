import ImageSlider from './ImageSlider'
import AutoSlider
 from './AutoSlider';
function App() {
  const slides = [
    'https://images.unsplash.com/photo-1704138162406-bc43d5b9ff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1682687982141-0143020ed57a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1704310546522-59f10c7ec294?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1671658221790-5ef01f87dce3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1663954865860-6fe5859f20e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D',
  ];

  const containerStyle = {
    width:'500px',
    height:'280px',
    margin:'0 auto '
  }
  return (
    <>
    <h1 style={{textAlign:"center"}}>Image slider</h1>
    <div style={containerStyle}>
    <ImageSlider slides = { slides }/>
    <br />
    <br />
    <br />
    <h1 style={{textAlign:"center"}}>auto image slider</h1>
    <AutoSlider slides = { slides }/>
    </div>
    </>
  )
}

export default App
