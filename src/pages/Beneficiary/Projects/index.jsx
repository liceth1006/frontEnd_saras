import { useEffect, useState } from "react";
import useBeneficiaryInfConnection from "../../../hooks/beneficiaryInformation.jsx";
import Table from "../../../components/Table";
import Hero from "../../../components/Hero";
import Search from "../../../components/Search";
const Projects = () => {
  const { readBeneficiaryInf } = useBeneficiaryInfConnection();
  const [consulta, setConsulta] = useState("");
  const [beneficiaryInf, setBeneficiaryInf] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBeneficiaryInfo = async () => {
      setLoading(true);
      try {
        const data = await readBeneficiaryInf();
        setBeneficiaryInf(data);
      } catch (error) {
        console.error(
          "Error al recuperar los detalles del beneficiario:",
          error
        );
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
  const filtered = beneficiaryInf.filter((item) => {
    return (
      consulta === "" ||
      item.company_name
        .toLocaleLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .includes(
          consulta
            .toLocaleLowerCase()
            .normalize("NFD")
            .replace(/\p{Diacritic}/gu, "")
        ) ||
      item.type_name
        .toLocaleLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .includes(
          consulta
            .toLocaleLowerCase()
            .normalize("NFD")
            .replace(/\p{Diacritic}/gu, "")
        ) ||
      item.sector_name
        .toLocaleLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .includes(
          consulta
            .toLocaleLowerCase()
            .normalize("NFD")
            .replace(/\p{Diacritic}/gu, "")
        )
    );
  });

  return (
    <>
      <Hero />
      <div className="flex items-end justify-end my-3">
        <Search type="text" placeholder="Buscar " setConsulta={setConsulta} />
      </div>
      <Table columns={columns} data={filtered} consulta={consulta} />
    </>
  );
};

export default Projects;
