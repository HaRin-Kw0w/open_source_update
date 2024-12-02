import './css/style.css';
import Header from './Header';
import data from './data';

function App() {
  return (
	<div className="wrapper">
		<Header propsValue={data}/>
	</div>
  );
}

export default App;
