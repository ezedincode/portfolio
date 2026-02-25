const SIGNED_CV_URL =
    'https://ytpspmmgeaxouldfeovf.supabase.co/storage/v1/object/sign/Resume/CV.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZmIxZjAzMy1mYjgxLTQwZWItYWVkZC1mNGFiODFkMDk3YjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJSZXN1bWUvQ1YucGRmIiwiaWF0IjoxNzcyMDEwNjQ3LCJleHAiOjE4MDM1NDY2NDd9.grWptb4W0eV8WwjeEalFU1i47NmFqP95CNtXd6UH0k8'

    
export async function downloadCV(filename = 'CV.pdf') {
    const response = await fetch(SIGNED_CV_URL, { method: 'GET' })
    if (!response.ok) {
        throw new Error(`Failed to download CV (HTTP ${response.status})`)
    }

    const blob = await response.blob()
    const objectUrl = URL.createObjectURL(blob)

    try {
        const link = document.createElement('a')
        link.href = objectUrl
        link.download = filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    } finally {
        URL.revokeObjectURL(objectUrl)
    }
}
