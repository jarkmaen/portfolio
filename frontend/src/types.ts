import type { ComponentType } from "react";

type BaseTechIcon = {
    title: string;
};

type WithIcon = BaseTechIcon & {
    Icon: ComponentType;
    url?: never;
};

type WithUrl = BaseTechIcon & {
    Icon?: never;
    url: string;
};

export type TechIcon = WithIcon | WithUrl;
