import React from 'react';

import '../styles/Coursesoffered.css'

import HeaderCoursesOffered from "../components/HeaderCoursesOffered";
import CoursesOffered from "../components/CoursesOffered";

const CoursesOfferedPage = () => {

    return (
        <>
    < HeaderCoursesOffered/>
            <CoursesOffered/>
        </>
    );
};

export default CoursesOfferedPage;