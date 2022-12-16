import React, { ReactSVGElement } from "react";

declare module "*.svg" {
    const content = React.FC<React.SVGAttributes<ReactSVGElement>>;
}
