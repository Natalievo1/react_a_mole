import { useEffect } from "react";
import Molehill from '../assets/molehill.png'; 

const EmptySlot = ({ toggle }) => { // Using destructuring for props to directly access `toggle`
    useEffect(() => {
        // Random time for the mole to appear
        let randSeconds = Math.ceil(Math.random() * 5000);
        let timer = setTimeout(() => {
            toggle(true); // Call the toggle function passed as a prop
        }, randSeconds);
        return () => clearTimeout(timer); // Cleanup to clear the timeout when the component unmounts or re-renders
    }, [toggle]); // Added toggle to the dependency array to follow best practices for useEffect

    return (
        <div>
            <img 
                style={{ width: '30vw' }}
                src={Molehill}
                alt="An empty molehill" 
            />
        </div>
    );
}

export default EmptySlot;
