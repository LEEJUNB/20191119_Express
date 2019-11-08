//globalRouter
export const join = (req,res) => res.send('Join');
export const login = (req,res) => res.send('Login');
export const logout = (req,res) => res.send('Logout');

//userRouter
export const users = (req,res) => res.send('USER!!');
export const userDetail = (req,res) => res.send("UserDetail!!");
export const editProfile = (req,res) => res.send("editProfile!!");
export const changePassword = (req,res) => res.send("changPassword!!");