import React from 'react'
import PropTypes from 'prop-types';

class Order extends React.Component {
  render() {
    return (
      <div className="order">
        <ul>
          <li>{this.props.size}</li>
          <li>
            {this.props.scopps.length}
            scoops:
            {this.props.scoops.join(', ')}
          </li>
          <li>
          Ordered by {this.props.orderInfo.customerName}
          at {this.props.orderInfo.orderedAt}
          </li>
        </ul>
      </div>
    )
  }
}

Order.defaultProps = {
  cone: true,
  size: 'regular',
}

Order.propTypes = {
  cone: PropTypes.bool,
  size: PropType.string,
  scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
  orderInfo: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    orderedAt: PropTypes.number.isRequired).isRequired
}
