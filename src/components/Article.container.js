import { connect } from 'react-redux';

import { toggleArticleSelection } from '../actionCreators.js';
import { Article } from '.';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, { name }) => ({
  handleCheckboxChange: toggleArticleSelection(dispatch)(name),
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);