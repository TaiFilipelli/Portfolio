import * as React from "react";

export interface VerticalTimelineProps {
    animate?: boolean;
    children?: React.ReactNode;
    className?: string;
    layout?: "1-column" | "1-column-left" | "1-column-right" | "2-columns";
    lineColor?: string;
}

export interface VerticalTimelineElementProps {
    children?: React.ReactNode;
    id?: string;
    className?: string;
    date?: string;
    dateClassName?: string;
    iconClassName?: string;
    iconOnClick?: () => void;
    iconStyle?: React.CSSProperties;
    icon?: React.ReactNode;
    intersectionObserverProps?: any;
    onTimelineElementClick?: () => void;
    position?: string;
    style?: React.CSSProperties;
    textClassName?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    visible?: boolean;
}

export class VerticalTimeline extends React.Component<VerticalTimelineProps> {}
export class VerticalTimelineElement extends React.Component<VerticalTimelineElementProps> {}
