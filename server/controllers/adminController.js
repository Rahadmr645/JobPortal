import User from '../models/User.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message })
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            res.status(404).json({ message: "user not found" });
            return;
        }
        res.status(200).json({ message: "user deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "error delteing user", error: error.message })
    }
}

