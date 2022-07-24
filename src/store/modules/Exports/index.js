import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

export default 
{
    namespace: true,
    state()
    {
        return {
            report: {
                
            },
            lastFetch: new Date().getTime(),
        }
    },
    getters: getters,
    mutations: mutations,
    actions: actions,
};