import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function StudentProfile() {
  const location = useLocation();

  const isMarksActive = location.pathname.endsWith('/marks');
  const isAttendanceActive = location.pathname.endsWith('/attendance');

  return (
    <div className="student-page">

      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          background: #f8fafc;
        }

        .student-page {
          min-height: 100vh;

          padding: 35px 20px;

          background:
            radial-gradient(
              circle at top left,
              rgba(124,58,237,0.16),
              transparent 32%
            ),

            radial-gradient(
              circle at bottom right,
              rgba(168,85,247,0.13),
              transparent 32%
            ),

            linear-gradient(
              135deg,
              #faf5ff,
              #f8fafc,
              #f5f3ff
            );
        }

        .student-container {
          width: 100%;

          max-width: 950px;

          margin: auto;
        }

        /* =========================
           TOP BAR
        ========================= */

        .topbar {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 20px;

          padding: 14px 18px;

          background:
            rgba(255,255,255,0.90);

          backdrop-filter:
            blur(15px);

          border:
            1px solid #e9d5ff;

          border-radius: 15px;

          box-shadow:
            0 8px 25px
            rgba(88,28,135,0.06);
        }

        .portal-brand {
          display: flex;

          align-items: center;

          gap: 10px;

          color: #581c87;

          font-size: 15px;

          font-weight: 900;
        }

        .brand-icon {
          width: 38px;
          height: 38px;

          display: flex;

          align-items: center;
          justify-content: center;

          color: white;

          background:
            linear-gradient(
              135deg,
              #7c3aed,
              #9333ea
            );

          border-radius: 10px;

          font-size: 18px;

          box-shadow:
            0 7px 15px
            rgba(124,58,237,0.22);
        }

        .portal-status {
          padding: 7px 11px;

          color: #15803d;

          background: #f0fdf4;

          border:
            1px solid #bbf7d0;

          border-radius: 50px;

          font-size: 8px;

          font-weight: 900;
        }

        .status-dot {
          display: inline-block;

          width: 6px;
          height: 6px;

          margin-right: 5px;

          background: #22c55e;

          border-radius: 50%;
        }

        /* =========================
           PROFILE HERO
        ========================= */

        .profile-hero {
          position: relative;

          overflow: hidden;

          padding: 32px;

          color: white;

          background:
            linear-gradient(
              135deg,
              #581c87,
              #7c3aed,
              #9333ea
            );

          border-radius: 22px;

          box-shadow:
            0 25px 50px
            rgba(124,58,237,0.22);
        }

        .profile-hero::before {
          content: "";

          position: absolute;

          width: 240px;
          height: 240px;

          right: -90px;
          top: -110px;

          background:
            rgba(255,255,255,0.10);

          border-radius: 50%;
        }

        .profile-main {
          position: relative;

          z-index: 2;

          display: flex;

          align-items: center;

          gap: 18px;
        }

        .avatar {
          width: 78px;
          height: 78px;

          display: flex;

          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          color: #581c87;

          background: white;

          border:
            4px solid
            rgba(255,255,255,0.25);

          border-radius: 50%;

          font-size: 28px;

          font-weight: 900;

          box-shadow:
            0 10px 25px
            rgba(0,0,0,0.15);
        }

        .profile-badge {
          display: inline-block;

          margin-bottom: 6px;

          padding: 5px 9px;

          color: #ede9fe;

          background:
            rgba(255,255,255,0.11);

          border:
            1px solid
            rgba(255,255,255,0.20);

          border-radius: 50px;

          font-size: 7px;

          font-weight: 900;
        }

        .student-name {
          margin: 0;

          font-size: 28px;

          font-weight: 900;
        }

        .student-course {
          margin: 5px 0 0;

          color: #e9d5ff;

          font-size: 10px;
        }

        /* =========================
           INFO CARDS
        ========================= */

        .info-grid {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 12px;

          margin-top: 18px;
        }

        .info-card {
          padding: 16px;

          background: white;

          border:
            1px solid #e9d5ff;

          border-radius: 14px;

          box-shadow:
            0 7px 20px
            rgba(88,28,135,0.05);

          transition: 0.25s ease;
        }

        .info-card:hover {
          transform:
            translateY(-4px);

          box-shadow:
            0 14px 28px
            rgba(124,58,237,0.10);
        }

        .info-icon {
          margin-bottom: 7px;

          font-size: 19px;
        }

        .info-label {
          color: #94a3b8;

          font-size: 7px;

          font-weight: 800;

          text-transform: uppercase;

          letter-spacing: 0.5px;
        }

        .info-value {
          margin-top: 4px;

          color: #312e81;

          font-size: 14px;

          font-weight: 900;
        }

        /* =========================
           NAVIGATION
        ========================= */

        .navigation-card {
          margin-top: 18px;

          padding: 18px;

          background: white;

          border:
            1px solid #e9d5ff;

          border-radius: 16px;

          box-shadow:
            0 8px 22px
            rgba(88,28,135,0.05);
        }

        .nav-title {
          margin: 0 0 12px;

          color: #334155;

          font-size: 12px;

          font-weight: 900;
        }

        .nav-links {
          display: flex;

          gap: 10px;

          flex-wrap: wrap;
        }

        .nav-link {
          display: flex;

          align-items: center;

          gap: 7px;

          padding: 10px 14px;

          color: #7c3aed;

          background: #faf5ff;

          border:
            1px solid #e9d5ff;

          border-radius: 9px;

          text-decoration: none;

          font-size: 9px;

          font-weight: 900;

          transition: 0.2s ease;
        }

        .nav-link:hover {
          transform:
            translateY(-2px);

          background: #f3e8ff;

          border-color: #c084fc;
        }

        .nav-link.active {
          color: white;

          background:
            linear-gradient(
              135deg,
              #7c3aed,
              #9333ea
            );

          border-color: transparent;

          box-shadow:
            0 7px 15px
            rgba(124,58,237,0.20);
        }

        /* =========================
           CONTENT AREA
        ========================= */

        .content-card {
          margin-top: 18px;

          padding: 22px;

          min-height: 180px;

          background:
            rgba(255,255,255,0.92);

          border:
            1px solid #e9d5ff;

          border-radius: 17px;

          box-shadow:
            0 8px 25px
            rgba(88,28,135,0.05);
        }

        .content-header {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 15px;
        }

        .content-title {
          margin: 0;

          color: #312e81;

          font-size: 18px;

          font-weight: 900;
        }

        .secure-badge {
          padding: 6px 9px;

          color: #166534;

          background: #f0fdf4;

          border:
            1px solid #bbf7d0;

          border-radius: 50px;

          font-size: 7px;

          font-weight: 900;
        }

        /* =========================
           DEFAULT MESSAGE
        ========================= */

        .empty-state {
          padding: 25px;

          text-align: center;

          color: #94a3b8;

          background: #faf5ff;

          border:
            1px dashed #d8b4fe;

          border-radius: 12px;
        }

        .empty-icon {
          margin-bottom: 7px;

          font-size: 27px;
        }

        .empty-title {
          margin: 0;

          color: #581c87;

          font-size: 13px;

          font-weight: 900;
        }

        .empty-text {
          margin: 5px 0 0;

          font-size: 9px;
        }

        /* =========================
           FOOTER
        ========================= */

        .footer {
          padding: 18px;

          color: #94a3b8;

          text-align: center;

          font-size: 8px;
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 850px) {

          .info-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

        }

        @media (max-width: 600px) {

          .student-page {
            padding: 15px 10px;
          }

          .topbar {
            align-items: flex-start;

            flex-direction: column;

            gap: 9px;
          }

          .profile-hero {
            padding: 25px 20px;
          }

          .profile-main {
            align-items: flex-start;
          }

          .avatar {
            width: 60px;
            height: 60px;

            font-size: 22px;
          }

          .student-name {
            font-size: 23px;
          }

          .info-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .content-header {
            align-items: flex-start;

            flex-direction: column;

            gap: 8px;
          }

        }

        @media (max-width: 380px) {

          .info-grid {
            grid-template-columns: 1fr;
          }

          .profile-main {
            flex-direction: column;
          }

        }

      `}</style>


      <div className="student-container">

        {/* TOP BAR */}

        <div className="topbar">

          <div className="portal-brand">

            <div className="brand-icon">
              🎓
            </div>

            Student Portal

          </div>

          <div className="portal-status">
            <span className="status-dot"></span>
            PORTAL ACTIVE
          </div>

        </div>


        {/* PROFILE HERO */}

        <section className="profile-hero">

          <div className="profile-main">

            <div className="avatar">
              RP
            </div>

            <div>

              <div className="profile-badge">
                BCA • STUDENT PROFILE
              </div>

              <h1 className="student-name">
                Rahul Patel
              </h1>

              <p className="student-course">
                Bachelor of Computer Applications
                • Academic Year 2026
              </p>

            </div>

          </div>

        </section>


        {/* STUDENT INFO */}

        <div className="info-grid">

          <div className="info-card">

            <div className="info-icon">
              🪪
            </div>

            <div className="info-label">
              Roll Number
            </div>

            <div className="info-value">
              BCA-2026-45
            </div>

          </div>


          <div className="info-card">

            <div className="info-icon">
              📚
            </div>

            <div className="info-label">
              Semester
            </div>

            <div className="info-value">
              Semester 1
            </div>

          </div>


          <div className="info-card">

            <div className="info-icon">
              🏫
            </div>

            <div className="info-label">
              Department
            </div>

            <div className="info-value">
              Computer Applications
            </div>

          </div>


          <div className="info-card">

            <div className="info-icon">
              🟢
            </div>

            <div className="info-label">
              Status
            </div>

            <div className="info-value">
              Active
            </div>

          </div>

        </div>


        {/* SUB NAVIGATION */}

        <div className="navigation-card">

          <h3 className="nav-title">
            📋 Student Records
          </h3>

          <div className="nav-links">

            <Link
              to="marks"
              className={
                `nav-link ${
                  isMarksActive ? 'active' : ''
                }`
              }
            >
              📊 View Marks
            </Link>


            <Link
              to="attendance"
              className={
                `nav-link ${
                  isAttendanceActive ? 'active' : ''
                }`
              }
            >
              📅 View Attendance
            </Link>

          </div>

        </div>


        {/* DYNAMIC CONTENT */}

        <div className="content-card">

          <div className="content-header">

            <h2 className="content-title">
              Student Details
            </h2>

            <div className="secure-badge">
              🔒 SECURE RECORD
            </div>

          </div>

          <Outlet />

        </div>


        {/* FOOTER */}

        <div className="footer">
          © 2026 Student Portal • Rahul Patel •
          Academic Records
        </div>

      </div>

    </div>
  );
}

export default StudentProfile;