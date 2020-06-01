import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LibraryList from './components/container/libraryList';
import BookList from './components/container/bookList';
import SideDrawer from './components/presentational/sideDrawer';

// Adding routing to the application
function App() {
	return (
		<div>
			<BrowserRouter>
			<SideDrawer />
				<Switch>
				    <Route exact path="/" component={LibraryList} />
					<Route exact path="/bookList" component={BookList} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
