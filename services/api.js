import axios from "axios";

// endpoint
const baseurl = "https://hudaxcode.vercel.app";
const get_ongoing = `{baseurl}/api/v1/animebaru/1`;

// callback
const apiCall = async (endpoint) => {
  try {
    const response = await axios.get(
      "https://hudaxcode.vercel.app/api/v1/animebaru/1"
    );
    return response.data;
  } catch (error) {
    console.log("error: ", error);
    return {};
  }
};

// from home screen
export const animebaru = () => {
  return apiCall(get_ongoing);
};
