const ErrorHandling = ({ error }) => {
  return (
    <div className="errorContainer">
      <h1>Error</h1>
      <p>{error.message}</p>
    </div>
  );
};
export default ErrorHandling;