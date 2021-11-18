const getters = {
   userInfo: (state: { user: { userInfo: any; }; }) => state.user.userInfo,
};
export default getters;
