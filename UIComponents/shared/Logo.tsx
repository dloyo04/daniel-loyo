import { Icon, IconProps } from "@chakra-ui/react";

export const Logo = (props: IconProps) => {
    return (
        <Icon viewBox="0 0 120 100" fill="none" boxSize="10" {...props}>
            {/* D */}
            <path
                d="M20 20 V80 H50 C70 80 70 20 50 20 H20 Z"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* L */}
            <path
                d="M85 20 V80 H110"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
};
