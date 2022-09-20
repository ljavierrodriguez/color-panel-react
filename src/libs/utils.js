export const generateColor = () => {
    const valores = "0123456789ABCDEF";
    let color = "";

    for(let i=0; i<6; i++){
        const char = valores.charAt(Math.floor(Math.random() * valores.length));
        color += char;
    }

    return `#${color}33`;
}