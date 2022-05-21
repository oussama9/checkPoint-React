import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleForm from "./components/SimpleForm";

function App() {
  return (
    <div style={{
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtMzA5LWFkai0wMS5qcGc.jpg)`
    }}>
      <SimpleForm />
    </div>
  );   
}

export default App;
