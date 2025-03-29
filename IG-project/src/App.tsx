import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import MainPage from "./pages/MainPage/MainPage";
import VerbListPage from "./pages/ListOfVerbs/VerbListPage";

const paths = [
  { path: "/", element: <MainPage /> },
  { path: "/list-of-verbs", element: <VerbListPage /> },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {paths.map((item) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              element={<AppLayout>{item.element}</AppLayout>}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
