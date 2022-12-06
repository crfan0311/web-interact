import React from "react";
import Page from "@jumbo/shared/Page";
import ListingDashboard from "../pages/dashboards/listing/ListingDashboard";
import IntranetDashboard from "../pages/dashboards/intranet/IntranetDashboard";

// Interactv1
import SignInPage from "@interact/Pages/SignUpPage/SignInPage";
import SignUpPage2 from "@interact/Pages/SignUpPage/SignUpPage2";
import UserProfile from "app/pages/users/user-profile";
import UserProfilePage from "@interact/Pages/UserProfilePage/UserProfilePage";
import Settings from "@interact/Pages/UserProfilePage/Settings";
import CreateCampaignPage from "@interact/Pages/CreateCampaignPage/CreateCampaignPage";
import CampaignPage from "@interact/Pages/CampaignPage/CampaignPage";
import WhatIsInteractPage from "@interact/Pages/CreateCampaignPage/WhatIsInteractPage";
import CampaignCreationSummaryPage from "@interact/Pages/CreateCampaignPage/CampaignCreationSummaryPage";
import CampaignCreationConfirmationPage from "@interact/Pages/CreateCampaignPage/CampaignCreationConfirmationPage";
import Error404 from "app/pages/extra-pages/Error404";
import CampaignNotFound from "app/pages/extra-pages/campaignNotFound";
import { Navigate } from "react-router-dom";
import Error500 from "app/pages/extra-pages/Error500";
import UserDoesNotExist from "app/pages/extra-pages/UserDoesNotExist";

import AuthGuard from "@jumbo/services/auth/AuthGuard";
import LandingPage from "@interact/Pages/LandingPage/LandingPage";
import FaqPage from '@interact/Pages/FaqPage';
import CampaignCreatorFaqPage from "@interact/Pages/CampaignCreatorFaqPage";
import TermsAndConditionsPage from "@interact/Pages/TermsAndConditionsPage";
import PrivacyPolicyPage from "@interact/Pages/PrivacyPolicyPage";
import ForgotPassword from "@interact/Pages/SignUpPage/ForgotPassword";
import ResetPassword from "@interact/Pages/SignUpPage/ResetPassword";

const interactV1Routes = [
  {
    path: "*",
    element: <Page component ={Error404} layout="vertical-default" />
  },
  {
    path: "/a/invalidcampaign",
    element: <Page component ={CampaignNotFound} layout="vertical-default" />
  },
  {
    path: "/a/404",
    element: <Page component ={Error404} layout="vertical-default" />
  },
  {
    path: "/a/500",
    element: <Page component ={Error500} layout="vertical-default" />
  },
  {
    path: "/a/signin",
    element: <Page component ={SignInPage} layout="vertical-default" />,
  },
  {
    path: "/a/signup",
    element: <Page component ={SignUpPage2} layout="vertical-default" />,
  },
  {
    path: "/a/terms-and-conditions",
    element: <Page component ={TermsAndConditionsPage} layout="vertical-default" />,
  },
  {
    path: "/a/privacy-policy",
    element: <Page component ={PrivacyPolicyPage} layout="vertical-default" />,
  },
  {
    path: "/a/forgotpassword",
    element: <Page component ={ForgotPassword} layout="vertical-default"/>
  },
  {
    path: "/a/resetpassword",
    element: <Page component ={ResetPassword} layout="vertical-default"/>
  },
  {
    path: "/a/faq",
    element: <Page component ={FaqPage} layout="vertical-default" />
  },
  {
    path: "/a/creator-faq",
    element: <Page component ={CampaignCreatorFaqPage} layout="vertical-default" />
  },
  {
    path: "/u/",
    element: (
      <AuthGuard>
        <Page component={UserProfilePage} layout="vertical-default" />
      </AuthGuard>
    ),
  },
  {
    path: "/u/:username",
    element: (
      //<AuthGuard>
        <Page component={UserProfilePage} layout="vertical-default" />
      //</AuthGuard>
    ),
  },
  {
    path: "/u/undefined",
    element: <Page component = {SignInPage} layout="vertical-default"/>,
  },
  {
    path: "/c/:campaignId",
    element:<Page component ={CampaignPage} layout="vertical-default"/>,
  },
  {
    path: "/c/",
    element:<Page component ={CampaignPage} layout="vertical-default"/>,//comment this out when read to go live, this should just be error 404
  },

  {
    path: "/d/:campaignId",
    element: <Page component={CreateCampaignPage} layout="solo-page" />,
  },
  {
    path: "/a/create-campaign",
    element: (
      <Page component={CreateCampaignPage} layout="solo-page" />
    )
  },

  {
    path: "/a/what-is-interact",
    element: <Page component={WhatIsInteractPage} layout="solo-page" />,
  },

  {
    path: "/a/campaign-creation-summary/:campaignId",
    element: (
      <Page component={CampaignCreationSummaryPage} layout="solo-page" />
    ),
  },
  {
    path: "/a/campaign-creation-confirmation/:campaignId",
    element: (
      <Page component={CampaignCreationConfirmationPage} layout="solo-page" />
    ),
  },
  {
    path: "/",
    element: (
        <Page component={LandingPage} layout="vertical-default" />
    ),
  },
];

export default interactV1Routes;
