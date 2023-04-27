const { useRef, useEffect } = require("react")

function useClickOutside(handler) {
    const domNode = useRef()
    useEffect(() => {
        const handleHideWhenClickOutside = (e) => {
            if (!domNode?.current?.contains(e.target)) {
                handler()
            }
        }
        document.addEventListener('mousedown', handleHideWhenClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleHideWhenClickOutside)
        }
    }, [])
    return domNode;
}

export default useClickOutside