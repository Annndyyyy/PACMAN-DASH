import React, {useState} from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Table = ({name, tableData}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState(null); // 'number' or 'date'
  const [sortDirection, setSortDirection] = useState('asc');

  const filteredData = tableData.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  let sortedData = [...filteredData];
  if (sortColumn) {
    sortedData.sort((a, b) => {
      let aValue = a[sortColumn];
      let bValue = b[sortColumn];
      if (sortColumn === 'date') {
        aValue = parseDate(aValue);
        bValue = parseDate(bValue);
      }
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const parseDate = (str) => {
    // Format: DD/MM/YY
    const [day, month, year] = str.split('/');
    return new Date(`20${year.length === 2 ? year : year.slice(-2)}`, month - 1, day);
  };

  return (
    <div className="cm-l2-table-con">
      <div className="cm-l2-title-and-filter-section clearfix" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div className="cm-l2-table-title left" style={{ fontWeight: 700, fontSize: '1.15rem', color: '#222' }}>Showing {sortedData.length} Records</div>
        <div className="cm-l2-filter-wrap right" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}>
          <div
            className="cm-l2-filter-icon"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#eee',
              borderRadius: 4,
              width: 44,
              height: 44,
            }}
          >
            <FilterAltIcon style={{ color: '#bbb', fontSize: 24 }} />
          </div>
          <div
            className="cm-l2-filter-text-box"
            style={{
              background: '#fff',
              border: '2px solid #bbb',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              height: 44,
              width: 320,
              padding: 0,
            }}
          >
            <span style={{ marginRight: 8, color: '#bbb', display: 'flex', alignItems: 'center', height: '100%' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              className="table-search-input"
              type="text"
              placeholder="SEARCH"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                fontSize: '1.2rem',
                color: '#bbb',
                width: '100%',
                height: '100%',
                padding: 0,
                margin: 0,
              }}
            />
          </div>
        </div>
      </div>
      <table className="cm-expanded-table">
        <thead>
          <tr className="cm-expanded-head-tr">
            <th className="cm-expanded-th"><div className="th-title inline-block">Label 1</div></th>
            <th className="cm-expanded-th sortable center" onClick={() => handleSort('number')} style={{ cursor: 'pointer', userSelect: 'none' }}>
              <div className="th-title inline-block">Number</div>
              <span style={{ marginLeft: 6, fontWeight: sortColumn === 'number' ? 700 : 400, color: sortColumn === 'number' ? '#ED0295' : '#bbb', fontSize: '1rem', verticalAlign: 'middle' }}>
                {sortColumn === 'number' && sortDirection === 'asc' && '▲'}
                {sortColumn === 'number' && sortDirection === 'desc' && '▼'}
                {sortColumn !== 'number' && <span style={{ color: '#bbb' }}>▲▼</span>}
              </span>
            </th>
            <th className="cm-expanded-th sortable" onClick={() => handleSort('date')} style={{ cursor: 'pointer', userSelect: 'none' }}>
              <div className="th-title inline-block">Date</div>
              <span style={{ marginLeft: 6, fontWeight: sortColumn === 'date' ? 700 : 400, color: sortColumn === 'date' ? '#ED0295' : '#bbb', fontSize: '1rem', verticalAlign: 'middle' }}>
                {sortColumn === 'date' && sortDirection === 'asc' && '▲'}
                {sortColumn === 'date' && sortDirection === 'desc' && '▼'}
                {sortColumn !== 'date' && <span style={{ color: '#bbb' }}>▲▼</span>}
              </span>
            </th>
            <th className="cm-expanded-th"><div className="th-title inline-block">Label 4</div></th>
            <th className="cm-expanded-th"><div className="th-title inline-block">Label 5</div></th>
            <th className="cm-expanded-th"><div className="th-title inline-block">Label 6</div></th>
            <th className="cm-expanded-th"><div className="th-title inline-block">Label 7</div></th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, idx) => (
            <tr className="cm-expanded-tr" key={idx} style={{ background: idx % 2 === 1 ? '#f8f8f8' : '#fff' }}>
              <td className="cm-expanded-each-td"><span className="th-each-cell">{row.label1}</span></td>
              <td className="cm-expanded-each-td center"><span className="th-each-cell">{row.number}</span></td>
              <td className="cm-expanded-each-td"><span className="th-each-cell">{row.date}</span></td>
              <td className="cm-expanded-each-td"><span className="th-each-cell">{row.label4}</span></td>
              <td className="cm-expanded-each-td"><span className="th-each-cell">{row.label5}</span></td>
              <td className="cm-expanded-each-td"><span className="th-each-cell">{row.label6}</span></td>
              <td className="cm-expanded-each-td"><span className="th-each-cell">{row.label7}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table