'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = _interopDefault(require('styled-components'));
var styledSystem = require('styled-system');

const Box = styled("div")({
  boxSizing: "border-box"
}, styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.position, styledSystem.flexbox), styledSystem.system({
  hide: {
    property: "display",
    transform: n => n ? "none" : "block"
  }
}));

const Flex = styled(Box)({
  display: "flex"
});

const Bloc = styled(Box)(styledSystem.compose(styledSystem.color, styledSystem.background, styledSystem.typography, styledSystem.border, styledSystem.shadow));

exports.Bloc = Bloc;
exports.Box = Box;
exports.Flex = Flex;
