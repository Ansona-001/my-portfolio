const Contact = () => {
  const links = [
    {
      n: "LINKEDIN",
      v: "linkedin.com/in/ansonaa",
      href: "https://linkedin.com/in/ansonaa",
      type: "social",
    },
    {
      n: "EMAIL",
      v: "ansonarose@gmail.com",
      href: "mailto:ansonarose@gmail.com",
      type: "mail",
    },
    {
      n: "PHONE",
      v: "+971 50 194 5770",
      href: "tel:+971501945770",
      type: "call",
    },
  ];

  return (
    <div className="space-y-12">
      <div className="max-w-md mx-auto bg-[#ded895] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
        <h3 className="font-pixel text-black text-center mb-8 text-sm tracking-widest">
          GET_IN_TOUCH
        </h3>

        <div className="space-y-2">
          {links.map((l) => (
            <div
              key={l.n}
              className="flex justify-between items-center border-b-4 border-black py-4 group"
            >
              <span className="font-pixel text-[#e86101] text-[10px] drop-shadow-[1px_1px_0px_rgba(255,255,255,0.5)]">
                {l.n}
              </span>

              <a
                href={l.href}
                target={l.type === "social" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="font-pixel text-black text-[10px] hover:text-[#558022] transition-colors cursor-pointer"
              >
                {l.v}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
