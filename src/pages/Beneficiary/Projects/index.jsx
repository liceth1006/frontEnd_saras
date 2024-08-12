import { useEffect, useState } from "react";
import useBeneficiaryInfConnection from '../../../hooks/beneficiaryInformation.jsx';
import Table from "../../../components/Table";
import Hero from "../../../components/Hero";
import Search from '../../../components/Search' 
const Projects = () => {
  const { readBeneficiaryInf } = useBeneficiaryInfConnection();
  const [beneficiaryInf, setBeneficiaryInf] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBeneficiaryInfo = async () => {
      setLoading(true);
      try {
        const data = await readBeneficiaryInf();
        setBeneficiaryInf(data);
      } catch (error) {
        console.error("Error al recuperar los detalles del beneficiario:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBeneficiaryInfo();
  }, [readBeneficiaryInf]);

  // Define columns with the correct accessors
  const columns = [
    { header: "Tipo crédito", accessor: "type_name" },
    { header: "Nombre o razón social", accessor: "company_name" },
    { header: "Sector", accessor: "sector_name" },
    { header: "CIIU Principal", accessor: "acti_name" },
    { header: "Categorización", accessor: "type_name" },
    { header: "Exclusión", accessor: "exc_name" },
    { header: "Acciones", accessor: "actions" }, 
  ];

  if (loading) return <div>Cargando...</div>;

  return (
    <>
      <Hero />
      <div className="flex items-end justify-end my-3">
        <Search />
      </div>
      <Table columns={columns} data={beneficiaryInf} />
    </>
  );
};

export default Projects;
