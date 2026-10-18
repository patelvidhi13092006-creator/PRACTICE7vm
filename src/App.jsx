import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentProfile from './pages/StudentProfile';
import MarksView from './pages/MarksView';
import AttendanceView from './pages/AttendanceView';
function App() {
return (
<BrowserRouter>
<div className="bg-gray-100 min-h-screen p-8">
<Routes>
<Route path="/" element={<StudentProfile />}>
<Route path="marks" element={<MarksView />} />
<Route path="attendance" element={<AttendanceView />} />
</Route>
</Routes>
</div>
</BrowserRouter>
);
}
export default App;