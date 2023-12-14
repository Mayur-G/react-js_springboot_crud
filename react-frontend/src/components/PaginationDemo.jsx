import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

class PaginationDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [], // Your data array
      pageCount: 0,
      perPage: 10, // Number of items per page
      currentPage: 0,
    };
  }

  componentDidMount() {
    // Fetch or set your data here
    // For the sake of the example, I'm using an array of numbers as dummy data
    const data = Array.from({ length: 100 }).map((_, index) => index + 1);
    this.setState({
      data,
      pageCount: Math.ceil(data.length / this.state.perPage),
    });
  }

  handlePageClick = ({ selected }) => {
    this.setState({ currentPage: selected });
  };

  render() {
    const { data, perPage, currentPage, pageCount } = this.state;

    // Calculate the start and end index for the current page
    const startIndex = currentPage * perPage;
    const endIndex = startIndex + perPage;

    // Slice the data array based on the current page
    const currentData = data.slice(startIndex, endIndex);

    return (
      <div>
        {/* Display your data */}
        <ul>
          {currentData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* Pagination component */}
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  }
}

export default PaginationDemo;
