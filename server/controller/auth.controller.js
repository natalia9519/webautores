import User from "../model/authModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({ success: false, message: 'Usuario o contraseña incorrecta' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ success: false, message: 'Contraseña incorrecta' });
    }

    if (existingUser.active === 0) {
      return res.status(400).json({
        success: false,
        message: 'El usuario no es válido',
        active: existingUser.active,
      });
    }

    const token = jwt.sign(
      { userId: existingUser._id, email: existingUser.email, role: existingUser.role },
      "codigosecreto",
      { expiresIn: '1h' }
    );

    res.status(200).json({ success: true, token, role: existingUser.role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al iniciar sesión' });
  }
}

export const Register = async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUsername = await User.findOne({ username: username });
        if (existingUsername) {
            return res.status(400).json({ message: "Este usuario ya existe" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username: username,
            password: hashPassword
        });

        await newUser.save();
        res.status(200).json({ message: "Registro creado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Ha ocurrido un error al registrar el usuario", error });
    }
}

// Controlador para mostrar todos los registros
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Controlador para mostrar un único registro por su ID
export const getUserById = async (req, res) => {
    const id  = req.params.id;
    console.log(id)
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al obtener el usuario", error });
    }
}

// Controlador para actualizar un registro por su ID
export const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { username, password, email } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { username, password, email }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario actualizado exitosamente", updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al actualizar el usuario", error });
    }
}

// Controlador para eliminar un registro por su ID
export const deleteUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario eliminado exitosamente", deletedUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

