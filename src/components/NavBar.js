import React from 'react';
import '../styles/navbar.css'; 
import logo from '../assests/Images/Main Page Images/logo.png'
import { TranslateIcon } from "hugeicons-react";
import SearchBar from './SearchBar';


const NavBar=()=>{
    return(
<nav className="navbar">
        <ul>
           
            <img src={logo} style={{ height: '45px' }} alt="Logo"/>
             <li><h1>فيتال كير</h1></li>
            <li>
                <a href="./Accounts/Register/Sign_Form_ar_people.html">تسجيل الدخول</a>
            </li>
            <li><a href="./Index_main ar.html">الرئيسية</a></li>
            <li>
                <a href="#">العيادات الطبية</a>
                <div class="dropdown">
                    <div class="dropdown-section">العيادات</div>
                    <a href="../components/clinics components/Clinic1.js" target="_blank">العيادة 1</a>
                    <a href="../Clinics/Clinic (2)/Index For C2/Index_C2 ar.html">العيادة 2</a>
                    <a href="../Clinics/Clinic (3)/Index For C3/Index_C1 ar.html">العيادة 3</a>
                    <a href="../Clinics/Clinic (4)/Index For C4/Index_C1 ar.html">العيادة 4</a>
                    <a href="../Clinics/Clinic (5)/Index For C5/Index_C1 ar.html">العيادة 5</a>
                    </div>
            </li>
            <li><a href="#">الفريق الطبي</a></li>
            <li className='search'>
            <SearchBar />
            </li>
            <li className="translate"><a href="./Index_main en.html"> <TranslateIcon/></a></li>
        </ul>

    </nav>

    )
}

export default NavBar