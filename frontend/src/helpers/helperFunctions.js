
export const downloadBlob = (blob, filename) => {
    let element = document.createElement('a');
    element.setAttribute('href', blob);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

export const convertToSlug = (Text) => {
    return Text.toLowerCase()
               .replace(/ /g, '-')
               .replace(/[^\w-]+/g, '');
}