import React from "react";
import "../components/book.css";
import BookItem from "../components/BookItem";

class GoogleBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = { titleQuery: '' };
    }

    handleSearchChange(title) {
        if (title === '') {
            return;
        }
        this.props.onSearchBookChange(title);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="ENTER TITLE" value={this.state.titleQuery} onChange={e => this.setState({ titleQuery: e.target.value })} />
                <button disabled={this.props.book.isFetching} onClick={e => { this.handleSearchChange(this.state.titleQuery) }}>Search</button>
                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        {this.props.book.data
                            && this.props.book.data.items.map((item, i) =>
                                <BookItem book={item} key={i} />
                            )}
                    </table>

                </div>
            </div>
        )
    }
}

export default GoogleBook;
