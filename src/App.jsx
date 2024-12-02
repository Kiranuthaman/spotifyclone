import './App.css';
import Sidebar from './components/Sidebar';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Middle from './components/Middle';
import Rightside from './components/Rightside';

function App() {
  return (
    <div
      className="w-full bg-black"
      style={{height: '100vh', display: 'flex',flexDirection: 'column', }}>
    
      <Header />

      <div  className="flex flex-grow" style={{display: 'flex',flexDirection: 'row',  overflow: 'hidden',flexGrow: 1,   }}>
      <Sidebar />
      <Middle />
      <Rightside />
      </div>


      <Footer />
    </div>
  );
}

export default App;
