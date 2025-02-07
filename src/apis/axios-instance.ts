import axios, { AxiosInstance, AxiosError } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
  baseURL: import.meta.env.VITE_MOVIE_API_URL,
});

export const axiosDefaultInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

let isRefreshing = false;

axiosDefaultInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosDefaultInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !isRefreshing) {
      isRefreshing = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");

        if (!refreshToken) {
          console.error("❌ No Refresh Token found, redirecting to login.");
          handleLogout();
          return Promise.reject(error);
        }

        const { data } = await axios.post(
          `${import.meta.env.VITE_BASE_API_URL}/auth/refresh`,
          {},
          { headers: { Authorization: `Bearer ${refreshToken}` } }
        );

        localStorage.setItem("accessToken", data.accessToken);
        isRefreshing = false;

        if (originalRequest && originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
          return axiosDefaultInstance(originalRequest);
        }
      } catch (refreshError) {
        console.error("❌ Refresh Token expired, redirecting to login.");
        handleLogout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

function handleLogout() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  window.location.href = "/login";
}
