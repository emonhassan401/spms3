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
exports.id = "pages/api/student";
exports.ids = ["pages/api/student"];
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

/***/ "(api)/./pages/api/student/index.js":
/*!************************************!*\
  !*** ./pages/api/student/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StudentInfo)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { PrismaClient  } = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n// export default withApiAuthRequired(async function SecretRoute(req, res) {\nasync function StudentInfo(req, res) {\n    const { ObeStudent  } = new PrismaClient();\n    if (req.method === \"GET\") {\n        const students = await ObeStudent.findMany({\n            select: {\n                student_id: true,\n                student_name: true,\n                courseID: true,\n                section: true,\n                semester: true,\n                total: true,\n                CO1: true,\n                CO2: true,\n                CO3: true,\n                CO4: true,\n                grade: true,\n                educationYear: true\n            }\n        });\n        res.json({\n            students\n        });\n    }\n    if (req.method === \"POST\") {\n        // console.log(req.body);\n        let bodyValues = req.body;\n        // console.log(bodyValues)\n        const students1 = await ObeStudent.create({\n            data: {\n                student_id: req.body.student_id,\n                educationYear: parseInt(req.body.educationYear),\n                semester: req.body.semester,\n                courseID: req.body.courseID,\n                section: parseInt(req.body.section),\n                grade: req.body.grade,\n                student_name: req.body.student_name.toString(),\n                total: parseInt(req.body.total),\n                CO1: parseInt(req.body.CO1),\n                CO2: parseInt(req.body.CO2),\n                CO3: parseInt(req.body.CO3),\n                CO4: parseInt(req.body.CO4)\n            }\n        });\n        res.json({\n            bodyValues\n        });\n    }\n}\n; // });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3R1ZGVudC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0U7QUFDdEUsTUFBTSxFQUFFRSxhQUFZLEVBQUUsR0FBR0MsbUJBQU9BLENBQUM7QUFDakMsNEVBQTRFO0FBQzdELGVBQWVDLFlBQVlDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ2hELE1BQU0sRUFBRUMsV0FBVSxFQUFFLEdBQUcsSUFBSUw7SUFDM0IsSUFBSUcsSUFBSUcsTUFBTSxLQUFLLE9BQU87UUFDdEIsTUFBTUMsV0FBVyxNQUFNRixXQUFXRyxRQUFRLENBQUM7WUFDdkNDLFFBQVE7Z0JBQ0pDLFlBQVksSUFBSTtnQkFDaEJDLGNBQWMsSUFBSTtnQkFDbEJDLFVBQVUsSUFBSTtnQkFDZEMsU0FBUyxJQUFJO2dCQUNiQyxVQUFVLElBQUk7Z0JBQ2RDLE9BQU8sSUFBSTtnQkFDWEMsS0FBSyxJQUFJO2dCQUNUQyxLQUFLLElBQUk7Z0JBQ1RDLEtBQUssSUFBSTtnQkFDVEMsS0FBSyxJQUFJO2dCQUNUQyxPQUFPLElBQUk7Z0JBQ1hDLGVBQWUsSUFBSTtZQUV2QjtRQUlKO1FBQ0FqQixJQUFJa0IsSUFBSSxDQUFDO1lBQUVmO1FBQVM7SUFDeEIsQ0FBQztJQUNELElBQUlKLElBQUlHLE1BQU0sS0FBSyxRQUFRO1FBQ3ZCLHlCQUF5QjtRQUN6QixJQUFJaUIsYUFBYXBCLElBQUlxQixJQUFJO1FBQ3pCLDBCQUEwQjtRQUUxQixNQUFNakIsWUFBVyxNQUFNRixXQUFXb0IsTUFBTSxDQUFDO1lBQ3JDQyxNQUFNO2dCQUNGaEIsWUFBWVAsSUFBSXFCLElBQUksQ0FBQ2QsVUFBVTtnQkFDL0JXLGVBQWVNLFNBQVN4QixJQUFJcUIsSUFBSSxDQUFDSCxhQUFhO2dCQUM5Q1AsVUFBVVgsSUFBSXFCLElBQUksQ0FBQ1YsUUFBUTtnQkFDM0JGLFVBQVVULElBQUlxQixJQUFJLENBQUNaLFFBQVE7Z0JBQzNCQyxTQUFTYyxTQUFTeEIsSUFBSXFCLElBQUksQ0FBQ1gsT0FBTztnQkFDbENPLE9BQU9qQixJQUFJcUIsSUFBSSxDQUFDSixLQUFLO2dCQUNyQlQsY0FBY1IsSUFBSXFCLElBQUksQ0FBQ2IsWUFBWSxDQUFDaUIsUUFBUTtnQkFDNUNiLE9BQU9ZLFNBQVN4QixJQUFJcUIsSUFBSSxDQUFDVCxLQUFLO2dCQUM5QkMsS0FBS1csU0FBU3hCLElBQUlxQixJQUFJLENBQUNSLEdBQUc7Z0JBQzFCQyxLQUFLVSxTQUFTeEIsSUFBSXFCLElBQUksQ0FBQ1AsR0FBRztnQkFDMUJDLEtBQUtTLFNBQVN4QixJQUFJcUIsSUFBSSxDQUFDTixHQUFHO2dCQUMxQkMsS0FBS1EsU0FBU3hCLElBQUlxQixJQUFJLENBQUNMLEdBQUc7WUFFOUI7UUFDSjtRQUNBZixJQUFJa0IsSUFBSSxDQUFDO1lBQUVDO1FBQVc7SUFDMUIsQ0FBQztBQUNMLENBQUM7RUFDRCxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZGVudC1wZXJmb3JtYW5jZS1tb25pdG9yLTMvLi9wYWdlcy9hcGkvc3R1ZGVudC9pbmRleC5qcz9hOWI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhBcGlBdXRoUmVxdWlyZWQsIGdldFNlc3Npb24gfSBmcm9tIFwiQGF1dGgwL25leHRqcy1hdXRoMFwiO1xyXG5jb25zdCB7IFByaXNtYUNsaWVudCB9ID0gcmVxdWlyZSgnQHByaXNtYS9jbGllbnQnKVxyXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoQXBpQXV0aFJlcXVpcmVkKGFzeW5jIGZ1bmN0aW9uIFNlY3JldFJvdXRlKHJlcSwgcmVzKSB7XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIFN0dWRlbnRJbmZvKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7IE9iZVN0dWRlbnQgfSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgICAgY29uc3Qgc3R1ZGVudHMgPSBhd2FpdCBPYmVTdHVkZW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBzdHVkZW50X2lkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3R1ZGVudF9uYW1lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY291cnNlSUQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2VtZXN0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIENPMTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIENPMjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIENPMzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIENPNDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZWR1Y2F0aW9uWWVhcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vIF9jb3VudDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyB3aGVyZToge1xyXG4gICAgICAgICAgICAvLyAgICAgY291cnNlX2lkOiAxLFxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXMuanNvbih7IHN0dWRlbnRzIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcclxuICAgICAgICBsZXQgYm9keVZhbHVlcyA9IHJlcS5ib2R5XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYm9keVZhbHVlcylcclxuXHJcbiAgICAgICAgY29uc3Qgc3R1ZGVudHMgPSBhd2FpdCBPYmVTdHVkZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHN0dWRlbnRfaWQ6IHJlcS5ib2R5LnN0dWRlbnRfaWQsXHJcbiAgICAgICAgICAgICAgICBlZHVjYXRpb25ZZWFyOiBwYXJzZUludChyZXEuYm9keS5lZHVjYXRpb25ZZWFyKSxcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyOiByZXEuYm9keS5zZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIGNvdXJzZUlEOiByZXEuYm9keS5jb3Vyc2VJRCxcclxuICAgICAgICAgICAgICAgIHNlY3Rpb246IHBhcnNlSW50KHJlcS5ib2R5LnNlY3Rpb24pLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IHJlcS5ib2R5LmdyYWRlLFxyXG4gICAgICAgICAgICAgICAgc3R1ZGVudF9uYW1lOiByZXEuYm9keS5zdHVkZW50X25hbWUudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBwYXJzZUludChyZXEuYm9keS50b3RhbCksXHJcbiAgICAgICAgICAgICAgICBDTzE6IHBhcnNlSW50KHJlcS5ib2R5LkNPMSksXHJcbiAgICAgICAgICAgICAgICBDTzI6IHBhcnNlSW50KHJlcS5ib2R5LkNPMiksXHJcbiAgICAgICAgICAgICAgICBDTzM6IHBhcnNlSW50KHJlcS5ib2R5LkNPMyksXHJcbiAgICAgICAgICAgICAgICBDTzQ6IHBhcnNlSW50KHJlcS5ib2R5LkNPNCksXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXMuanNvbih7IGJvZHlWYWx1ZXMgfSk7XHJcbiAgICB9XHJcbn07XHJcbi8vIH0pOyJdLCJuYW1lcyI6WyJ3aXRoQXBpQXV0aFJlcXVpcmVkIiwiZ2V0U2Vzc2lvbiIsIlByaXNtYUNsaWVudCIsInJlcXVpcmUiLCJTdHVkZW50SW5mbyIsInJlcSIsInJlcyIsIk9iZVN0dWRlbnQiLCJtZXRob2QiLCJzdHVkZW50cyIsImZpbmRNYW55Iiwic2VsZWN0Iiwic3R1ZGVudF9pZCIsInN0dWRlbnRfbmFtZSIsImNvdXJzZUlEIiwic2VjdGlvbiIsInNlbWVzdGVyIiwidG90YWwiLCJDTzEiLCJDTzIiLCJDTzMiLCJDTzQiLCJncmFkZSIsImVkdWNhdGlvblllYXIiLCJqc29uIiwiYm9keVZhbHVlcyIsImJvZHkiLCJjcmVhdGUiLCJkYXRhIiwicGFyc2VJbnQiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/student/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/student/index.js"));
module.exports = __webpack_exports__;

})();