"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/no-case";
exports.ids = ["vendor-chunks/no-case"];
exports.modules = {

/***/ "(rsc)/./node_modules/no-case/dist/index.js":
/*!********************************************!*\
  !*** ./node_modules/no-case/dist/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.noCase = void 0;\nvar lower_case_1 = __webpack_require__(/*! lower-case */ \"(rsc)/./node_modules/lower-case/dist/index.js\");\n// Support camel case (\"camelCase\" -> \"camel Case\" and \"CAMELCase\" -> \"CAMEL Case\").\nvar DEFAULT_SPLIT_REGEXP = [\n    /([a-z0-9])([A-Z])/g,\n    /([A-Z])([A-Z][a-z])/g\n];\n// Remove all non-word characters.\nvar DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;\n/**\n * Normalize the string into something other libraries can manipulate easier.\n */ function noCase(input, options) {\n    if (options === void 0) {\n        options = {};\n    }\n    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lower_case_1.lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? \" \" : _d;\n    var result = replace(replace(input, splitRegexp, \"$1\\x00$2\"), stripRegexp, \"\\x00\");\n    var start = 0;\n    var end = result.length;\n    // Trim the delimiter from around the output string.\n    while(result.charAt(start) === \"\\x00\")start++;\n    while(result.charAt(end - 1) === \"\\x00\")end--;\n    // Transform each token independently.\n    return result.slice(start, end).split(\"\\x00\").map(transform).join(delimiter);\n}\nexports.noCase = noCase;\n/**\n * Replace `re` in the input string with the replacement value.\n */ function replace(input, re, value) {\n    if (re instanceof RegExp) return input.replace(re, value);\n    return re.reduce(function(input, re) {\n        return input.replace(re, value);\n    }, input);\n} //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbm8tY2FzZS9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2JBLDhDQUE2QztJQUFFRyxPQUFPO0FBQUssQ0FBQyxFQUFDO0FBQzdERCxjQUFjLEdBQUcsS0FBSztBQUN0QixJQUFJRyxlQUFlQyxtQkFBT0EsQ0FBQyxpRUFBWTtBQUN2QyxvRkFBb0Y7QUFDcEYsSUFBSUMsdUJBQXVCO0lBQUM7SUFBc0I7Q0FBdUI7QUFDekUsa0NBQWtDO0FBQ2xDLElBQUlDLHVCQUF1QjtBQUMzQjs7Q0FFQyxHQUNELFNBQVNKLE9BQU9LLEtBQUssRUFBRUMsT0FBTztJQUMxQixJQUFJQSxZQUFZLEtBQUssR0FBRztRQUFFQSxVQUFVLENBQUM7SUFBRztJQUN4QyxJQUFJQyxLQUFLRCxRQUFRRSxXQUFXLEVBQUVBLGNBQWNELE9BQU8sS0FBSyxJQUFJSix1QkFBdUJJLElBQUlFLEtBQUtILFFBQVFJLFdBQVcsRUFBRUEsY0FBY0QsT0FBTyxLQUFLLElBQUlMLHVCQUF1QkssSUFBSUUsS0FBS0wsUUFBUU0sU0FBUyxFQUFFQSxZQUFZRCxPQUFPLEtBQUssSUFBSVYsYUFBYVksU0FBUyxHQUFHRixJQUFJRyxLQUFLUixRQUFRUyxTQUFTLEVBQUVBLFlBQVlELE9BQU8sS0FBSyxJQUFJLE1BQU1BO0lBQ3JULElBQUlFLFNBQVNDLFFBQVFBLFFBQVFaLE9BQU9HLGFBQWEsYUFBV0UsYUFBYTtJQUN6RSxJQUFJUSxRQUFRO0lBQ1osSUFBSUMsTUFBTUgsT0FBT0ksTUFBTTtJQUN2QixvREFBb0Q7SUFDcEQsTUFBT0osT0FBT0ssTUFBTSxDQUFDSCxXQUFXLE9BQzVCQTtJQUNKLE1BQU9GLE9BQU9LLE1BQU0sQ0FBQ0YsTUFBTSxPQUFPLE9BQzlCQTtJQUNKLHNDQUFzQztJQUN0QyxPQUFPSCxPQUFPTSxLQUFLLENBQUNKLE9BQU9DLEtBQUtJLEtBQUssQ0FBQyxRQUFNQyxHQUFHLENBQUNaLFdBQVdhLElBQUksQ0FBQ1Y7QUFDcEU7QUFDQWpCLGNBQWMsR0FBR0U7QUFDakI7O0NBRUMsR0FDRCxTQUFTaUIsUUFBUVosS0FBSyxFQUFFcUIsRUFBRSxFQUFFM0IsS0FBSztJQUM3QixJQUFJMkIsY0FBY0MsUUFDZCxPQUFPdEIsTUFBTVksT0FBTyxDQUFDUyxJQUFJM0I7SUFDN0IsT0FBTzJCLEdBQUdFLE1BQU0sQ0FBQyxTQUFVdkIsS0FBSyxFQUFFcUIsRUFBRTtRQUFJLE9BQU9yQixNQUFNWSxPQUFPLENBQUNTLElBQUkzQjtJQUFRLEdBQUdNO0FBQ2hGLEVBQ0EsaUNBQWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l4LWNtcy1uZXh0anMtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvbm8tY2FzZS9kaXN0L2luZGV4LmpzPzlkZjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm5vQ2FzZSA9IHZvaWQgMDtcbnZhciBsb3dlcl9jYXNlXzEgPSByZXF1aXJlKFwibG93ZXItY2FzZVwiKTtcbi8vIFN1cHBvcnQgY2FtZWwgY2FzZSAoXCJjYW1lbENhc2VcIiAtPiBcImNhbWVsIENhc2VcIiBhbmQgXCJDQU1FTENhc2VcIiAtPiBcIkNBTUVMIENhc2VcIikuXG52YXIgREVGQVVMVF9TUExJVF9SRUdFWFAgPSBbLyhbYS16MC05XSkoW0EtWl0pL2csIC8oW0EtWl0pKFtBLVpdW2Etel0pL2ddO1xuLy8gUmVtb3ZlIGFsbCBub24td29yZCBjaGFyYWN0ZXJzLlxudmFyIERFRkFVTFRfU1RSSVBfUkVHRVhQID0gL1teQS1aMC05XSsvZ2k7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgc3RyaW5nIGludG8gc29tZXRoaW5nIG90aGVyIGxpYnJhcmllcyBjYW4gbWFuaXB1bGF0ZSBlYXNpZXIuXG4gKi9cbmZ1bmN0aW9uIG5vQ2FzZShpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zcGxpdFJlZ2V4cCwgc3BsaXRSZWdleHAgPSBfYSA9PT0gdm9pZCAwID8gREVGQVVMVF9TUExJVF9SRUdFWFAgOiBfYSwgX2IgPSBvcHRpb25zLnN0cmlwUmVnZXhwLCBzdHJpcFJlZ2V4cCA9IF9iID09PSB2b2lkIDAgPyBERUZBVUxUX1NUUklQX1JFR0VYUCA6IF9iLCBfYyA9IG9wdGlvbnMudHJhbnNmb3JtLCB0cmFuc2Zvcm0gPSBfYyA9PT0gdm9pZCAwID8gbG93ZXJfY2FzZV8xLmxvd2VyQ2FzZSA6IF9jLCBfZCA9IG9wdGlvbnMuZGVsaW1pdGVyLCBkZWxpbWl0ZXIgPSBfZCA9PT0gdm9pZCAwID8gXCIgXCIgOiBfZDtcbiAgICB2YXIgcmVzdWx0ID0gcmVwbGFjZShyZXBsYWNlKGlucHV0LCBzcGxpdFJlZ2V4cCwgXCIkMVxcMCQyXCIpLCBzdHJpcFJlZ2V4cCwgXCJcXDBcIik7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICB2YXIgZW5kID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAvLyBUcmltIHRoZSBkZWxpbWl0ZXIgZnJvbSBhcm91bmQgdGhlIG91dHB1dCBzdHJpbmcuXG4gICAgd2hpbGUgKHJlc3VsdC5jaGFyQXQoc3RhcnQpID09PSBcIlxcMFwiKVxuICAgICAgICBzdGFydCsrO1xuICAgIHdoaWxlIChyZXN1bHQuY2hhckF0KGVuZCAtIDEpID09PSBcIlxcMFwiKVxuICAgICAgICBlbmQtLTtcbiAgICAvLyBUcmFuc2Zvcm0gZWFjaCB0b2tlbiBpbmRlcGVuZGVudGx5LlxuICAgIHJldHVybiByZXN1bHQuc2xpY2Uoc3RhcnQsIGVuZCkuc3BsaXQoXCJcXDBcIikubWFwKHRyYW5zZm9ybSkuam9pbihkZWxpbWl0ZXIpO1xufVxuZXhwb3J0cy5ub0Nhc2UgPSBub0Nhc2U7XG4vKipcbiAqIFJlcGxhY2UgYHJlYCBpbiB0aGUgaW5wdXQgc3RyaW5nIHdpdGggdGhlIHJlcGxhY2VtZW50IHZhbHVlLlxuICovXG5mdW5jdGlvbiByZXBsYWNlKGlucHV0LCByZSwgdmFsdWUpIHtcbiAgICBpZiAocmUgaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKHJlLCB2YWx1ZSk7XG4gICAgcmV0dXJuIHJlLnJlZHVjZShmdW5jdGlvbiAoaW5wdXQsIHJlKSB7IHJldHVybiBpbnB1dC5yZXBsYWNlKHJlLCB2YWx1ZSk7IH0sIGlucHV0KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIm5vQ2FzZSIsImxvd2VyX2Nhc2VfMSIsInJlcXVpcmUiLCJERUZBVUxUX1NQTElUX1JFR0VYUCIsIkRFRkFVTFRfU1RSSVBfUkVHRVhQIiwiaW5wdXQiLCJvcHRpb25zIiwiX2EiLCJzcGxpdFJlZ2V4cCIsIl9iIiwic3RyaXBSZWdleHAiLCJfYyIsInRyYW5zZm9ybSIsImxvd2VyQ2FzZSIsIl9kIiwiZGVsaW1pdGVyIiwicmVzdWx0IiwicmVwbGFjZSIsInN0YXJ0IiwiZW5kIiwibGVuZ3RoIiwiY2hhckF0Iiwic2xpY2UiLCJzcGxpdCIsIm1hcCIsImpvaW4iLCJyZSIsIlJlZ0V4cCIsInJlZHVjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/no-case/dist/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/no-case/dist/index.js":
/*!********************************************!*\
  !*** ./node_modules/no-case/dist/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.noCase = void 0;\nvar lower_case_1 = __webpack_require__(/*! lower-case */ \"(ssr)/./node_modules/lower-case/dist/index.js\");\n// Support camel case (\"camelCase\" -> \"camel Case\" and \"CAMELCase\" -> \"CAMEL Case\").\nvar DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];\n// Remove all non-word characters.\nvar DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;\n/**\n * Normalize the string into something other libraries can manipulate easier.\n */\nfunction noCase(input, options) {\n    if (options === void 0) { options = {}; }\n    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lower_case_1.lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? \" \" : _d;\n    var result = replace(replace(input, splitRegexp, \"$1\\0$2\"), stripRegexp, \"\\0\");\n    var start = 0;\n    var end = result.length;\n    // Trim the delimiter from around the output string.\n    while (result.charAt(start) === \"\\0\")\n        start++;\n    while (result.charAt(end - 1) === \"\\0\")\n        end--;\n    // Transform each token independently.\n    return result.slice(start, end).split(\"\\0\").map(transform).join(delimiter);\n}\nexports.noCase = noCase;\n/**\n * Replace `re` in the input string with the replacement value.\n */\nfunction replace(input, re, value) {\n    if (re instanceof RegExp)\n        return input.replace(re, value);\n    return re.reduce(function (input, re) { return input.replace(re, value); }, input);\n}\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbm8tY2FzZS9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGNBQWM7QUFDZCxtQkFBbUIsbUJBQU8sQ0FBQyxpRUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsa0NBQWtDO0FBQzlFO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXgtY21zLW5leHRqcy10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9uby1jYXNlL2Rpc3QvaW5kZXguanM/NzFhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubm9DYXNlID0gdm9pZCAwO1xudmFyIGxvd2VyX2Nhc2VfMSA9IHJlcXVpcmUoXCJsb3dlci1jYXNlXCIpO1xuLy8gU3VwcG9ydCBjYW1lbCBjYXNlIChcImNhbWVsQ2FzZVwiIC0+IFwiY2FtZWwgQ2FzZVwiIGFuZCBcIkNBTUVMQ2FzZVwiIC0+IFwiQ0FNRUwgQ2FzZVwiKS5cbnZhciBERUZBVUxUX1NQTElUX1JFR0VYUCA9IFsvKFthLXowLTldKShbQS1aXSkvZywgLyhbQS1aXSkoW0EtWl1bYS16XSkvZ107XG4vLyBSZW1vdmUgYWxsIG5vbi13b3JkIGNoYXJhY3RlcnMuXG52YXIgREVGQVVMVF9TVFJJUF9SRUdFWFAgPSAvW15BLVowLTldKy9naTtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBzdHJpbmcgaW50byBzb21ldGhpbmcgb3RoZXIgbGlicmFyaWVzIGNhbiBtYW5pcHVsYXRlIGVhc2llci5cbiAqL1xuZnVuY3Rpb24gbm9DYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnNwbGl0UmVnZXhwLCBzcGxpdFJlZ2V4cCA9IF9hID09PSB2b2lkIDAgPyBERUZBVUxUX1NQTElUX1JFR0VYUCA6IF9hLCBfYiA9IG9wdGlvbnMuc3RyaXBSZWdleHAsIHN0cmlwUmVnZXhwID0gX2IgPT09IHZvaWQgMCA/IERFRkFVTFRfU1RSSVBfUkVHRVhQIDogX2IsIF9jID0gb3B0aW9ucy50cmFuc2Zvcm0sIHRyYW5zZm9ybSA9IF9jID09PSB2b2lkIDAgPyBsb3dlcl9jYXNlXzEubG93ZXJDYXNlIDogX2MsIF9kID0gb3B0aW9ucy5kZWxpbWl0ZXIsIGRlbGltaXRlciA9IF9kID09PSB2b2lkIDAgPyBcIiBcIiA6IF9kO1xuICAgIHZhciByZXN1bHQgPSByZXBsYWNlKHJlcGxhY2UoaW5wdXQsIHNwbGl0UmVnZXhwLCBcIiQxXFwwJDJcIiksIHN0cmlwUmVnZXhwLCBcIlxcMFwiKTtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIHZhciBlbmQgPSByZXN1bHQubGVuZ3RoO1xuICAgIC8vIFRyaW0gdGhlIGRlbGltaXRlciBmcm9tIGFyb3VuZCB0aGUgb3V0cHV0IHN0cmluZy5cbiAgICB3aGlsZSAocmVzdWx0LmNoYXJBdChzdGFydCkgPT09IFwiXFwwXCIpXG4gICAgICAgIHN0YXJ0Kys7XG4gICAgd2hpbGUgKHJlc3VsdC5jaGFyQXQoZW5kIC0gMSkgPT09IFwiXFwwXCIpXG4gICAgICAgIGVuZC0tO1xuICAgIC8vIFRyYW5zZm9ybSBlYWNoIHRva2VuIGluZGVwZW5kZW50bHkuXG4gICAgcmV0dXJuIHJlc3VsdC5zbGljZShzdGFydCwgZW5kKS5zcGxpdChcIlxcMFwiKS5tYXAodHJhbnNmb3JtKS5qb2luKGRlbGltaXRlcik7XG59XG5leHBvcnRzLm5vQ2FzZSA9IG5vQ2FzZTtcbi8qKlxuICogUmVwbGFjZSBgcmVgIGluIHRoZSBpbnB1dCBzdHJpbmcgd2l0aCB0aGUgcmVwbGFjZW1lbnQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2UoaW5wdXQsIHJlLCB2YWx1ZSkge1xuICAgIGlmIChyZSBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UocmUsIHZhbHVlKTtcbiAgICByZXR1cm4gcmUucmVkdWNlKGZ1bmN0aW9uIChpbnB1dCwgcmUpIHsgcmV0dXJuIGlucHV0LnJlcGxhY2UocmUsIHZhbHVlKTsgfSwgaW5wdXQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/no-case/dist/index.js\n");

/***/ })

};
;