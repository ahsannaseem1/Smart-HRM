import React from 'react';
function DashboardStat({ label, value }) {
    return (
        <div className="p-4 rounded-lg shadow-md" style={{ background: '#deebff' }}>
            <p className="text-4xl text-black font-extrabold mb-2">{value}</p>
            <p className="text-black">{label}</p>
        </div>
    );
}

export default DashboardStat;
