import React from "react";
import { useId, Component, createContext, useState } from "react";
import CreateOrderForm from "../components/OrderCreateForm";
import { getAllOrder, createOrder } from "../api/OrderService";
import OrderBlog from "../components/OrderBlog";


function CreateOrder() {
  // getAllUsers = () => {
  //   getAllOrder().then((users) => {
  //     console.log(users);
  //     this.setState({ users: users, numberOfUsers: users.length });
  //   });
  // };
  return (
      <div className="bg-amber-400 mb-[155px]">
        <div className="ml-[400px] mt-[100px]">
          <CreateOrderForm></CreateOrderForm>
        </div>
        <div className="flex items-center justify-center">
          <OrderBlog></OrderBlog>
        </div>
      </div>
  );
}

export default CreateOrder;
