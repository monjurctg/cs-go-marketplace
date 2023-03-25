import axios from "axios";

let faqService = {};

faqService.getAllFaq = async (data) => {
  const response = await axios
    .post(`/faq/get/all`, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
  return response;
};

// faq category

faqService.getAllFaqCategory = async (data) => {
  const response = await axios
    .post(`/public/faq/category/get/all`, data)
    .then((res) => res)
    .catch((err) => err.response);
  return response;
};

export default faqService;
