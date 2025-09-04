// core/useCases/user.usecase.js
import { useUserStore } from "../../store/userStore";
import { apiService } from "../../infra/api.service";
import { userEndpoint } from "../endpoint/user.endpoint";

export const userUseCase = {
  registerUser: async () => {
    const { name, email, password, resetUser } = useUserStore.getState();
    try {
      const { method, url } = userEndpoint.register;
      const response = await apiService.request({ method, url, data: { name, email, password } });
      console.log("Utilisateur créé:", response);
      resetUser();
    } catch (err) {
      console.error("Erreur registerUser:", err);
    }
  },

  fetchUser: async (id) => {
    const { setField } = useUserStore.getState();
    try {
      const { method, url } = userEndpoint.fetch;
      const data = await apiService.request({ method, url, data: { id } });
      setField("name", data.name);
      setField("email", data.email);
    } catch (err) {
      console.error("Erreur fetchUser:", err);
    }
  },

  updateUser: async (id) => {
    const { name, email, password } = useUserStore.getState();
    try {
      const { method, url } = userEndpoint.update;
      const data = await apiService.request({ method, url, data: { id, name, email, password } });
      console.log("Utilisateur mis à jour:", data);
    } catch (err) {
      console.error("Erreur updateUser:", err);
    }
  },

  deleteUser: async (id) => {
    try {
      const { method, url } = userEndpoint.delete;
      const data = await apiService.request({ method, url, data: { id } });
      console.log("Utilisateur supprimé:", data);
    } catch (err) {
      console.error("Erreur deleteUser:", err);
    }
  },
};
