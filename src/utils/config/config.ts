const dataId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const endpoint = import.meta.env.VITE_APPWRITE_URL;
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;

export const AppwriteConfig = {
  endpoint,
  projectId,
  dataId,
};

export const uid = () => {
  const id = () => Math.random().toString(16).slice(2);
  return id() + id() + id();
};
