import { useFormik } from 'formik';
// import { InfoButton } from './Scan-Button.tsx';
import '../app.scss';
import { Link } from 'react-router-dom';
export const InfoForm = () => {
  const formik = useFormik({
    initialValues: {
      ScanTitle: '',
      ScanDescription: '',
      Others: '',
    },
    onSubmit: () => {
      alert('information submitted');
    },
  });
  return (
    <div className="main-container">
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="inputs">
            <div className="title">Scan Form</div>
            <label className="head" htmlFor="ScanTitle">
              Scan Title
            </label>
            <div>
              <input
                id="scanTitle"
                name="ScanTitle"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.ScanTitle}
              />
            </div>
          </div>
          <div>
            <div className="inputs">
              <label className="head" htmlFor="ScanDescription">
                Scan Description
              </label>
              <div>
                <textarea
                  rows="3"
                  cols="30"
                  id="ScanDescription"
                  name="ScanDescription"
                  onChange={formik.handleChange}
                  value={formik.values.ScanDescription}
                />
              </div>
            </div>
            <div className="inputs">
              <label className="head" htmlFor="Others">
                Others
              </label>
              <div>
                <textarea
                  rows="2"
                  cols="30"
                  id="Others"
                  name="Others"
                  onChange={formik.handleChange}
                  value={formik.values.Others}
                />
              </div>
            </div>
            <div className="buttons ">
              <button type="submit" className="submit">
                Submit
              </button>
              <Link to={`/scan`}>
                <button className="cancel">Cancel</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
