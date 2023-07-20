import Particles from "react-particles";
import particlesOptions from "./particles.json";
import useParticlesInit from "./useParticlesInit";


export default function Teste(){

    const particlesInit = useParticlesInit()

    return(
        <Particles options={particlesOptions} init={particlesInit}/>
    )
}