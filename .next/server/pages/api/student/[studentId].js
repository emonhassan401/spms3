"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/student/[studentId]";
exports.ids = ["pages/api/student/[studentId]"];
exports.modules = {

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/student/[studentId]/index.js":
/*!************************************************!*\
  !*** ./pages/api/student/[studentId]/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StudentInfo)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { PrismaClient  } = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n// export default withApiAuthRequired(async function SecretRoute(req, res) {\nasync function StudentInfo(req, res) {\n    const { ObeStudent  } = new PrismaClient();\n    if (req.method === \"GET\") {\n        const { query: { studentId  }  } = req;\n        const students = await ObeStudent.findUnique({\n            select: {\n                student_id: true,\n                student_name: true,\n                courseID: true,\n                section: true,\n                semester: true,\n                total: true,\n                CO1: true,\n                CO2: true,\n                CO3: true,\n                CO4: true,\n                grade: true\n            },\n            where: {\n                student_id: studentId.toString()\n            }\n        });\n        res.json({\n            students\n        });\n    }\n}\n; // });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3R1ZGVudC9bc3R1ZGVudElkXS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0U7QUFDdEUsTUFBTSxFQUFFRSxhQUFZLEVBQUUsR0FBR0MsbUJBQU9BLENBQUM7QUFDakMsNEVBQTRFO0FBQzdELGVBQWVDLFlBQVlDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ2hELE1BQU0sRUFBRUMsV0FBVSxFQUFFLEdBQUcsSUFBSUw7SUFDM0IsSUFBSUcsSUFBSUcsTUFBTSxLQUFLLE9BQU87UUFDdEIsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFVBQVMsRUFBRSxHQUFFLEdBQUdMO1FBRWpDLE1BQU1NLFdBQVcsTUFBTUosV0FBV0ssVUFBVSxDQUFDO1lBQ3pDQyxRQUFRO2dCQUNKQyxZQUFZLElBQUk7Z0JBQ2hCQyxjQUFjLElBQUk7Z0JBQ2xCQyxVQUFVLElBQUk7Z0JBQ2RDLFNBQVMsSUFBSTtnQkFDYkMsVUFBVSxJQUFJO2dCQUNkQyxPQUFPLElBQUk7Z0JBQ1hDLEtBQUssSUFBSTtnQkFDVEMsS0FBSyxJQUFJO2dCQUNUQyxLQUFLLElBQUk7Z0JBQ1RDLEtBQUssSUFBSTtnQkFDVEMsT0FBTyxJQUFJO1lBQ2Y7WUFDQUMsT0FBTztnQkFDSFgsWUFBWUosVUFBVWdCLFFBQVE7WUFDbEM7UUFDSjtRQUNBcEIsSUFBSXFCLElBQUksQ0FBQztZQUFFaEI7UUFBUztJQUN4QixDQUFDO0FBRUwsQ0FBQztFQUNELE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVkZW50LXBlcmZvcm1hbmNlLW1vbml0b3ItMy8uL3BhZ2VzL2FwaS9zdHVkZW50L1tzdHVkZW50SWRdL2luZGV4LmpzP2FlZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aEFwaUF1dGhSZXF1aXJlZCwgZ2V0U2Vzc2lvbiB9IGZyb20gXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCI7XHJcbmNvbnN0IHsgUHJpc21hQ2xpZW50IH0gPSByZXF1aXJlKCdAcHJpc21hL2NsaWVudCcpXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhBcGlBdXRoUmVxdWlyZWQoYXN5bmMgZnVuY3Rpb24gU2VjcmV0Um91dGUocmVxLCByZXMpIHtcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gU3R1ZGVudEluZm8ocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgT2JlU3R1ZGVudCB9ID0gbmV3IFByaXNtYUNsaWVudCgpXHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICBjb25zdCB7IHF1ZXJ5OiB7IHN0dWRlbnRJZCB9IH0gPSByZXFcclxuXHJcbiAgICAgICAgY29uc3Qgc3R1ZGVudHMgPSBhd2FpdCBPYmVTdHVkZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgICAgIHN0dWRlbnRfaWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzdHVkZW50X25hbWU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VJRDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNlY3Rpb246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzZW1lc3RlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgQ08xOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgQ08yOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgQ08zOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgQ080OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICBzdHVkZW50X2lkOiBzdHVkZW50SWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmVzLmpzb24oeyBzdHVkZW50cyB9KTtcclxuICAgIH1cclxuXHJcbn07XHJcbi8vIH0pOyJdLCJuYW1lcyI6WyJ3aXRoQXBpQXV0aFJlcXVpcmVkIiwiZ2V0U2Vzc2lvbiIsIlByaXNtYUNsaWVudCIsInJlcXVpcmUiLCJTdHVkZW50SW5mbyIsInJlcSIsInJlcyIsIk9iZVN0dWRlbnQiLCJtZXRob2QiLCJxdWVyeSIsInN0dWRlbnRJZCIsInN0dWRlbnRzIiwiZmluZFVuaXF1ZSIsInNlbGVjdCIsInN0dWRlbnRfaWQiLCJzdHVkZW50X25hbWUiLCJjb3Vyc2VJRCIsInNlY3Rpb24iLCJzZW1lc3RlciIsInRvdGFsIiwiQ08xIiwiQ08yIiwiQ08zIiwiQ080IiwiZ3JhZGUiLCJ3aGVyZSIsInRvU3RyaW5nIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/student/[studentId]/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/student/[studentId]/index.js"));
module.exports = __webpack_exports__;

})();