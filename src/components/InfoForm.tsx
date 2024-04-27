import { useFormik } from 'formik';
// import { InfoButton } from './scaninfo.tsx';

export const InfoForm = () => {
  const formik = useFormik({
    initialValues: {
      Name: '',
      password: '',
    },

    onSubmit: () => {
      alert('information submitted');
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="text">Scan Name</label>
        <input
          id="text"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.Name}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>

        <input
          id="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

// };

// export default function InfoForm() {
//   // alert('Please');
//   return (
//     <>
//       <p>button clicked</p>
//     </>
//   );
// }
