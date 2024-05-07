import { useFormik } from 'formik';
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
    <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
      <div className="mb-5">
        <div className="flex justify-center font-normal md:font-bold mt-10">
          Scan Form
        </div>
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-white-900"
        >
          Scan Title
        </label>
        <input
          type="text"
          id="ScanTitle"
          name="ScanTitle"
          onChange={formik.handleChange}
          value={formik.values.ScanTitle}
          className="shadow-sm bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="ScanDescription"
          className="block mb-2 text-sm font-medium text-white-900"
        >
          Scan Description
        </label>
        <textarea
          id="ScanDescription"
          name="ScanDescription"
          onChange={formik.handleChange}
          value={formik.values.ScanDescription}
          rows={3}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="Others"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Others
        </label>
        <textarea
          id="Others"
          name="Others"
          onChange={formik.handleChange}
          value={formik.values.Others}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      <Link to={`/scan`}>
        <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded opacity-50 ml-14">
          Cancel
        </button>
      </Link>
      <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded ml-14">
        Submit
      </button>
    </form>
  );
};
