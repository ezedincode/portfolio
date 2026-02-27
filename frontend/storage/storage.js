const CV_URL = '/CV%20(2).pdf'

export function downloadCV() {
    // Open the PDF from the public directory in the browser's built-in PDF viewer
    window.open(CV_URL, '_blank', 'noopener,noreferrer')
}
