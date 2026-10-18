import React from 'react';

function MarksView() {
  const subjects = [
    {
      id: 1,
      name: 'Web Development in React',
      code: 'BCA-501',
      marks: 92,
      grade: 'A+',
    },
    {
      id: 2,
      name: 'Database Management Systems',
      code: 'BCA-502',
      marks: 86,
      grade: 'A',
    },
    {
      id: 3,
      name: 'Python Data Science',
      code: 'BCA-503',
      marks: 89,
      grade: 'A',
    },
    {
      id: 4,
      name: 'Cloud Computing Fundamentals',
      code: 'BCA-504',
      marks: 85,
      grade: 'A',
    },
  ];

  const totalMarks = subjects.reduce(function (total, subject) {
    return total + subject.marks;
  }, 0);

  const percentage = Math.round(
    totalMarks / subjects.length
  );

  return (
    <div className="marks-page">

      <style>{`
        .marks-page {
          width: 100%;
          font-family: Arial, sans-serif;
        }

        .marks-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .marks-title {
          margin: 0;
          color: #312e81;
          font-size: 22px;
          font-weight: 800;
        }

        .marks-subtitle {
          margin: 5px 0 0;
          color: #64748b;
          font-size: 12px;
        }

        .result-badge {
          padding: 8px 12px;
          background: #dcfce7;
          color: #15803d;
          border: 1px solid #bbf7d0;
          border-radius: 20px;
          font-size: 10px;
          font-weight: bold;
          white-space: nowrap;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 22px;
        }

        .summary-card {
          padding: 18px;
          background: #faf5ff;
          border: 1px solid #e9d5ff;
          border-radius: 14px;
          text-align: center;
        }

        .summary-icon {
          font-size: 24px;
          margin-bottom: 6px;
        }

        .summary-label {
          color: #64748b;
          font-size: 10px;
          font-weight: bold;
        }

        .summary-value {
          margin-top: 5px;
          color: #7c3aed;
          font-size: 22px;
          font-weight: 900;
        }

        .subjects-title {
          margin-bottom: 10px;
          color: #334155;
          font-size: 14px;
          font-weight: 800;
        }

        .subject-card {
          margin-bottom: 10px;
          padding: 15px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
        }

        .subject-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
        }

        .subject-name {
          margin: 0;
          color: #1e293b;
          font-size: 12px;
          font-weight: 800;
        }

        .subject-code {
          margin: 4px 0 0;
          color: #94a3b8;
          font-size: 9px;
        }

        .grade {
          padding: 7px 10px;
          background: #f3e8ff;
          color: #7e22ce;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 900;
        }

        .progress-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 12px;
        }

        .progress-background {
          flex: 1;
          height: 8px;
          background: #e2e8f0;
          border-radius: 20px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(
            90deg,
            #7c3aed,
            #a855f7
          );
          border-radius: 20px;
        }

        .marks {
          width: 45px;
          color: #581c87;
          font-size: 10px;
          font-weight: bold;
          text-align: right;
        }

        .performance-box {
          margin-top: 20px;
          padding: 16px;
          background: linear-gradient(
            135deg,
            #eef2ff,
            #faf5ff
          );
          border: 1px solid #c4b5fd;
          border-radius: 13px;
        }

        .performance-title {
          margin: 0;
          color: #312e81;
          font-size: 13px;
          font-weight: 800;
        }

        .performance-text {
          margin: 6px 0 0;
          color: #64748b;
          font-size: 10px;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .marks-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .summary-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="marks-header">

        <div>
          <h2 className="marks-title">
            📊 Academic Results
          </h2>

          <p className="marks-subtitle">
            Semester 1 • BCA Academic Performance
          </p>
        </div>

        <div className="result-badge">
          ✓ RESULT DECLARED
        </div>

      </div>


      <div className="summary-grid">

        <div className="summary-card">
          <div className="summary-icon">
            🏆
          </div>

          <div className="summary-label">
            Overall Score
          </div>

          <div className="summary-value">
            {percentage}%
          </div>
        </div>


        <div className="summary-card">
          <div className="summary-icon">
            ⭐
          </div>

          <div className="summary-label">
            Overall Grade
          </div>

          <div className="summary-value">
            A
          </div>
        </div>


        <div className="summary-card">
          <div className="summary-icon">
            📚
          </div>

          <div className="summary-label">
            Subjects
          </div>

          <div className="summary-value">
            {subjects.length}
          </div>
        </div>

      </div>


      <div className="subjects-title">
        Subject-wise Performance
      </div>


      {subjects.map(function (subject) {
        return (
          <div
            key={subject.id}
            className="subject-card"
          >

            <div className="subject-top">

              <div>
                <h3 className="subject-name">
                  {subject.name}
                </h3>

                <p className="subject-code">
                  Course Code: {subject.code}
                </p>
              </div>

              <div className="grade">
                {subject.grade}
              </div>

            </div>


            <div className="progress-row">

              <div className="progress-background">

                <div
                  className="progress-fill"
                  style={{
                    width: subject.marks + '%',
                  }}
                />

              </div>

              <div className="marks">
                {subject.marks}/100
              </div>

            </div>

          </div>
        );
      })}


      <div className="performance-box">

        <h3 className="performance-title">
          🚀 Academic Performance
        </h3>

        <p className="performance-text">
          Your overall academic score is {percentage}%.
          Keep maintaining consistent performance
          throughout the semester.
        </p>

      </div>

    </div>
  );
}

export default MarksView;