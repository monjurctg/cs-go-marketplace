import axios from "axios";

let blogServices = {};

blogServices.allBlog = async (data) => {
  return await axios.post("/blog/get/all", data);
};

blogServices.singleBlog = async (slug) => {
  return await axios.get(`/public/blog/get/slug/${slug}`);
};

blogServices.notifcations = () => {
  return axios.get("/notifications");
};
blogServices.getAllNotifactions = (data) => {
  return axios.get(
    `/notifications/see/all?per_page=${data.per_page}&page=${data.page}`
  );
};
blogServices.markAsRead = (id) => {
  return axios.get(`/notifications/mark/as/read/${id}`);
};

export default blogServices;
