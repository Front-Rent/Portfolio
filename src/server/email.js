import emailjs from "emailjs-com";

export const sendEmailWithEmailJS = async (formData) => {
  try {
    const response = await emailjs.send(
      "service_9dvfgbh",
      "template_4lc90yw",
      formData,
      "G4oq1Ldx3K5iqSUp3"
    );
    return response.text;
  } catch (error) {
    throw new Error(error.text || "Failed to send email");
  }
};
