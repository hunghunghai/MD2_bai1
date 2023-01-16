import logo from './logo.svg';
import './App.css';
import Control from './components/Control';
import ListStudent from './components/ListStudent';
import Form from './components/Form';

function App() {
  return (
    <div className="row">
      <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">
          {/* START CONTROL */}
          <Control/>
          {/* END CONTROL */}
          {/* START LIST STUDENT */}
          <div className="card-body">
            <h3 className="card-title">Danh sách sinh viên</h3>
            <ListStudent/>
          </div>
          {/* END LIST STUDENT */}
        </div>
      </div>
      {/* START FORM SINH VIEN */}
      <Form/>
      {/* END FORM SINH VIÊN */}
    </div>

  );
}

export default App;
