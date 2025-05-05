import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import PrivacyPolicy from "./pages/Privacypolicy";
import CoursesDetail from "./pages/CoursesDetail";
import ContactPage from "./pages/ContactPage";
import AboutUs from "./pages/AboutUs";
import Feature from "./pages/Feature";
import MarketDetails from "./pages/MarketDetails";
import TechnologyDetail from "./pages/TechnologyDetail";
import WealthDetails from "./pages/WealthDetails";
import EventsDetails from "./pages/EventsDetails";
import CryptoDetails from "./pages/CryptoDetails";
import CustomerSupport from "./pages/CustomerSupport";
import Review from "./pages/Review";
import News from "./components/News";
import TermsService from "./pages/TermsService";
import UsePolicy from "./pages/UsePolicy";
import LegalDisclaimer from "./pages/LegalDisclaimer";
// import OurAnalyst from "./pages/OurAnalyst";
import Products from "./pages/Products";
import RequestDemo from "./pages/RequestDemo";
import CourseDetails from "./pages/CourseDetails";
import PlatinumDashboard from "./pages/PlatinumDashboard";
import ViewChallenge from "./components/DashboardPlatinum/ViewChallenge";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/features"
          element={
            <Layout>
              {" "}
              <Feature />{" "}
            </Layout>
          }
        />
        <Route
          path="/market-details"
          element={
            <Layout>
              {" "}
              <MarketDetails />{" "}
            </Layout>
          }
        />
        <Route
          path="/technology-details"
          element={
            <Layout>
              {" "}
              <TechnologyDetail />{" "}
            </Layout>
          }
        />
        <Route
          path="/wealth-details"
          element={
            <Layout>
              {" "}
              <WealthDetails />{" "}
            </Layout>
          }
        />
        <Route
          path="/events-details"
          element={
            <Layout>
              {" "}
              <EventsDetails />{" "}
            </Layout>
          }
        />
        <Route
          path="/crypto-details"
          element={
            <Layout>
              {" "}
              <CryptoDetails />{" "}
            </Layout>
          }
        />
        <Route
          path="/customer-support"
          element={
            <Layout>
              {" "}
              <CustomerSupport />{" "}
            </Layout>
          }
        />
        <Route
          path="/leave-a-review"
          element={
            <Layout>
              {" "}
              <Review />{" "}
            </Layout>
          }
        />
        <Route
          path="/latest-news"
          element={
            <Layout>
              {" "}
              <News />{" "}
            </Layout>
          }
        />
        <Route
          path="/terms-of-service"
          element={
            <Layout>
              {" "}
              <TermsService />{" "}
            </Layout>
          }
        />
        <Route
          path="/acceptable-use-policy"
          element={
            <Layout>
              {" "}
              <UsePolicy />{" "}
            </Layout>
          }
        />
        <Route
          path="/legal-disclaimer"
          element={
            <Layout>
              {" "}
              <LegalDisclaimer />{" "}
            </Layout>
          }
        />
        {/* <Route path="/our-analyst" element={<Layout> <OurAnalyst/> </Layout>} /> */}
        <Route
          path="/our-products"
          element={
            <Layout>
              {" "}
              <Products />{" "}
            </Layout>
          }
        />

        {/* <Route path="/academy/:courseId" element={<ValourAcademy />} /> */}

        <Route path="/academy/:courseId" element={<CourseDetails />} />
        <Route
          path="/request-a-demo"
          element={
            <Layout>
              {" "}
              <RequestDemo />{" "}
            </Layout>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactPage />}></Route>
        {/* =========Platinum Dashboard======= */}
        <Route
          path="/platinum-dashboard"
          element={<PlatinumDashboard />}
        ></Route>
        {/* <Route path="/view-challenges" element={<ViewChallenge />}></Route> */}
        <Route path="/challenges/:id" element={<ViewChallenge />} />
      </Routes>
    </Router>
  );
}

export default App;
