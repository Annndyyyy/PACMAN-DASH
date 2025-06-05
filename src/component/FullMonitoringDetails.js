import React from "react";
import { statusGrid } from "../component/chartdata/MonitoringDotMatrix";
import Monitoringchart from "../component/chartdata/Monitoringchart";
import CloseIcon from '@mui/icons-material/Close';
// import Table, { tableData } from "./Tables/Table";

const statusGrid2 = [
  ["green", "red",   "green", "green", "green", "green", "green", "green"],
  ["green", "green", "green", "green", "green", "green", "green", "green"],
  ["green", "green", "green", "green", "green", "green", "green", "green"],
  ["green", "green", "green", "green", "green", "green", "green", "green"],
  ["green", "green", "green", "green", "green", "green", "green", "yellow"],
  ["green", "green", "green", "green", "green", "green", "green", "green"],
];

const panelData = [
  {
    title: "TMNG 1.0",
    subtitle: "All Apps",
    grid: statusGrid,
    metrics: [
      { value: "3.4M", label: "REQUESTS" },
      { value: "3412", label: "# UNIQUE USERS" },
      { value: "12.0K IN / 21.0K OUT", label: "NETWORK BYTES" },
      { value: "53ms", label: "CPU LATENCY" },
    ],
    lastUpdated: "Last Updated 10 minutes ago",
    live: true,
    close: true,
  },
  {
    title: "TMNG 1.1",
    subtitle: "All Apps",
    grid: statusGrid2,
    metrics: [
      { value: "3.4M", label: "REQUESTS" },
      { value: "3412", label: "# UNIQUE USERS" },
      { value: "13.0K IN / 24.0K OUT", label: "NETWORK BYTES" },
      { value: "45ms", label: "CPU LATENCY" },
    ],
    lastUpdated: "Last Updated 10 minutes ago",
    live: false,
    close: true,
  },
];

const FullMonitoringDetails = ({ onClose }) => {
  return (
    <>
      <style>{`
        @media (max-width: 900px) {
          .monitoring-panels-row {
            flex-direction: column !important;
            gap: 32px !important;
            padding: 0 !important;
          }
          .monitoring-panel {
            min-width: 0 !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .dot-matrix-dot {
            width: 16px !important;
            height: 16px !important;
            margin: 3px !important;
          }
        }
      `}</style>
      <div className="inventory-expanded-container cm-l2-expanded-container" style={{ background: "#fff", padding: 0, margin: 0, marginTop: 32 }}>
        <div className="monitoring-panels-row" style={{ display: "flex", gap: 40, justifyContent: "center", alignItems: "flex-start", padding: 0, margin: 0, width: '100%' }}>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', margin: 0 }}>
            <Panel panel={panelData[0]} onClose={onClose} leftRounded={true} />
          </div>
          {/* Transparent gap instead of divider */}
          <div style={{ width: 0, minWidth: 0, height: '100%', background: 'transparent', display: 'flex', alignItems: 'stretch', justifyContent: 'center', margin: 0 }} />
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', margin: 0 }}>
            <Panel panel={panelData[1]} onClose={onClose} rightRounded={true} />
          </div>
        </div>
      </div>
    </>
  );
};

function Panel({ panel, onClose, leftRounded, rightRounded }) {
  let style = {
    minWidth: 0,
    maxWidth: '100%',
    background: '#fff',
    borderRadius: 12,
    boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
    padding: 0,
    margin: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  };
  if (leftRounded) style.borderTopRightRadius = style.borderBottomRightRadius = 40;
  if (rightRounded) style.borderTopLeftRadius = style.borderBottomLeftRadius = 40;
  return (
    <div className="monitoring-panel" style={style}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, padding: '32px 32px 0 32px' }}>
        <div>
          <div style={{ fontWeight: 800, fontSize: '2rem', letterSpacing: '-1px', display: 'flex', gap: 12 }}>
            {panel.title}
            {panel.live && <span style={{ background: '#4CAF50', color: '#fff', fontWeight: 700, fontSize: 14, borderRadius: 4, padding: '2px 8px', marginLeft: 8 }}>LIVE</span>}
          </div>
          <div style={{ color: '#888', fontWeight: 400, fontSize: '1.1rem', marginTop: 2 }}>{panel.subtitle}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
          <div style={{ color: '#888', fontWeight: 400, fontSize: '0.85rem', marginBottom: 2 }}>{panel.lastUpdated}</div>
          <span className="cm-l2-close-btn-con absolute" role="button" tabIndex={0} onClick={onClose} style={{ marginLeft: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', fontSize: 32, color: '#bbb', position: 'static' }}>
            <CloseIcon style={{ fontSize: 32, color: '#bbb' }} />
          </span>
        </div>
      </div>
      {/* Dot Matrix */}
      <div style={{ margin: '24px 0 16px 0', padding: '0 32px' }}>
        <Monitoringchart />
      </div>
      {/* Metrics Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, gap: 8, padding: '0 32px 32px 32px' }}>
        {panel.metrics.map((metric, i) => (
          <div key={i} style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ color: '#ED0295', fontWeight: 700, fontSize: '1.2rem', marginBottom: 2 }}>{metric.value}</div>
            <div style={{ color: '#888', fontWeight: 500, fontSize: '0.95rem', letterSpacing: 0 }}>{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FullMonitoringDetails; 