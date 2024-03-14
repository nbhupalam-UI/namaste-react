const Contact = () => {
    return (
      <div>
        <h1 className="font-bold text-3xl p-4 pl-0 m-4 ml-0">Contact Us Page</h1>
        <form>
          <input
            type="text"
            className=" border border-black p-2 m-2 ml-0 rounded"
            placeholder="Name"
          />
          <input
            type="text"
            className=" border border-black p-2 m-2 rounded"
            placeholder="Message"
          />
          <button className=" border border-black p-2 m-2 bg-gray-100 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    );
  };
  export default Contact;