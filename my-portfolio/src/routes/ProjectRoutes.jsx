import { Routes, Route} from "react-router-dom" 
import ProjectPage from "../pages/ProjectPage"

const ProjectRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ProjectPage/>}/>
        </Routes>
    );
};

export default ProjectRoutes;