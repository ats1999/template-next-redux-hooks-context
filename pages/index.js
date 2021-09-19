import {useContext} from "react";
import {Heading} from "@chakra-ui/react";
import UserContext from "@src/context/userContext";
export default function Home(props){
    const user = useContext(UserContext);
    console.log(user)
    return <div>
        <Heading>Home..</Heading>
    </div>
}