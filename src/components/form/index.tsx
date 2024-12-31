const Form = () => {
  return (
    <form className="grid grid-cols-1 gap-4 items-start mt-24 pb-24">
      <label
        className="max-w-[85px] inline-block text-transparent bg-clip-text bg-gradient-to-r from-light-green to-light-orange"
        htmlFor="name"
      >
        Name *
      </label>
      <input
        className="bg-transparent border-2 border-white rounded-[32px] text-2xl py-5 pl-8 text-white mb-8"
        placeholder="Name"
        type="text"
        id="name"
        name="name"
      />
      <label
        className="max-w-[85px] inline-block text-transparent bg-clip-text bg-gradient-to-r from-light-green to-light-orange"
        htmlFor="email"
      >
        Email *
      </label>
      <input
        className="bg-transparent border-2 border-white rounded-[32px] text-2xl py-5 pl-8 text-white mb-8"
        placeholder="E-mail"
        type="email"
        id="email"
        name="email"
      />
      <label
        className="max-w-[85px] inline-block text-transparent bg-clip-text bg-gradient-to-r from-light-green to-light-orange"
        htmlFor="message"
      >
        Message *
      </label>
      <textarea
        className="bg-transparent border-2 border-white rounded-[32px] text-2xl py-5 pl-8 text-white mb-8"
        placeholder="Message"
        id="message"
        name="message"
      />
      <button
        className="text-white border-2 border-white text-2xl py-5 rounded-[32px] max-w-[265px] transition-colors ease-in-out duration-300 hover:bg-gradient-to-r hover:from-light-green hover:to-light-orange hover:bg-clip-text hover:text-transparent"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
