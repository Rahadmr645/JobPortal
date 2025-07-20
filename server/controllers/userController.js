import User from "../models/User.js";




// eiditProfile
export const edithProfile = async (req, res) => {
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

// edit profile
export const addProfilePic = async (req, res) => {
  try {

    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { profilePic: req.file.path },
      { new: true }
    );
    res.status(200).json({ message: "image upload successful " })

  } catch (error) {
    res.status(500).json({ message: "faild to upload image", error: error.message })
  }
}


// delete user account

export const deleteUser = async (req, res) => {
  try {

   const userId = req.user._id;

    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: 'User not found' });


    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: 'User delete successfull' })

  } catch (error) {
    res.status(500).json({ message: 'Internal error', error: error.message })
  }
}