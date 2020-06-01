import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import {Table, Container} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Pagination from 'react-bootstrap/Pagination';

import {
   FetchLibrary
} from "./../../actions/LibraryAction";

class LibraryList extends Component {

    constructor(props) {
        super(props);
        this.state = {          
          id:0
        };
    }
	componentDidMount() {
		const params = {
			
		  };
		this.props.FetchLibrary(params);
	}
	
	openBookDetailHandler = (id) => {
		console.log("::::  ", id)
		const { history } = this.props;
		history.push({ pathname: '/bookList', state: id });
	  }

	render() {
		return (
			<>
			<Container style={{padding:'20px'}}>
				<Table responsive striped bordered hover size='sm'>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Description</th>
							<th>GroupName</th>
							<th>Ranking</th>
							<th>Address</th>
							<th>Status</th>							
							<th>Actions</th>
						</tr>
					</thead>

					<tbody>
					{this.props.libraries && this.props.libraries.length > 0 ? (
                          this.props.libraries.map((item) => (
									<tr key={item.id}>
										<td>{item.id}</td>
										<td>{item.name}</td>
										<td>{item.desc}</td>
										<td>{item.groupName}</td>
										<td>{item.ranking}</td>
										<td>{item.address}</td>
										<td>{item.status == true ? 'Yes': "No"}</td>																
										<td>
											<DropdownButton
												id='dropdown-basic-button'
												title='Select Action'>
												<Dropdown.Item href='#'  onClick={() => {
														this.openBookDetailHandler(item.id);
														}}>
													Book Details
												</Dropdown.Item>
											</DropdownButton>
										</td>
									</tr>
									))
									) : (
									  <tr>
										<td>There is no library</td>
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
				</Container>
			</>
		);
	}
}


const mapStateToProps = (state) => {
	let {
		LibraryReducer: { pending, error, libraries }
	} = state;
  
	return {
	  pending: pending,
	  error: error,
	  libraries: libraries
	};
  };
  
  LibraryList.propTypes = {
	FetchLibrary: PropTypes.func,
	history: PropTypes.object,
	pending: PropTypes.bool,
	error: PropTypes.object,
  };

export default connect(mapStateToProps, {
	FetchLibrary  
  })(LibraryList);
