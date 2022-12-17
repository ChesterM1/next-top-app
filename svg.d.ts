// import React, { SVGAElement } from "react";s

declare module "*.svg" {
    const content: React.FC<React.SVGAttributes<SVGAElement>>;
    export default content;
}
