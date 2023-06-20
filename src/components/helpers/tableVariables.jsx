import moment from "moment";
import { NoAvatar, userImage } from "../layouts/AllImages";
import { Ratings, UserAvatar } from "../tables/tablesComponents";
import { SpanStyled } from "../ui/Elements";

// Tutors list start
export const tutorColumns = [
    {
        name:"name",
        label:"Tutor Name",
        render:(text,{user_profile}) => <UserAvatar text={user_profile?.first_name + ' ' + user_profile?.last_name} url={user_profile?.profile_pic || NoAvatar} />
    },
    {
        name:"email",
        label:"Email"
    },
    {
        name:"rating",
        label:"Ratings",
        render:(text) => <Ratings size={24} value={text} text={text} count={5} activeColor="var(--themeColorO)" />
    },
    {
        name: "no_of_review",
        label: "No of reviews"
    },
    {
        name: "id_iqama_verification_approved",
        label: "ID/IQAMA Verification",
        render: (text) => <span className={ text? 'text-theme-primary': 'text-o' }>{text? 'Approved' : 'Rejected'}</span>
    },
    {
        name:"createdAt",
        label:"Created on",
        render:(text) => <span>{moment(text).format('MMM DD, yyyy')}</span>
    },
    {
        name:"status",
        label:"Status",
        render:(text) => <span className={ text? 'text-theme-primary': 'text-o' }>{text? 'Active' : 'unactive'}</span>
    },

];

// Tutot list end

// Student list start

export const studentColumns = [
    {
        name:"name",
        label:"Student Name",
        render:(text, { first_name ,last_name, profile_pic }) =>
        <UserAvatar text={ first_name + ' ' + last_name } url={ profile_pic || NoAvatar } />
    },
    {
        name:"email",
        label:"Email",
    },
    {
        name:"email_verified",
        label:"Email varified",
        render:(text) => <span className={ text? 'text-theme-primary': 'text-o' }>{text? 'Verified' : 'Unverified'}</span>
    },
    {
        name:"createdAt",
        label:"Created on",
        render:(text) => <span>{moment(text).format('MMM DD, yyyy')}</span>
    },
    {
        name:"status",
        label:"Status",
        render:(text) => <span className={ text? 'text-theme-primary': 'text-o' }>{text? 'Active' : 'unactive'}</span>
    },
    
];

// Student list end

// Classes list start

export const classesColumns = [
    {
        name:"name",
        label:"Class Name",
    },
    {
        name:"tutor",
        label:"Tutor",
        render:(text,{ tutor_id }) =>  tutor_id? tutor_id.first_name + ' ' + tutor_id.last_name : '' 
    },
    {
        name:"createdAt",
        label:"Booked",
        render:(text) => <span>{moment(text).format('MMM DD, yyyy')}</span>
    },
    {
        name:"class_date",
        label:"Scheduled on",
        render:(text) => <span>{moment(text).format('MMM DD, yyyy')}</span>
    },
    {
        name:"total_price",
        label:"Total price",
        render:(text) => <span>${ text } </span>
    },
    {
        name:"class_location",
        label:"Location"
    },
    {
        name:"completed",
        label:"Status",
        render:(text) => <span className={`${text?'text-theme-primar':'text-o'}`}>{text?'Completed':'Unattended'}</span>
    },
];

// CLasses list end

// Workshop list start

export const workshopsColumns = [
    {
        name:"title",
        label:"Workshop name",
        render:(text) => <b>{ text }</b>
    },
    {
        name:"organizer_name",
        label:"Organized by",
    },
    {
        name:"date",
        label:"Scheduled on",
        render:(text) => <span>{moment(text).format('MMM DD, yyyy')}</span>
    },
    {
        name:"reserved",
        label:"Reserved seats"
    },
    {
        name:"price_per_seat",
        label:"Charges"
    },
    {
        name:"total_seats_available",
        label:"Total seats"
    },
    {
        name:"location",
        label:"Location"
    },
    {
        name:"status",
        label:"Status"
    },
];

// Workshop list end

// Ratings list start

export const ratingsColumns = [
    {
        name:"review",
        label:"Review",
    },
    {
        name:"rate",
        label:"Rate"
    },
    {
        name:"given_by",
        label:"Given by"
    },
    {
        name:"given_to",
        label:"Given to"
    }
];

export const ratingsRows = [
    {
        review:<b>Lorem ipsum dolor sit</b>,
        rate:"5 star",
        given_by:"John doe",
        given_to:"Olivia Green"
    }
]

// Ratings list end

// Notifications list start

export const notificationsColumns = [
    {
        name:"title",
        label:"Notification",
        render:(text) => <b>{ text }</b>
    },
    {
        name:"status",
        label:"Status",
        render:(text) =><span className={`${ text=='unread'? 'text-o' : 'text-theme-primary' }`}>{text}</span>
    },
    {
        name:"createdAt",
        label:"Date",
        render:(text) => <span>{moment(text).format('MMM DD, yyyy')}</span>
    }
];

