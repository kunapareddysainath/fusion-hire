import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Industries } from "./pages/Industries";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfUse } from "./pages/TermsOfUse";
import { DataSecurity } from "./pages/DataSecurity";
import { CookiePolicy } from "./pages/CookiePolicy";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "industries", element: <Industries /> },
        { path: "services", element: <Services /> },
        { path: "contact", element: <Contact /> },
        { path: "privacy-policy", element: <PrivacyPolicy /> },
        { path: "terms-of-use", element: <TermsOfUse /> },
        { path: "data-security", element: <DataSecurity /> },
        { path: "cookie-policy", element: <CookiePolicy /> },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
    },
  }
);