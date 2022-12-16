import Image from "next/image";
import { Htag, Button, P } from "../components";

export default function Home() {
    return (
        <div>
            <Htag tag="h1">hello World</Htag>
            <Button appearance="ghost" arrow={"right"}>
                on Click...
            </Button>
            <P>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate fugit quaerat voluptatem non fugiat voluptate ea cum.
                Sit ipsam rerum rem blanditiis, fugit eveniet incidunt?
            </P>
        </div>
    );
}
