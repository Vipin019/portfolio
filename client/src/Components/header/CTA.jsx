const Resume =
  "https://www.overleaf.com/download/project/62d4edfa570fabdb1bba4643/build/18cb405ea5d-f649912e1039a080/output/output.pdf?compileGroup=standard&clsiserverid=clsi-pre-emp-n2d-b-f-xw7g&enable_pdf_caching=true&popupDownload=true";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} target="_blank" download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
