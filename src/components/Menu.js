import { Link } from 'react-router-dom';  
import { AddContext } from '../components/Contexts/AddContext';
import { useContext } from "react";

export default function Menu ()
{
    const {count}= useContext(AddContext);
    return (
        <>
        <nav>
            <Link to = {'/'}>Home </Link>
            {/* <Link to = {'about'}>About </Link>
            <Link to = {'privacy'}>Privacy </Link> */}
            <Link to = {'product'}>Products </Link>
            <Link to = {'bag'}>Bag: {count}</Link>
            <Link to = {'task'}>Task</Link>
        </nav>
        </>
    );
}