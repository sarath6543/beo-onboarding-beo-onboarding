import { BrowserRouter as Router } from "react-router-dom";
// import RouteRenderer from "./routes/RouteRenderer";
import React, { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const RouteRenderer = lazy(() => import("./routes/RouteRenderer"));
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <RouteRenderer />
        </Suspense>
      </Router>

      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  );
};

export default App;
