import { Route, Routes } from "react-router-dom";
import { AuthLayout, DashboardLayout, LandingPageLayout } from "./layouts";
import {
  BuyAirtime,
  BuyData,
  BVNVerification,
  CableSub,
  ElectricityBill,
  FundWallet,
  Home,
  LandingPage,
  NINVerification,
  NINWithPhone,
  Notifications,
  Settings,
  Transactions,
  UserLogin,
  UserRegister,
} from "./pages";

function App() {
  return (
    <div className="font-rubik text-[16px] leading-relaxed font-thin">
      <Routes>
        {/* Landing Pages */}
        <Route element={<LandingPageLayout />}>
          <Route index element={<LandingPage />} />
        </Route>

        {/* Auth Pages */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
        </Route>

        {/* User Pages */}

        <Route
          path="/dashboard"
          element={
            <DashboardLayout title="Dashboard">
              <Home />
            </DashboardLayout>
          }
        />

        <Route
          path="/buy-data"
          element={
            <DashboardLayout title="Buy Data">
              <BuyData />
            </DashboardLayout>
          }
        />

        <Route
          path="/buy-airtime"
          element={
            <DashboardLayout title="Buy Airtime">
              <BuyAirtime />
            </DashboardLayout>
          }
        />

        <Route
          path="/electricity-bill"
          element={
            <DashboardLayout title="Pay Electricity Bill">
              <ElectricityBill />
            </DashboardLayout>
          }
        />

        <Route
          path="/cable-subscription"
          element={
            <DashboardLayout title="Cable Subscription">
              <CableSub />
            </DashboardLayout>
          }
        />

        <Route
          path="/fund-wallet"
          element={
            <DashboardLayout title="Fund Wallet">
              <FundWallet />
            </DashboardLayout>
          }
        />

        <Route
          path="/verifications/nin"
          element={
            <DashboardLayout title="NIN Verification">
              <NINVerification />
            </DashboardLayout>
          }
        />

        <Route
          path="/verifications/nin-with-phone"
          element={
            <DashboardLayout title="NIN Phone Verification">
              <NINWithPhone />
            </DashboardLayout>
          }
        />

        <Route
          path="/verifications/bvn"
          element={
            <DashboardLayout title="BVN Verification">
              <BVNVerification />
            </DashboardLayout>
          }
        />

        <Route
          path="/transactions-history"
          element={
            <DashboardLayout title="Transactions">
              <Transactions />
            </DashboardLayout>
          }
        />

        <Route
          path="/notifications"
          element={
            <DashboardLayout title="Notifications">
              <Notifications />
            </DashboardLayout>
          }
        />

        <Route
          path="/account-settings"
          element={
            <DashboardLayout title="Account Settings">
              <Settings />
            </DashboardLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
