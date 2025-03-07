import axios from "axios";

export const sendEmail = async (email: string) => {
  try {
    const SEND_EMAIL = process.env.SEND_EMAIL;
    const payload = {
      to: email,
      type: "Welcome",
    };
    await axios.post(SEND_EMAIL, JSON.stringify(payload));
    console.log("Email enviado al Microservicio");
  } catch (error) {
    console.error(`Error al enviar el email ${error}`);
  }
};
