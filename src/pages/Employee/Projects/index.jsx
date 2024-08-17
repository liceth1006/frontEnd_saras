import { useEffect, useState } from "react";
import useBeneficiaryInfConnection from "../../../hooks/beneficiaryInformation.jsx";
import Table from "../../../components/Table";
import Hero from "../../../components/Hero";
import Search from "../../../components/Search";
const Projects = () => {
  const { readBeneficiaryInfAll } = useBeneficiaryInfConnection();
  const [consulta, setConsulta] = useState("");
  const [beneficiaryInf, setBeneficiaryInf] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBeneficiaryInfo = async () => {
      setLoading(true);
      try {
        const data = await readBeneficiaryInfAll();
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
  }, [readBeneficiaryInfAll]);

  // Define columns with the correct accessors
  const columns = [
    { header: "Tipo crédito", accessor: "Tipo_Credito" },
    { header: "Nombre o razón social", accessor: "company_name" },
    { header: "Sector", accessor: "sector_name" },
    { header: "CIIU Principal", accessor: "acti_name" },
    { header: "Categorización", accessor: "Categoria" },
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
      item.Tipo_Credito
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
      <div className="flex items-end justify-end m-3">
        <Search type="text" placeholder="Buscar " setConsulta={setConsulta} />
      </div>
      <Table columns={columns} data={filtered} consulta={consulta} />
    </>
  );
};

export default Projects;
