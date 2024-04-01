import { useState, useEffect, useRef } from 'react';

export default function OptionsNavSup() {
  const [section, setSection] = useState(null);
  const previousSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; //+200 Para que tome el estilo de la seccion Contacto y no se quede en Timeline
      // Obtengo las posiciones correctas para cada sección
      const sectionsData = [
        { id: 'Inicio', offset: document.getElementById('Inicio').offsetTop },
        { id: 'AboutMe', offset: document.getElementById('AboutMe').offsetTop },
        { id: 'Skills', offset: document.getElementById('Skills').offsetTop },
        { id: 'Proyectos', offset: document.getElementById('Proyectos').offsetTop },
        { id: 'Timeline', offset: document.getElementById('Timeline').offsetTop },
        { id: 'Contacto', offset: document.getElementById('Contacto').offsetTop },
      ];

      const activeSection = sectionsData.find((section) =>
        scrollPosition >= section.offset &&
        scrollPosition < (sectionsData[sectionsData.indexOf(section) + 1] || { offset: Infinity }).offset
      );

      if (activeSection && activeSection.id !== previousSectionRef.current) {
        previousSectionRef.current = activeSection.id;
        setSection(activeSection.id);
      }
    };

    // Agrego el detector de eventos de desplazamiento y lo limpio al desmontar el componente
    window.addEventListener('scroll', handleScroll);
    // Calculo la sección activa al cargar la página
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden md:flex md:flex-row md:w-full md:py-0  md:items-center">
      <ul className="flex md:flex-row md:justify-evenly w-full md:text-base lg:text-lg">
        {['Inicio', 'AboutMe', 'Skills', 'Proyectos', 'Timeline', 'Contacto'].map((sectionName) => (
          <li
            key={sectionName}
            className={`${
              section === sectionName ?
                'border-t border-b border-primaryColor text-white md:px-5' :
                'text-white md:px-5'
            } cursor-pointer transform transition-transform duration-500 hover:scale-110 relative overflow-hidden group`}
            onClick={() => {
              scrollToSection(sectionName);
            }}
          >
            <a href={`#${sectionName}`}>
              <b>{sectionName}</b>
            </a>
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:py-[5px] md:pl-[1px] lg:py-[5.2px] lg:pl-0`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}