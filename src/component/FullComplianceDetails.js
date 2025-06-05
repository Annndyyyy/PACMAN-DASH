import React from "react";
import Compliancechart from "../component/chartdata/Compliancechart";
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';
import CloseIcon from '@mui/icons-material/Close';
import Table, { tableData } from "./Tables/Table";

const FullComplianceDetails = ({ onClose }) => {
  return (
    <div className="inventory-expanded-container cm-l2-expanded-container">
      <div className="inventory-expanded-inner-wrap cm-l2-expanded-inner-wrap">
        <div className="l2-exp-inner-head-con clearfix" style={{ alignItems: 'flex-start' }}>
          <div className="left l2-exp-inner-head-left">
            <div className="large-title-text" style={{ fontWeight: 800, fontSize: '2.3rem', letterSpacing: '-1px' }}>COMPLIANCE</div>
            <div className="small-title-text" style={{ color: '#888', fontWeight: 400, fontSize: '1.1rem', marginTop: 2 }}>All Apps</div>
          </div>
          <div className="right l2-exp-inner-head-right" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div className="head-right-table-con relative" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#ED0295', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer' }}>
                <DownloadIcon style={{ fontSize: 24, color: '#ED0295' }} /> DOWNLOAD
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#ED0295', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer' }}>
                <ShareIcon style={{ fontSize: 24, color: '#ED0295' }} /> SHARE
              </span>
              <span className="cm-l2-close-btn-con absolute" role="button" tabIndex={0} onClick={onClose} style={{ marginLeft: 16, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <CloseIcon style={{ fontSize: 32, color: '#ED0295' }} />
              </span>
            </div>
          </div>
        </div>
        <div className="cm-l2-graph-area-con">
          <div className="cm-l2-graph-area">
            <div className="cost-graph-wrap">
              <div id="complianceChart">
                <Compliancechart />
              </div>
            </div>
          </div>
        </div>
        <hr style={{ border: 'none', borderTop: '2px solid #bbb', margin: '32px 0 24px 0' }} />
        <div className="cm-l2-table-area">
          <Table name="Compliance" tableData={tableData} />
        </div>
      </div>
    </div>
  );
};

export default FullComplianceDetails; 