import { InfoForm } from './InfoForm.tsx';

export const InfoButton = () => {
  return (
    <div>
      <button
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        onClick={() => {
          <InfoForm />;
        }}
      >
        +
      </button>
    </div>
  );
};
