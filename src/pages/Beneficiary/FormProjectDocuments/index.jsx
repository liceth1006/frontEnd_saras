import { useState } from "react";
import Swal from 'sweetalert2';
const FormProjectDocuments = () => {
  const [documentName, setDocumentName] = useState("");
  const [documentUrl, setDocumentUrl] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [documentDescription, setDocumentDescription] = useState("");
  const [documents, setDocuments] = useState([]);

  const handleChange = (setValue) => (event) => {
    setValue(event.target.value);
  };

  const handleAddDocument = (event) => {
    event.preventDefault();
    if (!documentName || !documentUrl) {
      Swal.fire({
        title: 'Error',
        text: "Nombre y URL del documento son requeridos.",
        icon: 'error',
        customClass: {
            confirmButton: 'custom-button' 
        }
    });
    
      return;
    }
    const newDocument = {
      document_id: documents.length ? Math.max(documents.map(doc => doc.document_id)) + 1 : 1,
      document_name: documentName,
      document_url: documentUrl,
      document_type: documentType,
      description: documentDescription,
    };
    setDocuments([...documents, newDocument]);
    setDocumentName("");
    setDocumentUrl("");
    setDocumentType("");
    setDocumentDescription("");
  };

  const handleRemoveDocument = (documentId) => {
    setDocuments(documents.filter((doc) => doc.document_id !== documentId));
  };

  return (
    <div className="mt-5 flex flex-col items-center">
      <div className="w-full flex-1 mt-5 p-10">
        <div className="flex flex-col items-center pt-4">
          <form className="w-full" onSubmit={handleAddDocument}>
            <div className="grid grid-cols-2 md:grid-cols gap-4">
              <div className="flex flex-col">
                <label className="mb-2">Nombre del Documento:</label>
                <input
                  type="text"
                  value={documentName}
                  onChange={handleChange(setDocumentName)}
                  className="p-2 border rounded"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">URL del Documento:</label>
                <input
                  type="text"
                  value={documentUrl}
                  onChange={handleChange(setDocumentUrl)}
                  className="p-2 border rounded"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Tipo de Documento:</label>
                <input
                  type="text"
                  value={documentType}
                  onChange={handleChange(setDocumentType)}
                  className="p-2 border rounded"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Descripción:</label>
                <textarea
                  value={documentDescription}
                  onChange={handleChange(setDocumentDescription)}
                  className="p-2 border rounded"
                />
              </div>
              <div className="flex justify-center space-x-4 mt-5 p-6">
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Agregar Documento
                </button>
              </div>
            </div>
          </form>
          <div className="mt-5 w-full">
            <div className="px-10">
              <h3 className="text-lg font-semibold">Documentos Agregados:</h3>
              <ul className="mt-2">
                {documents.map((doc) => (
                  <li
                    key={doc.document_id}
                    className="flex justify-between items-center p-2 border-b"
                  >
                    <div className="flex flex-col">
                      <span><strong>Nombre:</strong> {doc.document_name}</span>
                      <span><strong>URL:</strong> {doc.document_url}</span>
                      <span><strong>Tipo:</strong> {doc.document_type}</span>
                      <span><strong>Descripción:</strong> {doc.description}</span>
                    </div>
                    <button
                      onClick={() => handleRemoveDocument(doc.document_id)}
                      className="px-2 py-1 bg-red-500 text-white rounded"
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormProjectDocuments;
