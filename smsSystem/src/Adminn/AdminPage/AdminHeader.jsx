import React from 'react';
import logo from '../../assets/logo.jpg';
import bgImage from '../../assets/bg.jpg';

const AdminHeader = () => {
  return (
    <>
      <style>
        {`
          .admin-header {
            position: relative;
            width: 100%;
            overflow: hidden;
            padding-bottom: 6rem;
          }
          .admin-header__bg {
            height: 200px;
            background-size: cover;
            background-position: center;
          }
          .admin-header__logo {
            position: absolute;
            top: 100px;
            left: 5rem;
            height: 180px;
            border-radius: 9999px;
            border: 4px solid white;
            box-shadow: 0 10px 15px rgba(0,0,0,0.2);
            z-index: 20;
          }
          .admin-header__navbar-container {
            position: absolute;
            top: 170px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
          }
          .admin-header__navbar {
            display: flex;
            gap: 3rem;
            align-items: center;
            background: linear-gradient(to bottom, #BFE0F1, white);
            padding: 1rem 3rem;
            border-radius: 40px;
            box-shadow: 0 10px 15px rgba(0,0,0,0.1);
          }
          .admin-header__link {
            font-size: 1rem;
            font-weight: 600;
            color: #333;
            padding: 0.25rem 1rem;
            border-radius: 40px;
            white-space: nowrap;
            transition: all 0.2s ease;
          }
          .admin-header__link:hover {
            background-color: white;
            color: #111;
            font-weight: bold;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          .admin-header__link.special:hover {
            color: red;
          }
        `}
      </style>
      <div className="admin-header">
        <div
          className="admin-header__bg"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        <img src={logo} alt="Logo" className="admin-header__logo" />

        <div className="admin-header__navbar-container">
          <div className="admin-header__navbar">
            {[
              { name: "Dashboard", href: "/admin/dashboard" },
              { name: "Preview Data", href: "/admin/preview-data" },
              { name: "SMS Report", href: "/admin/sms-report" },
              { name: "Manage User", href: "/admin/manage-user" },
              { name: "Log Out", href: "/logout", special: true },
            ].map(({ name, href, special }) => (
              <a
                key={name}
                href={href}
                className={`admin-header__link ${special ? "special" : ""}`}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
