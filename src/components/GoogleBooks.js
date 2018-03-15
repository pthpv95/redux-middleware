import React from "react";
import "../components/book.css";
import BookItem from "../components/BookItem";
import withLoader from "../HOC/LoaderHoc";

class GoogleBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = { titleQuery: '', isSearching: false };
    }

    handleSearchChange(title) {
        if (title === '') {
            return;
        }
        this.props.onSearchBookChange(title);
        this.setState({ isSearching: true });
    }

    componentWillMount() {
        console.log(this.props);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <input type="text" placeholder="ENTER TITLE" value={this.state.titleQuery} onChange={e => this.setState({ titleQuery: e.target.value })} />
                <button disabled={this.props.book.isFetching} onClick={e => { this.handleSearchChange(this.state.titleQuery) }}>Search</button>
                <div>
                    {this.state.isSearching && <EnhancedBookListWithLoadIndicator books={this.props.book.data} isFetching={this.props.book.isFetching} /> }
                </div>
            </div>
        )
    }
}

const BookList = (props) => {
    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Image</th>
                    </tr>
                </thead>
                {props.books.items.map((item, i) =>
                    <BookItem book={item} key={i} />
                )}
            </table>
        </div>
    )
}

const EnhancedBookListWithLoadIndicator = withLoader(BookList);

export default GoogleBook;