export const notificationsRows = [
    {
        notification:<b>Lorem ipsum dolor sit</b>,
        sent_to:"11 people",
        status:<span className='text-theme-primary'>Sending</span>,
        sent_on:"21 Sept, 2022.",
    }
]

// Notifications list end

// Sub admin list start

export const subAdminColumns = [

    {
        name:"sub_admin_name",
        label:"Sub-admin name"
    },
    
    {
        name:"role",
        label:"Role"
    }

];

export const subAdminRows = [

    {
        sub_admin_name:<b>John Doe</b>,
        role:"Finance",
    }

]

// Sub admin list end

// Workshop details reservation list start

export const reservationColumns = [

    {
        name:"booked_by",
        label:"Booked by"
    },
    
    {
        name:"email",
        label:"Email"
    },
    {
        name:"payment_status",
        label:"Payment status"
    },
    {
        name:"booked_on",
        label:"Booked on"
    },

];

export const reservationRows = [

    {
        booked_by:<UserAvatar text='John Doe' url={userImage} />,
        email:"johndoe@ email.com",
        payment_status:"Completed",
        booked_on:"21 Sept, 2022."
    }

]

// WOrkshop details reservation list end

// Tutor Detail payouts list start

export const payoutsColumns = [

    // {
    //     name: 'amount',
    //     label: 'amount'
    // },
    // {
    //     name: 'commission',
    //     label: 'Commission'
    // },
    // {
    //     name: 'earning',
    //     label: 'Earning'
    // },
    {
        name: 'price',
        label: 'Price',
        render:(text) => <span>${text}</span>
    },
    {
        name: 'date',
        label: 'Payment date',
        render:(text) => <span>{moment(text).format('MMM DD, yyyy')}</span>,
    },
    {
        name: 'status',
        label: 'Status',
        render:(text) => <span className='text-theme-primary'>Completed</span>,
    }

]

export const payoutsRows = [

    {
        amount: '$18.50',
        commission: "$8.50",
        earning: "$10.50",
        payment_date: "Sept 18, 2022.",
        status: <SpanStyled size='12px' color='var(--themeColor)'>Completed</SpanStyled>
    }

]

// Tutor Detail payouts list end

// Tutor Detail classes list start

export const tutorClassesColumns = [

    {
        name: 'name',
        label: 'Student',
        render:(text,{user_id}) => user_id?.first_name + ' ' + user_id?.last_name
    },
    {
        name: 'duration',
        label: 'Duration of class'
    },
    {
        name: 'class_location',
        label: 'Class type',
        render:(text) => <SpanStyled color='var( --themeColor)'>{text}</SpanStyled>
    },
    {
        name: 'createdAt',
        label: 'Date',
        render:(text) => <span>{moment(text).format('MMM DD, yyyy')}</span>,
    },

]


export const tutorClassesRows = [

    {
        student: 'John Doe',
        duration: "60 minutes",
        class_type: <SpanStyled color='var( --themeColor)'>Online</SpanStyled>,
        date: "Sept 18, 2022.",
    }

]

// Tutor Detail classes list end

// Top tutors start

export const topTutorColumns = [
    {
        name:"name",
        label:"Tutor Name",
        render:(text,{user_profile}) => <UserAvatar text={user_profile?.first_name + ' ' + user_profile?.last_name} url={user_profile?.profile_pic || NoAvatar} />
    },
    {
        name:"bookings",
        label:"No. of bookings"
    },
    {
        name:"main_field",
        label:"Category",
        render:(text) => text.toString()
    },
    {
        name:"rating",
        label:"Ratings",
        render:(text) => <Ratings size={24} value={text} text={text} count={5} activeColor="var(--themeColorO)" />
    },
    {
        name: "no_of_review",
        label: "No of reviews"
    }
];

// Top tutors end

// Top tutors start

export const featuredTutorColumns = [
    {
        name:"name",
        label:"Tutor Name",
        render:(text,{user_profile}) => <UserAvatar text={user_profile?.first_name + ' ' + user_profile?.last_name} url={user_profile?.profile_pic || NoAvatar} />
    },
    {
        name:"main_field",
        label:"Category featured on",
        render:(text) => text.toString()
    },
    {
        name:"type",
        label:"Type",
        render:(text) => text
    },
    {
        name:"createdAt",
        label:"Featured on",
        render:(text) => <span>{moment(text).format('MMM DD, yyyy')}</span>,
    },
    {
        name:"updatedAt",
        label:"Expiry date",
        render:(text) => <span>{moment(text).format('MMM DD, yyyy')}</span>,
    },
];

// Top tutors end
