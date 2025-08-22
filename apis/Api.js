
const BASE_URL = "http://localhost:3000/";
export  const API = {
   signup:BASE_URL+"user/create",
   login:BASE_URL+"user/login",
   response:BASE_URL+"predict/",
   userbehaviour:BASE_URL+"userbehaviour/",
   contact:BASE_URL+"contact/",
   excercise:BASE_URL+"admin/excercise/allexcercise",
   getscore:BASE_URL+"score/check_score/",
   logout:BASE_URL+"user/logout/",
   journal:BASE_URL+"journal/add",
   getjournal:BASE_URL+"journal/find",
   deletejournal:BASE_URL+"journal/remove/",
};