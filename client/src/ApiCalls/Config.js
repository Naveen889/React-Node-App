import localforage from "localforage";

const config = {
    Base_URL: "http://localhost:3001",
    LOCAL_FORAGE: localforage.createInstance({ name: "javaQ" }),
}
export default config;