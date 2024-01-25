import React from 'react';
function DashboardStat({ label, value }) {
    return (
        <div className="p-4 rounded-lg shadow-md" style={{ background: '#D4473E' }}>
            <p className="text-3xl text-white font-extrabold mb-2">{value}</p>
            <p className="text-white">{label}</p>
        </div>
    );
}

export default DashboardStat;
