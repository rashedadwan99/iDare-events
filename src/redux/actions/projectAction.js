import { FAILED, SUCCESS } from "../../services/httpService";
import { getProjects } from "../../services/projectsService";

export const GET_PROJECTS = "GET_PROJECTS";

export const getProjectAction = () => {
  return async (dispatch) => {
    const { data } = await getProjects();
    if (data.AZSVR === SUCCESS)
      dispatch({ type: GET_PROJECTS, payload: data.Projects });
    else if (data.AZSVR === FAILED) return;
  };
};
