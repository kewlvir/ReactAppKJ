webpackJsonp([0],{664:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(7),i=function(e){return e&&e.__esModule?e:{default:e}}(l),c=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.members=["member 1","member 2","member 5"],e}return u(t,e),a(t,[{key:"addMember",value:function(){this.members.push("Member "+Math.random()),this.forceUpdate()}},{key:"render",value:function(){var e=this,t=this.members.map(function(e,t){return i.default.createElement("li",{key:t},e)});return i.default.createElement("div",null,i.default.createElement("h2",null,"About"),i.default.createElement("button",{onClick:function(){return e.addMember()}},"Add"),i.default.createElement("ul",null,t))}}]),t}(l.Component);t.default=c}});
//# sourceMappingURL=0.bundle.b9f382aed79385aac0cf.js.map