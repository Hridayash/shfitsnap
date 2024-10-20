import Header from "../components/header";
import Recent from "../components/recent";
import Summary from "../components/summary";
import Time from "../components/time";
import Button from "../components/button";
export default function Home (){

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
      };


 

    return (
        <>
           <Header />

           <Summary />
           <Time />
           <Recent />
           <Button
                        onClick={toggleDarkMode}
                      label="Toggle Dark Mode"
                   />

            
        </>
    );
}