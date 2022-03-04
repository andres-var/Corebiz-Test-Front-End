import axios from "axios";

const instanceAxios = axios.create({
	baseURL : "https://corebiz-test.herokuapp.com/api/v1/",
	timeout : 1000,
	headers : {
		"Content-Type" : "application/json",
		"Accept"       : "application/json",
	},
});

const responseSuccessHandler = response =>  response;

const responseErrorHandler = error => {
	if (error.response?.status === 401) {
		return Promise.reject(error);
	}
	return Promise.reject(error);
};

instanceAxios.interceptors.response.use(
	response => responseSuccessHandler(response),
	error => responseErrorHandler(error)
);

instanceAxios.CancelToken = axios.CancelToken;
instanceAxios.isCancel = axios.isCancel;

export default instanceAxios;
