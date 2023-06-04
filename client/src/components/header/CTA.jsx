import React from 'react'
const Resume="https://www.overleaf.com/download/project/62d4edfa570fabdb1bba4643/build/182a5f7df7d-5a48a575c5bc79c5/output/output.pdf?compileGroup=standard&clsiserverid=clsi-reg-e2-c-f-kcfn&popupDownload=true";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">Download Resume</a>
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA
