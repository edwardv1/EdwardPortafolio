import { useState, useEffect } from "react";
import logoE from "../../assets/LetraE.png";
import styles from "./Header.css";
import OptionsNavSup from "../../components/headerComponents/OptionsNavSup";
import MenuSmallDevices from "../../components/headerComponents/MenuSmallDevices";

export default function Header ({handleSidebarVisibility}){
    
    const [menuVisible, setMenuVisible] = useState(false);
    const [checkboxChecked, setCheckboxChecked] = useState(false);

    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
      handleSidebarVisibility(!menuVisible);
    };

    // Establezco una clase CSS condicional basada en el valor de scrolling
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll); //evento de desplazamiento al montar el componente
    
    return () => {
      window.removeEventListener('scroll', handleScroll); // Limpia el evento de desplazamiento al desmontar el componente
    };
  }, []);

  const navClass = scrolling ? 'bg-[rgba(112,112,112,0.9)] transition-bg duration-500' : 'bg-[rgba(0,0,0,0.38)] transition-bg duration-500';

    return(
        <nav className={`fixed top-0 z-50 w-[100vw] py-6 m-auto px-10 text-base font-base items-center ${navClass}`}>
            <div className="flex justify-between">
                <div className=" flex justify-around items-center" >
                    <img src={logoE} width="28" alt="logo" className=" md:mr-8 mdMiddle:mr-0" />
                    <p className=" ml-2 w-[156px] text-white font-mono md:text-lg md:hidden mdMiddle:block xl:text-xl">Edward Vera</p>
                </div>
                {/* Opciones del navbar superior */}
                <OptionsNavSup/>
                {/* Boton de menu Hamburguesa*/}
                <div className=" md:hidden">
                    <input 
                      id="checkbox" 
                      type="checkbox" 
                      onClick={toggleMenu}
                      checked={checkboxChecked}
                      onChange={() => setCheckboxChecked(!checkboxChecked)}
                    />
                    <label className="toggle bg-none" htmlFor="checkbox" >
                        <div id="bar1" className="bars" ></div>
                        <div id="bar2" className="bars"></div>
                        <div id="bar3" className="bars"></div>
                    </label>
                </div>
                {/* Navbar Lateral para Small Devices */}
                <MenuSmallDevices navClass={navClass} menuVisible={menuVisible} toggleMenu={toggleMenu} setCheckboxChecked={setCheckboxChecked}/>
            </div>
        </nav>
    )
}