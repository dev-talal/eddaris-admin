import Transcations from "../../pages/tutors/components/sub-pages/Transcations";
import { HomeIcon,TutorsIcon,StudenstIcon,ClassesIcon, RatingsIcon, SubadminIcon, CategoriesIcon,WorkshopsIcon, TransactionsIcon, RefundsIcon, TopTutorsIcon, FeaturedIcon } from "../layouts/AllImages";
import Classes from "../../pages/tutors/components/sub-pages/Classes";
import Documents from "../../pages/tutors/components/sub-pages/Documents";
import Actions from "../../pages/tutors/components/sub-pages/Actions";
import BankDetails from "../../pages/tutors/components/sub-pages/BankDetails";
import Gallery from "../../pages/tutors/components/sub-pages/Gallery";
import About from "../../pages/tutors/components/sub-pages/About";
import Reviews from "../../pages/tutors/components/sub-pages/Reviews";
import AccountDetails from "../../pages/students/sub-pages/AccountDetails";

export const sidebar_links = [

    {
        title:"Home",
        url:"/",
        icon:HomeIcon
    },
    {
        title:"Tutors",
        url:"/tutors",
        icon:TutorsIcon
    },
    {
        title:"Students",
        url:"/students",
        icon:StudenstIcon
    },
    {
        title:"Classes",
        url:"/classes",
        icon:ClassesIcon
    },
    {
        title:"Ratings",
        url:"/ratings",
        icon:RatingsIcon
    },
    {
        title:"Sub-admins",
        url:"/sub-admins",
        icon:SubadminIcon
    },
    {
        title:"Categories",
        url:"/categories",
        icon:CategoriesIcon
    },
    {
        title:"Workshops",
        url:"/workshops",
        icon:WorkshopsIcon
    },
    {
        title:"Transactions",
        url:"",
        icon:TransactionsIcon,
        children:[
            {
                title:"Refunds",
                url:"",
                icon:RefundsIcon,
            }
        ]
    },
    {
        title:"Featured",
        url:"/tutors/featured",
        icon:FeaturedIcon
    },
    {
        title:"Top Tutors",
        url:"/tutors/top-rated",
        icon:TopTutorsIcon
    },
]

export const sub_admin_fields = [
    {
        label: 'First name',
        name: 'first_name'
    },
    {
        label: 'Last name',
        name: 'last_name'
    },
    {
        label: 'First name',
        name: 'first_name'
    },
    {
        label: 'Title',
        name: 'title'
    },
    {
        label: 'Document ID',
        name: 'document_id'
    },
    {
        label: 'Iqama',
        name: 'iqama'
    },
    {
        label: 'Address',
        name: 'address'
    },
    {
        label: 'Phone number',
        name: 'phone_number'
    },
    {
        label: 'Sub-admin role',
        name: 'Sub_admin_role'
    },
    {
        label: 'Email address',
        name: 'email'
    },
    {
        label: 'Password',
        name: 'password'
    },
]

export const tutorDetailsTabsList = [ 

    {
        name: 'Transactions',
        component: Transcations
    },

    {
        name: 'Classes',
        component: Classes
    },

    {
        name: 'Documents',
        component: Documents
    },

    {
        name: 'Actions',
        component: Actions
    },

    {
        name: 'About',
        component: About
    },

    {
        name: 'Bank details',
        component: BankDetails
    },

    {
        name: 'Gallery',
        component: Gallery
    },

    {
        name: 'Reviews',
        component: Reviews
    },

    
    {
        name: 'Packages',
        component: Transcations
    },


]

export const StudentTabList = [
    {
        name: 'Account details',
        component: AccountDetails
    },
    {
        name: 'Classes'
    },
    {
        name: 'Payments'
    },
    {
        name: 'Actions'
    }
] 