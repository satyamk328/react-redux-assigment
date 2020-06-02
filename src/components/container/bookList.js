import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Table, Container } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Pagination from 'react-bootstrap/Pagination';

import {
	FetchBook
} from "./../../actions/BookAction";

class BookList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: 0
		};
	}
	componentWillMount() {
		const { history, location } = this.props;
		console.log(":::  ::: ", location.state)
		const params = {
			id: location.state
		};
		this.props.FetchBook(params);
	}

	goBack = () => {
		window.history.back();
	}



	render() {
		console.log("::::::::::::::::::", this.props.books);
		return (
			<>
				<Container style={{ padding: '20px' }}>
					<Table responsive striped bordered hover size='sm'>
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Description</th>
								<th>AuthorName</th>
								<th>Price</th>
								<th>Status</th>
							</tr>
						</thead>

						<tbody>
							{this.props.books && this.props.books.length > 0 ? (
								this.props.books.map((item) => (
									<tr key={item.id}>
										<td>{item.id}</td>
										<td>{item.name}</td>
										<td>{item.desc}</td>
										<td>{item.authorName}</td>
										<td>{item.price}</td>
										<td>{item.status == true ? 'Yes' : "No"}</td>

									</tr>
								))
							) : (
									<tr>
										<td>There is no books</td>
									</tr>
								)}
						</tbody>
					</Table>

					<Pagination size='sm' style={{ paddingLeft: '20%' }}>
						<Pagination.First />
						<Pagination.Prev />
						<Pagination.Item>{1}</Pagination.Item>
						<Pagination.Ellipsis />

						<Pagination.Item>{10}</Pagination.Item>
						<Pagination.Item>{11}</Pagination.Item>
						<Pagination.Item active>{12}</Pagination.Item>
						<Pagination.Item>{13}</Pagination.Item>
						<Pagination.Item disabled>{14}</Pagination.Item>

						<Pagination.Ellipsis />
						<Pagination.Item>{20}</Pagination.Item>
						<Pagination.Next />
						<Pagination.Last />
					</Pagination>

					<button onClick={() => {
						this.goBack();
					}}>Go Back</button>

				</Container>
			</>
		);
	}
}


const mapStateToProps = (state) => {
	let {
		BookReducer: { pending, error, books }
	} = state;

	return {
		pending: pending,
		error: error,
		books: books
	};
};

BookList.propTypes = {
	FetchBook: PropTypes.func,
	history: PropTypes.object,
	pending: PropTypes.bool,
	error: PropTypes.object,
};

export default connect(mapStateToProps, {
	FetchBook
})(BookList);
