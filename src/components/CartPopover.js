import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import * as cartActions from "../redux/actions/cartActions";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class CartPopover extends React.Component {
    state = {
      items: []
    }
    componentDidMount() {
      this.props.getItems();
    }
    
    render() {
      return <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={
          <Popover id={`popover-positioned-bottom`}>
            <Popover.Title as="h3">Cart Details</Popover.Title>
            <Popover.Content>
                Total Items:
              <strong>0</strong>
            </Popover.Content>
          </Popover>
        }
      >
      <Button variant="secondary">My Cart</Button>
      </OverlayTrigger>
    }
}

CartPopover.propTypes = {
  getItems: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    items: state.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
      getItems: () => dispatch(cartActions.getCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPopover);