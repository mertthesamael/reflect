import React, { useRef, useState } from 'react'

type useSpotlightEffectProps = {

}

export const useSpotlightEffect = () => {

    const divRef = useRef<any>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<any>) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();
        setTimeout(() => {
            setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }, 150);
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(0.08);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(0.08);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };


    return {
        handleMouseMove,
        handleFocus,
        handleBlur,
        handleMouseEnter,
        handleMouseLeave,
        divRef,
        isFocused,
        position,
        opacity,
    }
}

