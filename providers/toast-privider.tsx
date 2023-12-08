import React from "react";
import { Toaster } from "react-hot-toast";

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return <Toaster></Toaster>;
};

export default ToastProvider;
