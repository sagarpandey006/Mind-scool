import { Link } from 'react-router-dom';

const InteractiveTreeButtons = () => {
  return (
    <div className="tree-buttons-container">
      <button className="tree-button">
        <Link to="/section1">Section 1</Link>
      </button>
      <button className="tree-button">
        <Link to="/section2">Section 2</Link>
      </button>
      <button className="tree-button">
        <Link to="/section3">Section 3</Link>
      </button>
      <button className="tree-button">
        <Link to="/section4">Section 4</Link>
      </button>
      <button className="tree-button">
        <Link to="/section5">Section 5</Link>
      </button>
      <button className="tree-button">
        <Link to="/section6">Section 6</Link>
      </button>
    </div>
  );
};
