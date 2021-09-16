import { connect } from 'react-redux'

import ToastFactory from 'components/gui/Toast'

import {
  removeToast
} from 'actions/toast'

const mapStateToProps = ({ toast }, ownProps) => {
  const {
    toasts
  } = toast

  return {
    toasts
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeToast: (id) => {
      dispatch(removeToast(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToastFactory)
