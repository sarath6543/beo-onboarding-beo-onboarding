import React from 'react';
import { ToastContainer } from 'react-toastify';

const Toast = () => <ToastContainer
                        hideProgressBar={true}
                        autoClose={3000}
                       position="bottom-left"
                    />;

export default Toast;
