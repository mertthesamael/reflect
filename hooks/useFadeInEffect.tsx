import { animate, inView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

type useFadeInEffectProps = {
    
}

export const useFadeInEffect = () => {

    const elementRef = useRef<any>(null)

    useEffect(() => {
        if (elementRef.current) {
            inView(elementRef.current, (info) => {
                const animation = animate(info.target, { opacity: 1 },{duration:0.5,delay:0.5})
                console.log("Element has entered the viewport")
            })
        }
    }, [elementRef.current])


    return {
        elementRef
    }
}

