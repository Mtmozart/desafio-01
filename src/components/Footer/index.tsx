const Footer = () => {
  return (
    <section className="w-full min-h-[8vh] bg-white flex items-center justify-center p-4">
      <p className="text-gray-700 text-base sm:text-lg"> 
        © {new Date().getFullYear()} Matheus Borges. Todos os direitos reservados.
      </p>
    </section>
  );
}

export default Footer;
