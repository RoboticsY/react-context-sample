import { useContext } from "react";
import ThemeContext from "./contexts/ThemeContext";

const ChildComponent = () => {
    const theme = useContext(ThemeContext)
    return (
        <>
            <p>theme: {theme.theme}</p>
            <p>text: {theme.text}</p>
        </>
    )
}
export default ChildComponent