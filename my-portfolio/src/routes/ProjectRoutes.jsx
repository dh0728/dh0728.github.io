import { Routes, Route} from "react-router-dom" 
import ProjectPage from "../pages/ProjectPage";
import CodeNovaPage from "../pages/codeNova/codeNovaPage";

const ProjectRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ProjectPage/>}/>
            <Route path="/codenova" element={<CodeNovaPage/>}/>
        </Routes>
    );
};

export default ProjectRoutes;