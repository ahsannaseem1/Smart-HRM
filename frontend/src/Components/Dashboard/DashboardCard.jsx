import React from 'react';
function DashboardStat({ label, value }) {
    return (
        <div className="p-4 rounded-md shadow-md" style={{ background: 'linear-gradient(to right, #3f51b5, #87ceeb)' }}>
            <p className="text-lg text-white font-semibold mb-2">{value}</p>
            <p className="text-white">{label}</p>
        </div>
    );
}

export default DashboardStat;
