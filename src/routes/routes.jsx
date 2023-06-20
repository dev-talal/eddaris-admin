import Login from "../pages/Auth/Login";
import Categories from "../pages/categories/Categories";
import ClassDetails from "../pages/classes/ClassDetails";
import ClassesList from "../pages/classes/ClassesList";
import Dashboard from "../pages/Dashboard";
import Emails from "../pages/emails/Emails";
import EmailsDetail from "../pages/emails/EmailsDetail";
import Notifications from "../pages/notifications/Notifications";
import NotificationsDetail from "../pages/notifications/NotificationsDetail";
import RatingsList from "../pages/ratings/RatingsList";
import Settings from "../pages/settings/Settings";
import StudentsList from "../pages/students/StudentsList";
import SubAdmins from "../pages/subadmins/SubAdmins";
import TopTutors from "../pages/tutors/TopTutors";
import FeaturedTutors from "../pages/tutors/FeaturedTutors";
import TutorDetail from "../pages/tutors/TutorDetail";
import TutorList from "../pages/tutors/TutorList";
import WorkshopDetail from "../pages/workshops/WorkshopDetail";
import WorkshopsList from "../pages/workshops/WorkshopsList";
import StudentDetail from "../pages/students/StudentDetail";

export const routesConfig = [
  {
    path:"/",
    element: <Dashboard />,
  },
  {
    path:"/Login",
    element: <Login />,
  },
  {
    path:"/tutors",
    element: <TutorList />
  },
  {
    path:"/tutor/:id",
    element: <TutorDetail />,
    exact: true
  },
  {
    path:"/tutors/top-rated",
    element: <TopTutors />,
    exact: true
  },
  {
    path:"/tutors/featured",
    element: <FeaturedTutors />,
    exact: true
  },
  {
    path:"/students",
    element: <StudentsList />,
  },
  {
    path:"/student/:id",
    element: <StudentDetail />,
    exact: true
  },
  {
    path:"/classes",
    element: <ClassesList />,
  },
  {
    path:"/class/:id",
    element: <ClassDetails />,
  },
  {
    path:"/workshops",
    element: <WorkshopsList />,
  },
  {
    path:"/workshop/:id",
    element: <WorkshopDetail />,
  },
  {
    path:"/ratings",
    element: <RatingsList />,
  },
  {
    path:"/notifications",
    element: <Notifications />,
  },
  {
    path:"/emails",
    element: <Emails />,
  },
  {
    path:"/notification/:id",
    element: <NotificationsDetail />,
  },
  {
    path:"/emails/:id",
    element: <EmailsDetail />,
  },
  {
    path:"/sub-admins",
    element: <SubAdmins />,
  },
  {
    path:"/categories",
    element: <Categories />,
  },
  {
    path:"/settings",
    element: <Settings />,
  }
];
