import axios from "axios";
import { serverApi } from "../../lib/config";

class OrderService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  // public async getOrders(): Promise<any> {
  //   try {
  //     const url = this.path + "/order";
  //     const result = await axios.get(url);
  //     console.log("getOrders:", result);

  //     return result.data;
  //   } catch (err) {
  //     console.log("Error, getOrders:", err);
  //     throw err;
  //   }
  // }

  // public async createOrder(input: any): Promise<any> {
  //   try {
  //     const url = this.path + "/order";
  //     const result = await axios.post(url, input, { withCredentials: true });
  //     console.log("createOrder:", result);

  //     return result.data;
  //   } catch (err) {
  //     console.log("Error, createOrder:", err);
  //     throw err;
  //   }
  // }

  // public async updateOrder(input: any): Promise<any> {
  //   try {
  //     const url = this.path + "/order";
  //     const result = await axios.put(url, input, { withCredentials: true });
  //     console.log("updateOrder:", result);

  //     return result.data;
  //   } catch (err) {
  //     console.log("Error, updateOrder:", err);
  //     throw err;
  //   }
  // }

  // public async deleteOrder(input: any): Promise<any> {
  //   try {
  //     const url = this.path + "/order";
  //     const result = await axios.delete(url, { data: input });
  //     console.log("deleteOrder:", result);

  //     return result.data;
  //   } catch (err) {
  //     console.log("Error, deleteOrder:", err);
  //     throw err;
  //   }
  // }
}

export default OrderService;