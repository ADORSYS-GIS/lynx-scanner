import { TextInputComponent } from '@components/inputs/text.tsx';
import { setUrlConfig, useAppDispatch, useAppSelector } from '@store';
import { Form, Formik } from 'formik';
import { useCallback, useId, useRef } from 'react';
import { Settings } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import * as y from 'yup';

const Schema = y.object({
  url: y.string().required(),
});

interface Values {
  url: string;
}

export default function ManualConfig() {
  const ref = useRef<HTMLDialogElement>();
  const id = useId();
  const dispatch = useAppDispatch();
  const configUrl = useAppSelector((state) => state.config.url || '');
  const showModal = useCallback(() => ref.current?.showModal(), [ref]);
  const closeModal = useCallback(() => ref.current?.close(), [ref]);
  const navigate = useNavigate();

  return (
    <>
      <button className='btn btn-soft' onClick={showModal}>
        <span>Manual config</span>
        <Settings />
      </button>

      <dialog ref={ref} id={id} className='modal'>
        <div className='modal-box'>
          <h3 className='app-title'>Hello!</h3>
          <Formik<Values>
            validationSchema={Schema}
            initialValues={{ url: configUrl }}
            onSubmit={(values, { resetForm }) => {
              dispatch(setUrlConfig(values.url));
              resetForm();
              closeModal();
              navigate('/scans');
            }}>
            <Form className='py-4'>
              <TextInputComponent label='Server' name='url' type='url' />

              <div className='modal-action'>
                <button className='btn btn-soft btn-primary' type='submit'>
                  Submit
                </button>

                <button
                  type='button'
                  onClick={closeModal}
                  className='btn btn-soft'>
                  Close
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </dialog>
    </>
  );
}
