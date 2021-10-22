import { useState } from "react";
import SearchAppBar from "./SearchAppBar";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { getCountry } from '../actions/countryAction'

function Main(props) {
    const [val, setVal] = useState("");
    const search = () => {
        props.getCountry(val);
    }

    return (
        <SearchAppBar onChange={setVal} val={val} searchFun={search}>

        </SearchAppBar>
    )
}
Main.propTypes = {
    country: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
    country: state.country.countryData
})
export default connect(mapStateToProps, { getCountry })(Main);