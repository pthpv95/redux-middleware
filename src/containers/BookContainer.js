import actions from "../actions/index";
import GoogleBook from "../components/GoogleBooks";
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => ({
    onSearchBookChange: title => dispatch(actions.searchGoogleBook(title))
})

const BookContainer = connect(mapStateToProps, mapDispatchToProps)(GoogleBook);
export default BookContainer;
