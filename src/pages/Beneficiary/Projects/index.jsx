import { useState, useEffect } from "react";
import Table from "../../../components/Table";
import { projectConnection } from '../../../data/projectConnection';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await projectConnection.readProject();
      console.log(data);
      setProjects(data);
    };
    fetchProjects();
  }, []);

  // Define columns with the correct accessors
  const columns = [
    { header: "Nombre del Proyecto", accessor: "proj_name" },
    { header: "Descripción del Proyecto", accessor: "proj_description" },
    { header: "Valor Total del Proyecto", accessor: "total_project_value" },
    { header: "Valor Estimado Financiado", accessor: "estimated_value_financed" },
    { header: "Acciones", accessor: "actions" }, // Assuming actions are not from data
  ];

  return (
    <>
      <h2>Mis Proyectos</h2>
      <Table columns={columns} data={projects} />
    </>
  );
};

export default Projects;
