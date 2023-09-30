import { RotatingLines } from 'react-loader-spinner';
import { Loading } from './Loader.styled';

const Loader = () => {
  return (
    <Loading>
      <RotatingLines
        strokeColor="#b5473f90"
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
      />
    </Loading>
  );
};
export default Loader;
