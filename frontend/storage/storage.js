const CV_URL = `${import.meta.env.BASE_URL}CV.pdf`

export function downloadCV() {
    // Open the PDF from the public directory in the browser's built-in PDF viewer
    window.open(CV_URL, '_blank', 'noopener,noreferrer')
}
