/** @jsx React.DOM */

var React = require('react');
var classSet = require('./utils/classSet');
var cloneWithProps = require('./utils/cloneWithProps');
var ValidComponentChildren = require('./utils/ValidComponentChildren');
var createChainedFunction = require('./utils/createChainedFunction');

var ListGroup = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func
  },

  render: function () {
	classObj = {
		'list-group': true
	};
	classObj[this.props.className] = true;
	classes = classSet(classObj);

    return (
      <div className={classes}>
        {ValidComponentChildren.map(this.props.children, this.renderListItem)}
      </div>
    );
  },

  renderListItem: function (child) {
    return cloneWithProps(child, {
      onClick: createChainedFunction(child.props.onClick, this.props.onClick),
      ref: child.props.ref,
      key: child.props.key
    });
  }
});

module.exports = ListGroup;
