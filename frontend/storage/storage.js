const SIGNED_CV_URL =
    'https://ytpspmmgeaxouldfeovf.supabase.co/storage/v1/object/sign/Resume/CV.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZmIxZjAzMy1mYjgxLTQwZWItYWVkZC1mNGFiODFkMDk3YjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJSZXN1bWUvQ1YucGRmIiwiaWF0IjoxNzcyMDEwNjQ3LCJleHAiOjE4MDM1NDY2NDd9.grWptb4W0eV8WwjeEalFU1i47NmFqP95CNtXd6UH0k8'

    
export async function downloadCV() {
    // Open the PDF in the browser's built-in PDF viewer
    window.open(SIGNED_CV_URL, '_blank', 'noopener,noreferrer')
}
