import axiosInstance from "./axios"

export const fetchProducts = async () => {
    const res = await axiosInstance.get("/api/products");
    return res.data
}