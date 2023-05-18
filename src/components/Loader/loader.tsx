const Loader = () => {
  return (
    <div className="loading">
      <div className="overlay"></div>
      <div className='row justify-content-center loading-spinner'>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;