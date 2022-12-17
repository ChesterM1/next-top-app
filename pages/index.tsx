import Image from "next/image";
import { useEffect, useState } from "react";
import { Htag, Button, P, Tag, Rating } from "../components";
import { Layout, withLayout } from "../Layout/Layout";

function Home() {
    const [rating, setRating] = useState<number>(1);
    return (
        <>
            <Htag tag="h1">hello World</Htag>
            <Button appearance="ghost" arrow={"right"}>
                on Click...
            </Button>
            <P>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate fugit quaerat voluptatem non fugiat voluptate ea cum.
                Sit ipsam rerum rem blanditiis, fugit eveniet incidunt?
            </P>
            <Tag size="S" color="red">
                red
            </Tag>
            <Tag size="M" color="ghost">
                ghost
            </Tag>
            <Tag size="M" color="green">
                Green
            </Tag>
            <Tag color="primary">primary</Tag>
            <Tag color="grey" href="google.com">
                gray
            </Tag>
            <Rating rating={rating} isEditable setRating={setRating} />
        </>
    );
}
export default withLayout(Home);
