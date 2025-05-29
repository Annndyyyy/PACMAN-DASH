import "../../assets/Storagechart.css";

const Storagechart = () => {
  return (
    <div className="main-box-storage">
      <div className="first-box">
        <div className="storage-name">EBS</div>
        <div className="storage-box"></div>
        <div className="storage-small-box"></div>
        <div className="storage-bottom-text">1.25PB</div>
      </div>
      <div className="second-box">
        <div className="storage-name">S3</div>
        <div className="storage-box"></div>
        <div className="storage-small-box"></div>
        <div className="storage-bottom-text">1.5PB</div>
      </div>
      <div className="third-box">
        <div className="storage-name">GLACIER</div>
        <div className="storage-box"></div>
        <div className="storage-small-box"></div>
        <div className="storage-bottom-text">0.75PB</div>
      </div>
      <div className="fourth-box">
        <div className="storage-name">OTHER</div>
        <div className="storage-box"></div>
        <div className="storage-small-box"></div>
        <div className="storage-bottom-text">0.65PB</div>
      </div>
    </div>
  );
};

export default Storagechart;

