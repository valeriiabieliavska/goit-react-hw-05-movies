import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#020202"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#002002"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};
