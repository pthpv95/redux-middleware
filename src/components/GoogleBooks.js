import React from "react";
import "../components/book.css";
import BookItem from "../components/BookItem";
import withLoader from "../HOC/LoaderHoc";
import H3 from "../components/common/H3";
import Input from "../components/common/Input";
import ButtonDefault from "../components/common/ButtonDefault";

class GoogleBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isSearching: false, searchText: '' };
    }

    handleSearchChange() {
        this.props.onSearchBookChange(this.getInputValue());
        this.setState({ isSearching: true });
    }

    getInputValue = () => {
        return this.state.searchText;
    }

    render() {
        return (
            <form>
                <div>
                    <H3>Looking for books:</H3>
                    <Input type="text" value={this.state.searchText} onChange={e => this.setState({ searchText: e.target.value })} placeholder="ENTER BOOK TITLE" />
                    <ButtonDefault type="submit" disabled={this.props.book.isFetching} onClick={e => { this.handleSearchChange() }}> Search</ButtonDefault>
                    <div>
                        {this.state.isSearching && <EnhancedBookListWithLoadIndicator books={this.props.book.data} isFetching={this.props.book.isFetching} />}
                    </div>
                </div>
            </form >
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
