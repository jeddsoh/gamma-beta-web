import { ReactNode, HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement>{
    children?: ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', ...props }) => {
    return (
        <section className={className} {...props}>
            {children}
        </section>
    )
}

export default Section;