// import { InfoForm } from './InfoForm.tsx';
import { Link } from 'react-router-dom';

export const InfoButton = () => {
  return (
    <div className="parent-button">
      <Link to={`/scan/scanform`}>
        <button className="btn btn-outline btn-ghost add">+</button>
      </Link>
    </div>
  );
};
