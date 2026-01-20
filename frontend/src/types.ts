import type { ComponentType } from "react";

type BaseTechItem = {
    title: string;
};

type WithIcon = BaseTechItem & {
    Icon: ComponentType;
    url?: never;
};

type WithUrl = BaseTechItem & {
    Icon?: never;
    url: string;
};

export type TechItem = WithIcon | WithUrl;
