import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
class CartPopover extends React.Component {
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

export default CartPopover;