const SarasInstruction = () => {
  return (
    <div className="bg-gray-200 px-2 py-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-base font-semibold leading-7 text-primary-500">
          Instrucciones para Llenar el Formulario SARAS
        </p>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Guía para el Formulario SARAS
        </h2>
        <p className="mt-6 text-center text-lg leading-8 text-slate-700">
          En el año 2015, la Financiera de Desarrollo Territorial S.A. –en
          adelante FINDETER– implementó un Sistema de Administración de Riesgos
          Ambientales y Sociales –en adelante SARAS– con el objetivo de
          incorporar e implementar políticas y prácticas ejemplares en términos
          de responsabilidad ambiental en armonía con un desarrollo sostenible.
        </p>
       
        <div className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
          <div className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img
              src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
              alt="Powered by ChatGPT"
              className="mx-auto h-10 w-10"
            />
            <h3 className="my-3 font-display font-medium">Guía Detallada</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Sigue esta guía detallada para llenar correctamente cada sección
              del formulario SARAS.
            </p>
          </div>
          <div className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img
              src="https://www.svgrepo.com/show/530442/port-detection.svg"
              alt="Easy to use"
              className="mx-auto h-10 w-10"
            />
            <h3 className="my-3 font-display font-medium">
              Instrucciones Claras
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Cada sección del formulario está diseñada para que la información
              sea fácilmente entendible y procesable.
            </p>
          </div>
          <div className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img
              src="https://www.svgrepo.com/show/530444/availability.svg"
              alt="Custom settings"
              className="mx-auto h-10 w-10"
            />
            <h3 className="my-3 font-display font-medium">
              Configuraciones Personalizadas
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Ofrecemos opciones avanzadas para personalizar el análisis según
              las necesidades específicas del proyecto.
            </p>
          </div>
          <div className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <a href="/pricing" className="group">
              <img
                src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                alt="Free trial"
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                Prueba Gratuita
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                Disponemos de una prueba gratuita para familiarizarte con el
                sistema sin compromiso.
              </p>
            </a>
          </div>
          <div className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <a href="/templates" className="group">
              <img
                src="https://www.svgrepo.com/show/530450/page-analysis.svg"
                alt="90+ templates"
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                Más de 90 Plantillas
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                Ofrecemos una amplia variedad de plantillas para ayudarte a
                estructurar tu análisis de manera eficiente.
              </p>
            </a>
          </div>
          <div className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <a href="/download" className="group">
              <img
                src="https://www.svgrepo.com/show/530453/mail-reception.svg"
                alt="Use Anywhere"
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                Uso en Cualquier Lugar
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                Nuestro sistema es compatible con múltiples plataformas para que
                puedas trabajar desde cualquier lugar.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SarasInstruction;
