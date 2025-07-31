import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
  const e = useRouteError();
 
  return (
    <>
     {e ? <div> {e} </ div> : <h2>there was an error...</h2>}
    </>
   
  );
};
export default SinglePageError;
