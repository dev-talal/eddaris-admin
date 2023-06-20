
export const requestPoints = {

    POST_LOGIN: 'LOGIN_REQUEST',
    GET_AUTH_USER: 'AUTH_REQUEST',
    GET_DASHBOARD_POINT: 'GET_DASHBOARD_DATA',
    GET_ALL_CLASSES_POINT: 'GET_ALL_CLASSES_ENDPOINT',
    GET_CLASS_DETAILS_POINT: 'GET_CLASS_DETAILS_POINT',
    GET_ALL_TUTORS_POINT: 'GET_ALL_TUTORS_ENDPOINT',
    GET_TUTOR_DETAILS_POINT: 'GET_TUTOR_DETAILS_POINT',
    GET_FEATURED_TUTOR_POINT: 'GET_FEATURED_TUTOR_POINT',
    GET_ALL_STUDENTS_POINT: 'GET_ALL_STUDENTS_ENDPOINT',
    GET_STUDENT_DETAILS_POINT: 'GET_STUDENT_DETAILS_ENDPOINT',
    GET_ALL_WORKSHOPS_POINT: 'GET_ALL_WORKSHOPS_ENDPOINT',
    GET_NOTIFICATIONS_POINT: 'GET_ALL_NOTIFICATIONS_ENDPOINT',
    GET_TUTOR_TRANSACTIONS_POINT: 'GET_TUTOR_TRANSACTIONS_ENDPOINT',
    GET_TUTOR_CLASSES_POINT: 'GET_TUTOR_CLASSES_POINT',
    GET_TOP_TUTOR_POINT: 'GET_TOP_TUTOR_POINT',
    DELETE_CLASS_POINT: 'DELETE_CLASS_POINT',
    GET_ALL_CATEGORIES_POINT: 'GET_ALL_CATEGORIES_POINT'
}

// Endpoints

export const endpoints = {

    LOGIN_ENDPOINT: '/auth/admin-login',
    GET_AUTH_ENDPOINT: '/auth/me',
    GET_DASHBOARD_ENDPOINT: '/admin/dashboard',
    GET_ALL_CLASSES_ENDPOINT: '/admin/all-classes',
    GET_ALL_TUTORS_ENDPOINT: '/admin/all-tutors',
    GET_TUTOR_DETAILS_ENDPOINT: '/admin/tutor-details',
    GET_ALL_STUDENTS_ENDPOINT: '/admin/all-students',
    GET_STUDENT_DETAILS_ENDPOINT: '/admin/student-details',
    GET_ALL_WORKSHOPS_ENDPOINT: '/admin/all-workshops',
    GET_ALL_NOTIFICATIONS_ENDPOINT: '/auth/get-user-notifications',
    GET_TUTOR_TRANSACTIONS_ENDPOINT: '/admin/tutor-transactions-details',
    GET_TUTOR_CLASSES_ENDPOINT: '/admin/tutor-classes-details',
    GET_FEATURED_TUTOR_ENDPOINT: '/admin/featured-tutors',
    GET_TOP_TUTOR_ENDPOINT: '/admin/top-rated-tutors',
    GET_CLASS_DETAILS_ENDPOINT: '/admin/class-details',
    DELETE_CLASS_ENDPOINT: '/admin/delete-class',
    GET_ALL_CATEGORIES_ENDPOINT: '/admin/categories'
}
