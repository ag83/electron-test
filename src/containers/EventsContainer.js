import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Events from "../components/Events";
import * as actions from "../actions/EventsActions";


function mapStateToProps({events}) {
	return {
		...events
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ ...actions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);