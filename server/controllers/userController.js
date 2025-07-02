import User from "../models/User.js";


export const edithProfile = async (req, res ) => {
    try {

        const { name } = req.body;
        const image = req.file ? '/uploads/' + req.file.filename : undefined;


        const updatedData = { name };
        if (image) updatedData.image = image;

        await User.findByIdAndUpdate(req.user.id, updatedData, { new: true });

        res.json({ message: "updated successfully" })


    } catch (error) {
        res.status(500).json({ message: 'faild updated' })
    }
}