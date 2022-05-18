import { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Spinner from "./components/spinnrer/Spinner";
import { checkUserSession } from "./store/user/user.action";

// import { GlobalStyle } from "./global.styles";

const Home = lazy(() => import("./routes/home/Home"));
const Authentication = lazy(() =>
  import("./routes/authentication/Authentication")
);
const Navigation = lazy(() => import("./routes/navigation/Navigation"));
const Shop = lazy(() => import("./routes/shop/Shop"));
const Checkout = lazy(() => import("./routes/checkout/Checkout"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
